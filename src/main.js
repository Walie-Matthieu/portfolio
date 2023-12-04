import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faStackOverflow, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebook, faStackOverflow, faGithub, faLinkedin, faInstagram);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
