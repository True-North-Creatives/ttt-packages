'use strict';

/* eslint-disable */
var _require = require('googleapis'),
    google = _require.google;

var CREDENTIALS = require('../../config/credentials.json');
var generateToken = require('./lib/generateToken');
var Message = require('./template/index');

var getServiceInstance = function getServiceInstance() {
    var _CREDENTIALS$installe = CREDENTIALS.installed,
        client_secret = _CREDENTIALS$installe.client_secret,
        client_id = _CREDENTIALS$installe.client_id,
        redirect_uris = _CREDENTIALS$installe.redirect_uris;

    var oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    try {
        oAuth2Client.setCredentials(require('./lib/token.json'));
    } catch (e) {
        console.log('Token file missing');
    }
    return oAuth2Client;
};

var sendMail = function sendMail(payload, name, to) {
    var auth = getServiceInstance();
    var gmail = google.gmail({ version: 'v1', auth: auth });

    var MIMEMessage = Message(payload, name);
    MIMEMessage.setSender('sender@email.com');
    MIMEMessage.setRecipient(to);

    /**
     * @todo
     * error is not propograted, need to fix this
     */
    return gmail.users.messages.send({
        userId: 'me',
        requestBody: {
            raw: MIMEMessage.asEncoded()
        }
        // (err) => {
        //     console.log(err);
        //     if (err) {
        //         return { type: 'ERROR', err };
        //     }
        //     return { type: 'SUCCESS' };
        // }
    });
};

var authenticate = function authenticate() {
    generateToken(getServiceInstance());
};

/**
 * Ex:
 *   const payload = {
 *    name: "Akhil Gangula",
 *   };
 * sendMail(payload, library.WELCOME.name);
 */

module.exports = {
    sendMail: sendMail,
    authenticate: authenticate
};