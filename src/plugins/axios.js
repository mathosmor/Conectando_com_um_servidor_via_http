import Vue from 'vue'
import axios from 'axios'

/* axios.defaults.baseURL = 'https://curso-vue-mgm.firebaseio.com/' */
    /* axios.defaults.headers.common['Authorization'] = 'abc1234' */

Vue.use({

    install(Vue) {
        /*         Vue.prototype.$http = axios */
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-mgm.firebaseio.com/',
            headers: {
                "Authorization": 'abc1234'
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            /* if(config.method == 'post') {
                config.method = 'put'
            } */
            return config
        },)
    }

})