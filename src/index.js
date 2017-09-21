import Vue from 'vue';
import App from 'components/App.vue';

import 'styles/main.less';

// hot reloading script for webpack hot middleware
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}

new Vue({
    el: '#vue-root',
    render: h => h(App)
});
