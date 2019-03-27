"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

const World = function () {
    function World(scene) {
        _classCallCheck(this, World);

        this._scene = scene;

        this._scene.background = new THREE.Color(0xdddddd);

        //this.buildFloor();
        //this.buildBackscene('assets/textures/way.jpg');

        this.buildAmbientLight(0xFFFFFF);
    }

    _createClass(World, [{
        key: "buildFloor",
        value: function buildFloor() {
            const geometry = new THREE.PlaneBufferGeometry(1000, 1000);
            const material = new THREE.MeshLambertMaterial();
            const shadowMat = new THREE.ShadowMaterial();

            shadowMat.opacity = 0.2;

            const floor = new THREE.Mesh(geometry, material);

            floor.receiveShadow = true;
            floor.rotateX(THREE.Math.degToRad(-90));

            this._scene.add(floor);
        }
    }, {
        key: "buildBackscene",
        value: function buildBackscene(textureFile) {
            const texture = new THREE.TextureLoader().load(textureFile);
            texture.anisotropy = 16;
            const geometry = new THREE.PlaneBufferGeometry(1000, 1000);
            const material = new THREE.MeshLambertMaterial({ map: texture });

            const backScene = new THREE.Mesh(geometry, material);
            backScene.receiveShadow = true;
            backScene.position.z = -100;
            this._scene.add(backScene);
        }
    }, {
        key: "buildPointLight",
        value: function buildPointLight(position, color) {
            const pointLight = new THREE.PointLight(color);

            pointLight.position.copy(position);
            pointLight.castShadow = true;
            this._scene.add(pointLight);

            const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
            this._scene.add(pointLightHelper);

            return pointLight;
        }
    }, {
        key: "buildDirectionalLight",
        value: function buildDirectionalLight(position, color) {
            const light = new THREE.DirectionalLight(color, 1);
            light.position.copy(position);
            light.position.multiplyScalar(1.3);

            light.shadow.mapSize.width = 1024;
            light.shadow.mapSize.height = 1024;

            const d = 300;

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
            const light = new THREE.AmbientLight(color, 0.6); // soft white light
            this._scene.add(light);
        }
    }]);

    return World;
}();

exports.default = World;
//# sourceMappingURL=world.js.map