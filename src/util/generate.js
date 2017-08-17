import Vue from 'vue';
import '@src/assets/less/base.less';

let generate = ({App}) => {
    new Vue({
        ...App
    }).$mount('#root');
}
export default generate;