# SIMMER.io Custom Site

This is a custom site configuration of SIMMER.io for sharemygame.com.

If you're interested in a custom site using SIMMER.io's technology, you can reach me at rocco@simmer.io.

You can also fork this repo and test out our customization features before contacting me.

## Local Development

You can develop locally using the [serve](https://www.npmjs.com/package/serve) npm module.

```
npm i -g serve
serve --listen 8087
```

This starts a static server on http://localhost:8087

Go to [simmer.io](https://simmer.io) and long-press on our logo in the top left corner (at least 3 sec).

This brings up a dialog "custom site options". Set "custom URL" to http://localhost:8087/customSite and click go.

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
You can deploy this on any static web server, however for simplicity (and free-ness + fast CDN), I'll cover github pages.

On Github go to your repository settings page (ex: https://github.com/TheRoccoB/custom-smg-simmer/settings), and select 'master branch' under github pages.

Then, any time you check in to 'master', you'll update the site configuration for a simmer custom site.

You can 

Of course, there are manual steps that I would need to do to set up your domain, etc.



