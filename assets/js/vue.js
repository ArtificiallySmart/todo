import { createApp } from 'vue'
import clock from './components/clock.js'
import card from './components/card.js'
import sidebar from './components/sidebar.js'

const app = createApp({
    components: {
        clock,
        card,
        sidebar
    },
    data() {
        return {
            count: 0
        }
    }
})

app.mount('#app')