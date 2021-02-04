// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.540, -4.499);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0.766, -8.255, 0.221);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-1.994, 5.275, -5.738);

const CubeRoom = new Model('assets/models/cube-room/cube-room.gltf')
CubeRoom.setPosition(0, 0, -0.990)

// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(-4.954, 3.837, -5);
testText.setFontsize(10);
testText.setScale(1.5, 1.5, 1.5)

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(2.896, 2.714, -5.934);

const ambient = new AmbientLight();
ambient.setColor('#d970ff');
ambient.setPosition(0, 6.219, -0.529);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-0.017, 17.286, -0.017);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));