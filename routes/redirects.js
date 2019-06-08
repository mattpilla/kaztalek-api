const redirects = require('../resources/redirects.json');

module.exports = app => {
    for (let i = 0; i < redirects.length; i++) {
        let redirect = redirects[i];
        app.get(redirect.url, (req, res) => {
            res.redirect(redirect.redirect);
        });
    }
}
