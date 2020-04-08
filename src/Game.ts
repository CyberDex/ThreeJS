import { PerspectiveCamera, WebGLRenderer, Scene, SpotLight } from 'Three';
import Cube from './components/cube/Cube';
import * as conf from './config/game.json';
import { IElements } from './components/interfaces/IGame';
import Torus from './components/Torus/Torus';
import Sphere from './components/sphere/Sphere';

export default class Game {
	private readonly camera: PerspectiveCamera;
	private readonly scene: Scene;
	private readonly renderer: WebGLRenderer;
	private readonly spotLights: SpotLight[];

	private elements: IElements = {};

	private aspectRatio: number;

	constructor() {
		this.aspectRatio = window.innerWidth / window.innerHeight;

		this.camera = new PerspectiveCamera(conf.fieldOfView, this.aspectRatio, conf.near, conf.far);
		this.camera.position.x = conf.camera.position.x;
		this.camera.position.y = conf.camera.position.y;
		this.camera.position.z = conf.camera.position.z;

		this.scene = new Scene();
		this.spotLights = this.addLights();

		this.elements.cube = new Cube(this.scene);
		this.elements.sphere = new Sphere(this.scene);
		this.elements.torus = new Torus(this.scene);

		this.renderer = new WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		this.render();
	}

	private addLights(): SpotLight[] {
		return [this.addLight(0xeeeece, 1000, 1000, 1000), this.addLight(0xffffff, -200, -200, -200)];
	}

	private addLight(colour: number, x: number, y: number, z: number): SpotLight {
		const spotLight = new SpotLight(colour);
		spotLight.position.set(x, y, z);
		this.scene.add(spotLight);
		return spotLight;
	}

	private render() {
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(() => this.render());
	}
}
