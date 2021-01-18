'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var userSchema = new _mongoose2.default.Schema({
    payment: [{
        type: _mongoose2.default.Schema.Types.ObjectId,
        ref: 'payment'
    }],
    familyName: {
        type: String,
        required: false
    },
    givenName: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    resetURL: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: function validate(value) {
            if (!_validator2.default.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    // On Successful SignUp
    dateJoined: {
        type: Date,
        default: Date.now
    },
    // subscriptionType: monthly, annually
    subscriptionType: {
        type: String,
        required: false
    },
    // On Payment Success make isSubscribed as true
    isSubscribed: {
        type: Boolean,
        required: false
    },
    place: {
        type: String,
        required: false
    },
    // providerId: Google, Facebook
    providerId: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: false
    },
    role: {
        type: Array
    },
    pass: {
        type: String,
        required: false,
        trim: true,
        private: true // used by the toJSON plugin
    }
}, {
    collection: 'users'
});

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @return {Promise<boolean>}
 */
var isEmailTaken = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, excludeUserId) {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return undefined.findOne({ email: email, _id: { $ne: excludeUserId } });

                    case 2:
                        user = _context.sent;
                        return _context.abrupt('return', !!user);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function isEmailTaken(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

userSchema.statics.isEmailTaken = isEmailTaken;

/**
 * Check if password matches the user's password
 * @param {string} password
 * @param {string} storedPass
 * @return {Promise<boolean>}
 */
var isPasswordMatch = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(password, storedPass) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        return _context2.abrupt('return', _bcrypt2.default.compare(password, storedPass));

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function isPasswordMatch(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

userSchema.methods.isPasswordMatch = isPasswordMatch;

var User = _mongoose2.default.model('user', userSchema);

exports.default = User;