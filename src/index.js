import 'styles/main.less';

// hot reloading script for webpack hot middleware
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}
