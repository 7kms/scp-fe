import Vue from 'vue';
import '@src/assets/less/base.less';

let generate = ({App}) => {
    let deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 1920) deviceWidth = 1920;
    else if(deviceWidth < 1200) deviceWidth = 1200;
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
    new Vue({
        ...App
    }).$mount('#root');
}
export default generate;