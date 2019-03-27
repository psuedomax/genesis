'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _AbstractApplication2 = require('./AbstractApplication');

var _AbstractApplication3 = _interopRequireDefault(_AbstractApplication2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEBUG_MODE = true;

var MainView = function (_AbstractApplication) {
    _inherits(MainView, _AbstractApplication);

    function MainView(container) {
        _classCallCheck(this, MainView);

        var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this, container));

        _this._debug = DEBUG_MODE;
        _this._container = container;

        _this.initScene();
        _this.animate();
        return _this;
    }

    _createClass(MainView, [{
        key: 'initComponent',
        value: function initComponent() {
            // install window resizing.
            // window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
        }
    }, {
        key: 'initScene',
        value: function initScene() {
            var light = new THREE.AmbientLight(0x404040); // soft white light
            _get(MainView.prototype.__proto__ || Object.getPrototypeOf(MainView.prototype), 'scene', this).add(light);

            var geometry = new THREE.SphereGeometry(5, 32, 32);
            var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            var sphere = new THREE.Mesh(geometry, material);
            _get(MainView.prototype.__proto__ || Object.getPrototypeOf(MainView.prototype), 'scene', this).add(sphere);

            if (this._debug) {
                this._scene.add(new THREE.AxisHelper(500));
            }
        }
    }, {
        key: 'onWindowResize',
        value: function onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }, {
        key: 'animate',
        value: function animate(timestamp) {
            var _this2 = this;

            setTimeout(function () {
                return requestAnimationFrame(_this2.animate.bind(_this2));
            }, 1000 / 24);
            _get(MainView.prototype.__proto__ || Object.getPrototypeOf(MainView.prototype), 'renderer', this).render(this._scene, this._camera);
        }
    }, {
        key: 'container',
        get: function get() {
            return this._container;
        }
    }]);

    return MainView;
}(_AbstractApplication3.default);

exports.default = MainView;
//# sourceMappingURL=main.js.map