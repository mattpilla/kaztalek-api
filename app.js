const express = require('express');
const app = express();
const argv = require('minimist')(process.argv.slice(2));
const port =  argv.p || argv.port || 51581;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hiya!');
});

require('./redirects')(app);

app.listen(port, () => {
    console.log(`listening on port ${port}\nlets do this shit`);
});
