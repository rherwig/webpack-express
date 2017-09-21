const join = require('path').join;
const express = require('express');

const app = express();

app.use('/', express.static(join(__dirname, 'assets')));

// set view engine and tell express where to find the views
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// configure webpack dev server for development
if (process.env.NODE_ENV === 'development') {
    const clientConfig = require('../webpack/dev');
    const publicPath = clientConfig.output.publicPath;
    const compiler = require('webpack')(clientConfig);

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath,
        stats: {
            colors: true
        }
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

// render the index view
app.get('/', (req, res) => res.render('index'));

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.log(err);
    }

    console.info('Server listening...');
});
