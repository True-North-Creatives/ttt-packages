'use strict';

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enumerateErrorFormat = _winston2.default.format(function (info) {
    if (info instanceof Error) {
        Object.assign(info, { message: info.stack });
    }
    return info;
});

var logger = _winston2.default.createLogger({
    level: _config.ENV === 'development' ? 'debug' : 'info',
    format: _winston2.default.format.combine(enumerateErrorFormat(), _config.ENV === 'development' ? _winston2.default.format.colorize() : _winston2.default.format.uncolorize(), _winston2.default.format.splat(), _winston2.default.format.printf(function (_ref) {
        var level = _ref.level,
            message = _ref.message;
        return level + ': ' + message;
    })),
    transports: [new _winston2.default.transports.Console({
        stderrLevels: ['error']
    })]
});

module.exports = logger;