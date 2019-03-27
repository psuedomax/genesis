
const SDK = window.requirejs('w3reality-sdk');
// console.log('SDK:', SDK);

require('css/style.css');

var _sceneController = require('js/controllers/scene-controller');

var _sceneController2 = _interopRequireDefault(_sceneController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scene = new _sceneController2.default();


class App extends SDK.App {
    // override
    static createWorld() {
        const world = new World(8, 8, 8);
        world.createFlatWorld(4, BLOCK.DIRT);
        world.setSpawnPose([4.0, 1.5, 8, -Math.PI/16, -Math.PI/2, 0]);
        world.setChunkSize(4);
        return world;
    }

    // override
    constructor(data, name="foo") {
        super(data, name);
        this.set_block(0, 0, 4, BLOCK.MODEL_TEST);
        this.setScene(scene);
        this.say('welcome');
    }

    // override
    update() {
        super.update();
    }

    // override
    free() {
        super.free();
    }
}

export default App;
