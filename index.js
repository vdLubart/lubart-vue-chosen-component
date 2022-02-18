import ChosenComponent from './components/ChosenComponent';

export default {

    register(Vue) {
        window.$ = window.jQuery = require('jquery');
        require('chosen-js');

        Vue.component('chosen-component', ChosenComponent);
    }

};

export { ChosenComponent };