# SIMMER.io Custom Site

This is a custom site configuration of SIMMER.io for sharemygame.com.

## Local Development

You can develop locally using the [serve](https://www.npmjs.com/package/serve) npm module.

```
npm i -g serve
serve --listen 8087
```

This starts a static server on http://localhost:8087

Go to [simmer.io](https://simmer.io) and long-press on our logo in the top left corner (at least 3 sec).

This brings up a dialog "custom site options". Click the "localhost:8087" button.

With any luck, you'll see a custom version of simmer.io with customization options set in `customSite/customSite.js` and `customSite/customFrame.js`

### customSite.js
customSite.js provides configuration for the look and feel of a simmer custom site. Most of the options are self-documenting, but for example, you could change the main theme colors of the site by modifying:

```
theme_obj : {
   primary: '#23a729',
   secondary: '#b0bec5',
   accent: '#8c9eff',
   error: '#b71c1c'
}
```

### customFrame.js

customFrame.js provides configuration for the look and feel of the "game frame"; specifically the loading indicator and "lower third" (which basically a caption about who created the game that appears right after load).

### images/
You can put any custom images in the customSite/images directory. Usually you'll have to match the dimensions of the existing images thar are inside. 

## Deployment

This repo is set up with github pages. Any checkins to master will automatically be deployed to production.

Note: [it takes 10 minutes](https://webapps.stackexchange.com/questions/44871/caching-assets-in-github-pages-github-io) for the github cache to invalidate (and your changes to go live)


