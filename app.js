require('dotenv').config();
const express = require('express');
const serveIndex = require('serve-index');
const history = require('connect-history-api-fallback');
const app = express();
const port =  process.env.PORT || 51581;

/* Order matters!! */
app.use('/files', serveIndex('public/files', {
    icons: true,
    stylesheet: './resources/style.css',
    template: './resources/directory.html',
    view: 'details'
}));
app.use(express.static('public'));

app.get('/1pause', (req, res) => {
    res.send('No.');
});

require('./routes/redirects')(app);

app.use(history());
app.use(express.static('ui'));

app.listen(port, () => {
    console.log(`listening on port ${port}\nlets do this shit`);
});
