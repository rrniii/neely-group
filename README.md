# Neely Research Group

A research-group website for Professor Ryan R. Neely III and colleagues at the University of Leeds and the National Centre for Atmospheric Science.

**Website:** https://rrniii.github.io/neely-group/

Forked from [mgrau/graulab.org](https://github.com/mgrau/graulab.org), retaining its Jekyll / al-folio structure, search, theme switcher, structured people data and BibTeX publications. The original MIT licence is retained.

## Edit the site

| Content                                 | Source                                                       |
| --------------------------------------- | ------------------------------------------------------------ |
| Homepage                                | `_pages/about.md`                                            |
| Name, description and URL               | `_config.yml`                                                |
| People and institutional profile links  | `_data/people.yml`                                           |
| Research areas                          | `_projects/*.md`                                             |
| Publications                            | `_publications/papers.bib`                                   |
| Research data and archive links         | `_pages/data.md`                                             |
| Teaching, fieldwork and contact         | `_pages/teaching.md`, `_pages/gallery.md`, `_pages/visit.md` |
| Colours and layout additions            | `_sass/_group.scss`                                          |
| Public contact and research identifiers | `_data/socials.yml`                                          |

Set `featured: true`, `importance`, `short_title` and `highlight_label` on a project to control the three homepage highlights and the leading research cards. The featured projects are GAMB2LE, TONe–ICO / SnøTroll and radar aeroecology.

Set `selected = {true}` on a BibTeX entry to feature it on the homepage. Publication metadata is maintained explicitly; no automatic citation-count scraping is enabled. People are a selection from linked public profiles, not a complete employment roster. Current and past doctoral supervision are held separately in `_data/people.yml`; supervision periods do not imply current appointments or graduation dates.

## Build and preview

Use Ruby 3.3.5 and Bundler. Docker is an optional alternative using the inherited Compose configuration.

```sh
bundle config set --local path vendor/bundle
bundle install
JEKYLL_ENV=production bundle exec jekyll build
python3 scripts/check_site.py
bundle exec jekyll serve --host 127.0.0.1
```

The preview is at `http://127.0.0.1:4000/neely-group/`. Ruby dependencies and the build output are ignored by Git.

For formatting:

```sh
npm ci --ignore-scripts
npx prettier . --write
```

## Deployment

Push to `main` to build, check internal links and publish through GitHub Actions. In repository Settings → Pages, use **GitHub Actions** as the source. Pull requests build and validate without deploying. The deployed artifact is `_site/`; do not edit generated files.

`url` and `baseurl` in `_config.yml` must change together if the hosting location changes. No custom domain is configured.

## Sources and media

See [SOURCES.md](SOURCES.md) for public content sources and image credits. Private correspondence, calendars and unpublished proposal material are not included. The upstream lab's content, calendar configuration, contact information and assets have been removed from the working site; they remain recoverable in Git history.
