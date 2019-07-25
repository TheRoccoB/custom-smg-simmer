(() => {

    window.customSite = {
        title: 'ShareMyGame by GameDev.tv',

        id: 'smg', //unique identifier

        theme_obj : {
            primary: '#23a729',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c'
        },

        // navbar
        navbar_logo_url: '/images/gamedev.png',
        navbar_logo_HTML: `<img src="{{baseUrl}}/{{hero_logo_url}}" style="height: 25px;">`,
        navbar_sitename_HTML: 'smg',

        // hero
        hero_background_color: '#071A32',
        hero_background_url: '/images/smg_background.jpg',
        hero_logo_url: '/images/gamedev.png',
        hero_logo_HTML: '<img style="width:125px;height:125px;" src="{{baseUrl}}/{{hero_logo_url}}">',
        hero_title_HTML: `sharemygame<span style="font-size:34px">.com</span>`,
        hero_description_HTML: `the simple way to share games from <a href="https://gamedev.tv" target="_blank" style="font-weight: bold;">gamedev.tv</a>!`,

        // sidebar
        sidebar_description_HTML: `<p>sharemygame.com is a website by the <a href="https://gamedev.tv">gamedev.tv</a> team for featuring games created by our students!</p>
    <p>sharemygame's technology is powered by <a href="https://simmer.io" style="font-weight:400">simmer.io</a>.</p>`,

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
                    relativeUrl:'/support',
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

        appfooter_copyright_HTML:'&copy; 2019 EmbraceIT Ltd.',

        // upload page
        upload_dropzone_background: 'radial-gradient(circle, rgba(17,17,17,1) 0%, #0D700C 100%, #0D700C 100%)',

        // version: shown in footer, useful for debugging version of this script.
        version_string: 'smg1.0',
    }

    console.log('loaded custom site from github')

})();
