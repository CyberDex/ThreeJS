import { Scene, Mesh, Geometry, Material } from 'Three';
import IComponentConf from '../interfaces/IComponentConf';

export default class BaseComponent {
	public scene: Scene;
	public mesh: Mesh;
	public conf: IComponentConf;

	constructor(scene: Scene, conf?: IComponentConf) {
		this.scene = scene;
		this.conf = {
			rotationX: 0,
			rotationY: 0,
			x: 0,
			y: 0,
			z: 0,
			...conf
		}
	}

	public init(geometry: Geometry, material: Material) {
		this.mesh = new Mesh(geometry, material);
		this.scene.add(this.mesh);

		this.mesh.castShadow = true;
		this.mesh.receiveShadow = true;
		
		this.render();
	}

	public render() {
		this.mesh.rotation.x += this.conf.rotationX;
		this.mesh.rotation.y += this.conf.rotationY;

		this.mesh.position.x = this.conf.x;
		this.mesh.position.y = this.conf.y;
		this.mesh.position.z = this.conf.z;

		requestAnimationFrame(() => this.render());
	}
}
