import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const cena = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window. innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize (window.innerWidth, window.innerHeight);
document.querySelector(".js-filho").appendChild(renderer.domElement);

const luzDirecional = new THREE.DirectionalLight("white", 3);
luzDirecional.position.set(0, 2, 5);

luzDirecional.target.position.set(0, 0, 0);

cena.add(luzDirecional, luzDirecional.target);

const grupo = new THREE.Group();
grupo.rotation.z = -0.2;
cena.add(grupo);

let javascript

const loader = new GLTFLoader();
loader.load("./dist/public/javascript.glb", (gltf) => {  

  javascript = gltf.scene;

  const box = new THREE.Box3().setFromObject(javascript);
  const center = box.getCenter(new THREE.Vector3());
  javascript.position.sub(center);

  grupo.add(javascript);

  grupo.position.z = -.2;

});


let rotationSpeed = 0.01;
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const delta = currentScroll - lastScroll;

  rotationSpeed += delta * 0.0005;

  lastScroll = currentScroll;
});



function animar () {
  requestAnimationFrame(animar);

  if (javascript) {
    javascript.rotation.y += rotationSpeed;

    rotationSpeed *= 0.95;

    if (rotationSpeed < 0.01) {
      rotationSpeed = 0.01;
    }
  }

  renderer.render(cena, camera);
}

animar();