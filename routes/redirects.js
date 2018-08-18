module.exports = app => {
    app.get('/2pause', (req, res) => {
        res.redirect('https://www.youtube.com/watch?v=KaDflIPG3f4');
    });

    app.get('/afrnh', (req, res) => {
        res.redirect('https://www.youtube.com/watch?v=KkMe1VUJUEc');
    });

    app.get('/oddities', (req, res) => {
        res.redirect('https://www.youtube.com/playlist?list=PLhidzeZ496C-x51lQ9Uf-F0UKLEJIyIQN');
    });

    app.get('/oot3p', (req, res) => {
        res.redirect('https://www.youtube.com/watch?v=01J-0suWISk');
    });

    app.get('/rbo', (req, res) => {
        res.redirect('https://www.youtube.com/watch?v=KtDpKjv93DQ');
    });

    app.get('/ba', (req, res) => {
        res.redirect('https://mattpilla.github.io/Bottle-Adventure');
    });

    app.get('/city-trial', (req, res) => {
        res.redirect('/citytrial');
    });

    /*
     * ABC
     */
    app.get('/abc/bk', (req, res) => {
        res.redirect('https://docs.google.com/document/d/1XQxm5Rk8H02w1M318kM-cu6fNkFx9O0xrcJuz6OpEUQ/edit');
    });

    app.get('/abc/dk64', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/1Q3-CPZ77oZQnznpV9VRAeOxAHTiTTF7_-lJKB0-w5ts/edit#gid=1184089361');
    });
    app.get('/dk64abc', (req, res) => {
        res.redirect('/abc/dk64');
    });

    app.get('/abc/rby', (req, res) => {
        res.redirect('https://sites.google.com/site/thezzazzglitch/home/a-button-challenge-movies');
    });

    app.get('/abc/sadx', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/1uRURAIl5ToN4uIg3sbCWQf7_3UsbXeeEodH30dQlWbo/edit#gid=1381357695');
    });

    app.get('/abc/sa2b', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/1uRURAIl5ToN4uIg3sbCWQf7_3UsbXeeEodH30dQlWbo/edit#gid=0');
    });

    app.get('/abc/shadow', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/143s1dqBeCZNbhOwEer28qXfs0pLwhKIwj9B-DeT6t4I/edit#gid=0');
    });

    app.get('/abc/smw', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/1TqnOs66T2E58m3a36FoRvRpna6-sPlWgQr31nEeGafY/edit#gid=0');
    });

    app.get('/abc/sm64', (req, res) => {
        res.redirect('https://docs.google.com/document/d/1ypRVVRyf4x-v8GqCSmKYnicrfKSIjao3Y1ZVl52RIyM/edit');
    });

    app.get('/abc/sm64ds', (req, res) => {
        res.redirect('https://pastebin.com/aKSppyne');
    });

    app.get('/abc/sms', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/1j5OVfqqp97LhKHJja96h2SX5ZoFjaHiE7nvXgAYauMI/edit#gid=1593926981');
    });

    app.get('/abc/smg', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/10GjH7cXf0cn7uMFX6IGB_G3JiDuvqMxZirVb4JwKRHA/edit#gid=0');
    });

    app.get('/abc/smg2', (req, res) => {
        res.redirect('https://docs.google.com/spreadsheets/d/1eNmk8SPNcwq3l3ocL3FeLuDd_J5p6rgjNdM1jsM_UCA/edit#gid=0');
    });
}
