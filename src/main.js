import * as THREE from 'three';

import back from '../assets/img/back.png';
import down from '../assets/img/down.png';
import front from '../assets/img/front.png';
import left from '../assets/img/left.png';
import right from '../assets/img/right.png';
import up from '../assets/img/up.png';

(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();stats.domElement.style.cssText='position:fixed;left:0;top:0;z-index:10000';document.body.appendChild(stats.domElement);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})();

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.z = 3;


// controls
const orbit = new OrbitControls( camera, renderer.domElement );
orbit.update();

// cube 3d world

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    front,
    back,
    up,
    down,
    left,
    right
]);



function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();