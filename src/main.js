import Vue from 'vue';
import App from './App';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-carbon.css'


Vue.use(MuseUI)

Vue.config.productionTip = false;//关闭生产模式下给出的提示

new Vue({
    el:"#app",
    render:h=>h(App)
})