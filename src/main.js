import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faStackOverflow, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(fas);
library.add(faTwitter, faFacebook, faStackOverflow, faGithub, faLinkedin, faInstagram);

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
