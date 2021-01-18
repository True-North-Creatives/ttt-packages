'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ENV = exports.jwt = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var jwt = exports.jwt = {
    secret: process.env.secret
};
var ENV = process.env.ENV;
exports.ENV = ENV;