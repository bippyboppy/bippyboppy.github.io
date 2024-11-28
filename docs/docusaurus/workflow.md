---
title: Workflow
---

# Updating the site
1. Push to main branch
```
git add .
git commit -m "Update docs"
git push origin main
```
2. Set a version
```
npx docusaurus docs:version 1.0
```
3. Deploy to gh-pages branch
```
npm run deploy
```
