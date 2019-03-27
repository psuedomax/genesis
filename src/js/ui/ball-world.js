"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BallWorld = function (_THREE$Scene) {
    _inherits(BallWorld, _THREE$Scene);

    function BallWorld(totalBall) {
        _classCallCheck(this, BallWorld);

        var _this = _possibleConstructorReturn(this, (BallWorld.__proto__ || Object.getPrototypeOf(BallWorld)).call(this));

        _this._totalBall = totalBall;
        _this._planeSize = 2000;
        _this._balls = [];
        _this._pos = {
            x: [],
            y: [],
            r: []
        };

        _this.fog = new THREE.Fog(0x11FFFFFF, 500, 2000);

        _this.buildBackscene();
        _this.buildSphere();

        _this.buildDirectionalLight(0xFFEEEEEE);
        return _this;
    }

    _createClass(BallWorld, [{
        key: "overlap",
        value: function overlap(x, y, r) {
            if (x < 100 && x > -100 || y < 60 && y > -60) return true;
            for (var j = 0; j < this._balls.length; j++) {
                if ((this._pos.x[j] - x) * (this._pos.x[j] - x) + (this._pos.y[j] - y) * (this._pos.y[j] - y) < (this._pos.r[j] + r) * (this._pos.r[j] + r)) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "buildSphere",
        value: function buildSphere() {

            for (var i = 0; i < this._totalBall; i++) {
                var r = 60 + Math.random() * 40;
                // let x = -window.innerWidth/2+(window.innerWidth/this._totalBall*i) + Math.random()*(window.innerWidth/this._totalBall)
                // let y = Math.floor(Math.random()*window.innerHeight/2)-10;

                var x = window.innerWidth / -2 + Math.random() * window.innerWidth;
                var y = window.innerHeight / -2 + Math.random() * window.innerHeight;
                while (this.overlap(x, y, r)) {
                    x = window.innerWidth / -2 + Math.random() * window.innerWidth;
                    y = window.innerHeight / -2 + Math.random() * window.innerHeight;
                }
                var ball = this.createSphere(r, x, y);

                this._balls.push(ball);
                this._pos.x.push(x);
                this._pos.y.push(y);
                this._pos.r.push(r);
                this.add(ball);
            }
        }
    }, {
        key: "buildBackscene",
        value: function buildBackscene() {
            var geometry = new THREE.PlaneGeometry(this._planeSize, this._planeSize);
            var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

            var backScene = new THREE.Mesh(geometry, material);
            backScene.receiveShadow = true;
            backScene.position.z = -1200;
            this.add(backScene);
        }
    }, {
        key: "buildDirectionalLight",
        value: function buildDirectionalLight(color) {
            var light = new THREE.DirectionalLight(color, 0.7);
            light.position.set(0, 0, 500);

            light.shadow.mapSize.width = 1024;
            light.shadow.mapSize.height = 1024;

            var d = 300;

            light.shadow.camera.left = -d;
            light.shadow.camera.right = d;
            light.shadow.camera.top = d;
            light.shadow.camera.bottom = -d;

            light.shadow.camera.far = 1000;

            light.castShadow = true;

            this.add(light);
            return light;
        }
    }, {
        key: "createSphere",
        value: function createSphere(radius, x, y) {
            var geometry = new THREE.SphereGeometry(radius, 128, 128);
            var material = Math.random() < 0.15 ? new THREE.MeshLambertMaterial({ color: 0xEEEEEE,
                transparent: true,
                opacity: 0.1 }) : new THREE.MeshLambertMaterial({ color: Math.floor(0xffffff * Math.random()) });

            material.transparent = true;
            material.opacity = 0.6 - Math.random() * 0.2;

            var obj = new THREE.Mesh(geometry, material);
            obj.position.set(x, y, 400 - Math.random() * 600);
            obj.castShadow = true;
            return obj;
        }
    }]);

    return BallWorld;
}(THREE.Scene);

exports.default = BallWorld;
//# sourceMappingURL=ball-world.js.map