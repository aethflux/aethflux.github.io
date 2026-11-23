# Jiaqi Sun

Personal site for Jiaqi Sun (孙佳琦). It is a Jekyll site that GitHub Pages builds on its own.

Live URL, once `main` has been built: <https://aethflux.github.io>

## Pages

| URL | Source |
| --- | --- |
| `/` | `index.html` — home and about |
| `/projects/` | `projects.html`, fed by `_data/projects.yml` |
| `/writing/` | `writing.html` — lists posts |
| `/writing/<slug>/` | one file in `_posts/` |
| `/feed.xml` | Atom feed, generated at build time |
| `/404.html` | not-found page |

The first post, “Why a pharmacy background matters for bio model post-training,” is a **draft placeholder**. It is marked on the page and in the index. Replace the file when the real note exists.

## Add a project

Edit `_data/projects.yml`. Each entry is one project. `featured: true` also shows it on the home page. Omit `featured`, or set it to `false`, to list it only on Projects.

```yaml
- name: Project name
  url: https://github.com/aethflux/project
  repo: aethflux/project
  summary: One sentence, only what the repo actually does.
  description: >
    A short paragraph.
  highlights:
    - A factual point you can point at in the repo.
  tags:
    - Python
  featured: true
```

Push to `main`. GitHub Pages republishes the site. No rebuild command and no GitHub Actions workflow.

## Add a post

Create `_posts/YYYY-MM-DD-slug.md`. The date in the filename is the publication date.

```markdown
---
layout: post
title: "Post title"
date: 2026-11-23 09:00:00 +0000
excerpt: "One or two sentences for the writing index and the feed."
---

The note.
```

To show the draft banner, add `placeholder: true` to the front matter. Remove that line when the banner should go away.

A file in `_drafts/` (same front matter, any filename) stays unpublished. `bundle exec jekyll serve --drafts` previews it locally. Move it to `_posts/YYYY-MM-DD-slug.md` when it should go live.

## Local preview

Ruby and Bundler are required. GitHub Pages does not use this Gemfile when it builds; it uses its own Jekyll. The Gemfile tracks that same `github-pages` gem so a local build matches production.

```bash
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000>.

## Deploy

The repository is a GitHub Pages user site. Source is **Deploy from a branch**: branch `main`, folder `/` (root). That is already how this repo is configured (`build_type: legacy`).

There is no GitHub Actions workflow. Merging to `main` is the publish step. Do not add a `.nojekyll` file; Pages would then copy the Liquid templates instead of building them.

After a merge, the only wait is the Pages build itself. Nothing else has to be switched on.
