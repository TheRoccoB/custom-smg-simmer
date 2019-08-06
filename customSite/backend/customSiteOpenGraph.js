// **********************************************************
// IMPORTANT NOTE: This file needs to manually integrated into SIMMER.
// changes in this file in the custom-smg-simmer github project will not automatically be reflected here on the site.
// Email rocco at simmer dot io to integrate!
// **********************************************************

module.exports = {
    title: 'ShareMyGame.com by GameDev.tv',
    defaultMetaTags: `
    <meta property="og:title" content="ShareMyGame.com by GameDev.tv" />
    <meta name="Description" content="ShareMyGame.com is the simple way to share games.">
    <meta property="og:site_name" content="ShareMyGame.com" />
    <meta property="og:image" content="https://theroccob.github.io/custom-smg-simmer/customSite/images/openGraph.png" />
    <meta property="og:description"
          content="Upload your Unity games today!" />
    <meta name="twitter:card" content="summary_large_image" />`,

    gameMetaTags(projectName, screenshotUrl, description){
        return `  <meta property="og:title" content="Play ${projectName} in your Browser | ShareMyGame"/>
  <meta property="og:site_name" content="ShareMyGame.com" />
  <meta property="og:image" content="${screenshotUrl}" />
  <meta property="og:description" content="${description}" />
  <meta property="description" content="Play ${projectName} in your browser | ${description}">
  <meta name="twitter:card" content="summary_large_image" />`
    }
}
