'use strict';

/* eslint-disable*/
var fs = require('fs');
var MIMEText = require('mimetext');
var library = require('./library');

var MIMEMessage = new MIMEText();

var getTemplate = function getTemplate(payload, templateName) {
    var mail = fs.readFileSync('src/services/mail/template/' + library[templateName].fileName);
    var template = mail.toString();
    Object.keys(payload).forEach(function (key) {
        template = template.replace(new RegExp('__' + key + '__', 'g'), payload[key]);
    });
    MIMEMessage.setSubject(library[templateName].subject);
    MIMEMessage.setMessage(template);
    return MIMEMessage;
};
module.exports = getTemplate;