import Vue from 'vue'

Vue.prototype.$app = {
    dev:true,
    dev_api:"http://localhost:3001/",
    api:"/",
    theme:{
        primary:"#027be3",
        secondary:"#26a69a",
        accent:"#9c27b0",
        positive:"#21ba45",
        negative:"#c10015",
        info:"#31ccec",
        warning:"#f2c037"
    }
}