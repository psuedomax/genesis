'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _demo = require('../models/demo.json');

var _demo2 = _interopRequireDefault(_demo);

var _MainView = require('../views/MainView');

var _MainView2 = _interopRequireDefault(_MainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneController = function () {
    function SceneController() {
        _classCallCheck(this, SceneController);

        this._view = new _MainView2.default(document.getElementById('container'));
        this._model = _demo2.default;

        this.init();
    }

    _createClass(SceneController, [{
        key: 'init',
        value: function init() {
            console.log('initialize it');

            window.addEventListener('resize', this.view.resize, false);
        }
    }, {
        key: 'view',
        get: function get() {
            return this._view;
        }
    }, {
        key: 'model',
        get: function get() {
            return this._model;
        }
    }]);

    return SceneController;
}();

exports.default = SceneController;
//# sourceMappingURL=scene-controller.js.map