"""Validate generated local links, personalization and build output before deploy."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import re
import sys

site = Path('_site')
base = '/neely-group'
errors = []
required = ['index.html', 'people/index.html', 'people/clare-ballantyne/index.html', 'research/index.html', 'projects/woest/index.html', 'projects/aerosols-climate/index.html', 'join/index.html', 'about-site/index.html', 'publications/index.html', 'data/index.html', 'teaching/index.html', 'gallery/index.html', 'visit/index.html']
for name in required:
    if not (site / name).is_file():
        errors.append(f'Missing required page: {name}')

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
        self.ids = set()
    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        for key in ['href', 'src', 'poster']:
            if attrs.get(key):
                self.refs.append(attrs[key])

pages = {}
for path in site.rglob('*.html'):
    content = path.read_text()
    doc = Document()
    doc.feed(content)
    pages[path.resolve()] = doc
    for legacy in ['mgrau@', 'graulab.org/intranet', 'Old Dominion University', 'Matt Grau', 'lnh9kdIAAAAJ', 'AIza']:
        if legacy in content:
            errors.append(f'{path}: inherited identity or calendar configuration: {legacy}')
    if re.search(r'{%|{{\s*site\.', content):
        errors.append(f'{path}: unrendered Liquid')

refs = 0
for path, doc in pages.items():
    for value in doc.refs:
        link = urlparse(value)
        if link.scheme or link.netloc or not link.path:
            continue
        route = unquote(link.path)
        if route.startswith('/'):
            if route != base and not route.startswith(base + '/'):
                errors.append(f'{path.relative_to(site.resolve())}: link misses baseurl: {value}')
                continue
            target = site / route[len(base):].lstrip('/')
        else:
            target = path.parent / route
        if target.is_dir():
            target /= 'index.html'
        if not target.exists():
            errors.append(f'{path.relative_to(site.resolve())}: missing target: {value}')
        refs += 1

if (site / 'CNAME').exists():
    errors.append('CNAME must not claim the source lab domain')
if len(re.findall(r'@article\{', Path('_publications/papers.bib').read_text())) < 10:
    errors.append('Expected at least 10 verified publications')
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'PASS: {len(pages)} HTML pages, {refs} local references, required routes and personalization checks')
