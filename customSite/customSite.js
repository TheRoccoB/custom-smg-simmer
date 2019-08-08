(() => {

    window.customSite = {
        title: 'ShareMyGame by GameDev.tv',

        id: 'smg', //unique identifier
        siteName: 'ShareMyGame.com',

        theme_obj : {
            primary: '#23a729',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c'
        },

        howToYoutubeId_string: 'XWE9rzz3uV0',
        longerHowToYoutubeId_string: 'ziiIlpjeMVY',

        favicon_url: 'images/favicon.ico',

        // navbar_logo_url: '/images/gamedev.png',
        navbar_logo_HTML: `<img src="{{baseUrl}}images/home_icon.svg" style="height: 25px;">`,
        navbar_sitename_HTML: ' ',
        navbar_style_object:{
            'position':'relative',
            'background-color': 'white',
            'transform': 'translate(0,0)',
            'left': 0
        },
        navbar_alwaysHideSpacer_bool:true,
        navbar_showLowerOnFrontPage_bool: true,

        beforeNavbar_html: '<div id="gdtv_header_inject" style="max-width:1440px;max-height:66px;margin-left:auto;margin-right:auto;"><div style="height:66px;background-color:#23A729;"></div></div></div>',

        scriptsAfterAppMounted_array: [
            'https://d1dewqfmv9j5d4.cloudfront.net/gamedevtv-header.js'
        ],
        stylesheetsBeforeAppMounted_array: [
            'https://d1dewqfmv9j5d4.cloudfront.net/gamedevtv-header.css'
        ],

        // hero
        hero_background_color: '#071A32',
        hero_background_url: '/images/smg_background.jpg',
        hero_logo_url: '/images/gamedev.png',
        hero_logo_HTML: '<img style="width:125px;height:125px;" src="{{baseUrl}}/{{hero_logo_url}}">',
        hero_title_HTML: `ShareMyGame<span style="font-size:34px">.com</span>`,
        hero_description_HTML: `the simple way to share games from <a href="https://gamedev.tv" target="_blank" style="font-weight: bold;">GameDev.tv</a>!`,

        // sidebar
        sidebar_description_HTML: `<p>ShareMyGame.com is a website by the <a href="https://gamedev.tv">GameDev.tv</a> team for featuring games created by our students!</p>
    <p>ShareMyGame.com's technology is powered by <a href="https://simmer.io" style="font-weight:400">simmer.io</a>.</p>`,

        sidebar_social_obj:{
            discord: 'https://discordapp.com/invite/eUSFZdJ',
            twitter: 'https://twitter.com/GameDevTV',
            youtube: 'https://www.youtube.com/channel/UC2CRYvS0FWRkTpCU3l4j8Mg',
            facebook: 'https://www.facebook.com/GameDevTV',
            medium: null,
            contact: 'https://www.gamedev.tv/contact' //mailto: links also fine here.
        },

        twitter_url: 'https://twitter.com/gamedevtv', //for twitter widget showing latest posts

        // top and bottom linkbar (appfooter)
        linkbar_accent_border:'1px solid #17A91D',
        linkbar_background_color:'#031403',

        // top linkbar
        toplinkbar_links_obj:{
            links: [
                {
                    externalUrl:'https://www.gamedev.tv/about',
                    text:'about'
                },
                {
                    relativeUrl:'/faq',
                    text:'faq'
                },
                {
                    externalUrl: 'http://blog.simmer.io/how-to-build-a-unity-game-for-webgl/',
                    text: 'unity webgl howto'
                },
                {
                    externalUrl:'https://community.gamedev.tv/tags/c/other/talk/sharemygame',
                    text:'support'
                },
                {
                    externalUrl:'https://www.udemy.com/user/gamedevtv/',
                    text:'courses'
                }
            ],
            delimiter_HTML:'&nbsp;&#8226;&nbsp;&nbsp;',
            color: '#ddd'
        },

        appfooter_links_obj:{
            links: [
                {
                    externalUrl:'https://www.udemy.com/user/gamedevtv/',
                    text: 'Courses'
                },

                {
                    externalUrl:'https://www.gamedev.tv/about',
                    text:'About'
                },
                {
                    relativeUrl:'/faq',
                    text:'FAQ'
                },
                {
                    externalUrl:'https://community.gamedev.tv/tags/c/other/talk/sharemygame',
                    text:'Support'
                },
                {
                    relativeUrl:'/contact',
                    text:'Contact'
                },
                {
                    relativeUrl:'/privacy',
                    text:'Privacy'
                },
                {
                    relativeUrl:'/gdpr',
                    text:'GDPR'
                },
                {
                    relativeUrl:'/terms',
                    text:'Terms'
                }
            ],
            delimiter_HTML:'&nbsp;&nbsp;',
            color: '#17A91D'

        },

        collections_array: [
            {
                isLatest:true
            }
        ],

        privacy_annotation_html : `ShareMyGame.com is operated by SIMMER.io. SIMMER.io's privacy policy is listed below. You may also review GameDev.tv's <a href="https://www.gamedev.tv/privacy-policy">privacy policy</a> for additional information about your privacy.`,
        tos_annotation_html : `ShareMyGame.com is operated by SIMMER.io. SIMMER.io's terms of service are listed below. You may also review GameDev.tv's <a href="https://www.gamedev.tv/privacy-policy">privacy policy</a> for additional information about your privacy.`,

        welcomeEmail_text:{
            subject: 'Welcome to ShareMyGame.com',
            text: `Congratulations on signing up for ShareMyGame.com!

We're all excited to see what games you put up at https://ShareMyGame.com/upload.

Cheers,
The GameDev.tv Team & SIMMER.io`
        },

        appfooter_copyright_HTML:'&copy; 2019 EmbraceIT Ltd.',

        // upload page
        upload_dropzone_background: 'radial-gradient(circle, rgba(17,17,17,1) 0%, #0D700C 100%, #0D700C 100%)',

        // version: shown in footer, useful for debugging version of this script.
        version_string: 'smg1.0',

        // omit if you don't want to show silly cookie notice
        cookie_notice_html: '<div>This site uses cookies to run optimally. By continuing to use this site, you consent to the our use of cookies.</div><div style="font-weight:bold">Details: <a href="/privacy" target="_blank">Privacy</a> | <a href="/gdpr" target="_blank">GDPR</a> | <a href="/tos" target="_blank">Terms</a>.</div>'
    }
})();
