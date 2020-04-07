import { Scene, Mesh, Geometry, Material } from 'Three';

export default class BaseComponent {
	public scene: Scene;
	public mesh: Mesh;
	public rotationX = 0;
	public rotationY = 0;

	constructor(scene: Scene) {
		this.scene = scene;
	}

	public init(geometry: Geometry, material: Material) {
		this.mesh = new Mesh(geometry, material);
		this.scene.add(this.mesh);
		this.render();
	}

	public render() {
		this.mesh.rotation.x += this.rotationX;
		this.mesh.rotation.y += this.rotationY;
		requestAnimationFrame(() => this.render());
	}
}
