export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,
    server: {
        host: '0'
    },

    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - welfare-nuxt',
        title: 'welfare-nuxt',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*Customize page transition*/
    pageTransition: {
        name: 'slide-x-reverse-transition',
        mode: 'out-in'
    },
    layoutTransition: {
        name: 'slide-x-reverse-transition',
        mode: 'out-in'
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: false,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/color-mode'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    /*modules: [

      'nuxt-google-maps-module',


      ['nuxt-google-maps-module', {

        key: '',
      }],
    ],*/

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
            options: {
                customProperties: true
            },
            dark: false,
            themes: {
                dark: {
                    background: '#F7F9FC',
                    primary: '#29304d',
                    accent: '#2573d5',
                    warning: '#f4976c',
                    error: '#FF5252',
                },
                light: {
                    background: '#F7F9FC',
                    primary: '#29304d',
                    accent: '#2573d5',
                    warning: '#f4976c',
                    error: '#FF5252',
                }
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    cli: {
        badgeMessages: ['Hello World!'],
        bannerColor: 'blue'
    }
}
