var app = new Vue({

    el : '#root',

    data: {
        navLeftItems: [
            {
                class: "fas fa-phone-alt",
                span: "1.800.567.8910",
                btn: {
                    classBtn:"nav-btn",
                    span:"24hrs"
                },
            },
            {
                class:"fas fa-envelope",
                span: "Contact Us"
            },
            {
                class: "fas fa-graduation-cap",
                span:"Alumni"
            },
            {
                class:"fas fa-landmark",
                span:"Campus"
            }
        ],
        socialList:[
            {
                name: "facebook",
                class: "fab fa-facebook-f"
            },
            {
                name: "twitter",
                class: "fab fa-twitter"
            },
            {
                name:"youtube",
                class:"fab fa-youtube"
            },
            {
                name:"instagram",
                class:"fab fa-instagram"
            }
        ],
        headerItems:[
            {content:"HOME",},
            {
                content:"ABOUT",
            },
            {
                content:"COURSES",
                btn: {
                    classBtn:"btn-hdr",
                    span:"NEW"
                },
            },
            {content:"EVENTS",},
            {content:"FACILITIES",},
            {content:"NEWS",},
            {
                content:"ADMISSIONS",
                btn:{
                    classBtn: "btn-hdr",
                    span:"APPLY"
                }
            },
        ],
        
    },

    methods: {

    },
})
Vue.config.devtools = true