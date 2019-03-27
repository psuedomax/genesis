"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Light = function () {
    function Light() {
        _classCallCheck(this, Light);
    }

    _createClass(Light, [{
        key: "buildPointLight",
        value: function buildPointLight(position, color) {
            // create a point light
            var pointLight = new THREE.PointLight(color);

            pointLight.position.copy(position);
            pointLight.castShadow = true;
            //pointLight.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 70, 1, 200, 2000 ) );
            this._scene.add(pointLight);

            var sphereSize = 10;
            var pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
            this._scene.add(pointLightHelper);

            return pointLight;
        }
    }, {
        key: "buildDirectionalLight",
        value: function buildDirectionalLight(position, color) {
            var light = new THREE.DirectionalLight(color, 1);
            light.position.copy(position);
            light.position.multiplyScalar(1.3);

            light.shadow.mapSize.width = 1024;
            light.shadow.mapSize.height = 1024;

            var d = 300;

            light.shadow.camera.left = -d;
            light.shadow.camera.right = d;
            light.shadow.camera.top = d;
            light.shadow.camera.bottom = -d;

            light.shadow.camera.far = 1000;

            light.castShadow = true;
            this._scene.add(light);
            return light;
        }
    }, {
        key: "buildAmbientLight",
        value: function buildAmbientLight(color) {
            var light = new THREE.AmbientLight(color, 2); // soft white light
            this._scene.add(light);
        }
    }]);

    return Light;
}();
//# sourceMappingURL=light.js.map