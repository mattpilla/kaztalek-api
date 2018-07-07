require('dotenv').config();
const express = require('express');
const serveIndex = require('serve-index');
const app = express();
const port =  process.env.PORT || 51581;

app.use('/files', serveIndex('public/files', {
    icons: true,
    stylesheet: './resources/style.css',
    template: './resources/directory.html'
}));
app.use(express.static('public'));
app.use(express.static('ui'));

app.get('/1pause', (req, res) => {
    res.send('No.');
});

require('./routes/redirects')(app);

app.listen(port, () => {
    console.log(`listening on port ${port}\nlets do this shit`);
});
