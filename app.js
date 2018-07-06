require('dotenv').config();
const express = require('express');
const app = express();
const port =  process.env.PORT || 51581;

app.use(express.static('public'));
app.use(express.static('ui'));

app.get('/1pause', (req, res) => {
    res.send('No.');
});

require('./redirects')(app);

app.listen(port, () => {
    console.log(`listening on port ${port}\nlets do this shit`);
});
