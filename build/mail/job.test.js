'use strict';

var _require = require('./index'),
    sendMail = _require.sendMail;

// authenticate();
// sendMail({ name: 'Akhil Reddy Gangula' }, 'WELCOME');
// sendMail({ redirecturl: 'https://auth.timetotrain.fit/confirm/token' }, 'ACTIVATE');


sendMail({
    name: 'Akhil Reddy Gangula',
    redirecturl: 'https://auth.timetotrain.fit/confirm/token'
}, 'RESET');