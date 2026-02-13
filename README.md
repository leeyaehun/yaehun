# Yaehun Site

## Write Posts From the Site (Studio)

This project supports writing posts directly from the website at `/studio`.

### How it works

- The Studio page sends your post to `POST /api/writings`.
- The API commits a `.mdx` file to `content/writings/<slug>.mdx` in GitHub.
- Vercel deploys automatically after the commit.

### Required environment variables (Vercel)

- `GITHUB_TOKEN`: GitHub token with `repo` scope for this repository
- `GITHUB_OWNER`: `leeyaehun`
- `GITHUB_REPO`: `yaehun`
- `GITHUB_BRANCH`: `main` (optional, defaults to `main`)
- `WRITE_API_KEY`: optional secret key for publish API protection

### Security note

If `WRITE_API_KEY` is set, the Studio form requires this key and sends it as `x-write-key`.
Without this key, anyone who can access `/studio` can publish posts.
