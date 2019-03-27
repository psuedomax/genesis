'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('three');

require('three/examples/js/controls/OrbitControls');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractApplication = function () {
    function AbstractApplication(container) {
        _classCallCheck(this, AbstractApplication);

        // this._camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );

        var width = container.clientWidth;
        var height = container.clientHeight;

        console.log('width = ' + width + ', height = ' + height);

        this._camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);
        this._camera.position.z = 500;

        this._scene = new THREE.Scene();

        this._renderer = new THREE.WebGLRenderer();
        this._renderer.setClearColor(0xffffff);
        this._renderer.setPixelRatio(window.devicePixelRatio);
        this._renderer.setSize(width, height);
        container.appendChild(this._renderer.domElement);

        console.log('super constructor called');
        window.rendererDOM = this._renderer.domElement;

        this._controls = new THREE.OrbitControls(this._camera, this._renderer.domElement);
    }

    _createClass(AbstractApplication, [{
        key: 'renderer',
        get: function get() {
            return this._renderer;
        }
    }, {
        key: 'camera',
        get: function get() {
            return this._camera;
        }
    }, {
        key: 'scene',
        get: function get() {
            return this._scene;
        }
    }]);

    return AbstractApplication;
}();

exports.default = AbstractApplication;
//# sourceMappingURL=AbstractApplication.js.map