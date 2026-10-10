# Agent guidelines for Neely Research Group

This is a Jekyll / al-folio fork of mgrau/graulab.org. Preserve the template's navigation, search, theme switcher and bibliography features.

- Read README.md and SOURCES.md before changing content.
- Edit `_pages`, `_projects`, `_data/people.yml` and `_publications/papers.bib`, not generated `_site`.
- Use public institutional sources for identities and roles. Keep collaborators distinct from direct membership; do not infer current appointments from historical CV dates.
- Do not publish private email, calendar records, unpublished proposals or credentials.
- Use `relative_url` for internal URLs: production runs under `/neely-group`.
- Keep MIT and image attribution. Do not reintroduce the original lab's calendar, custom domain or assets.
- Format with `npx prettier . --write`; build with `JEKYLL_ENV=production bundle exec jekyll build`; run `python3 scripts/check_site.py`.
- Ruby 3.3.5 is used in CI. Docker is optional when available.
- GitHub Actions builds, validates, and deploys `_site` on pushes to `main`.
- Commit and push changes as work progresses, including source, logo assets and design prompts. Do not leave requested deliverables only in ignored preview folders. Verify the push succeeded and report the commit in the completion update.
