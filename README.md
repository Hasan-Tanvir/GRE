# Vocab Mountain Review

A static GRE vocabulary review app with group-based practice, status tracking, and word detail review.

## Features

- Group selection with single or start/end range mode
- Status filters for all, known, and forgot words
- Word detail popup with definition, example, and status actions
- Local progress saved using browser `localStorage`
- Mobile-friendly responsive UI

## Deployment

This app is a static frontend and can be deployed to GitHub Pages or Vercel.

### GitHub Pages

1. Push the repository to GitHub.
2. Enable Pages in repository settings.
3. Set the publish source to the root branch.

### Vercel

1. Create a new Vercel project.
2. Connect the repository.
3. Use the root folder as the deployment target.

## Project files

- `index.html` — main app page
- `styles.css` — app styling
- `script.js` — app logic and group selection
- `vocab.js` — GRE vocabulary dataset

## Notes

The app uses `localStorage` to persist known/forgot status and study notes. Future enhancements can add remote persistence via Vercel database or API endpoints.
