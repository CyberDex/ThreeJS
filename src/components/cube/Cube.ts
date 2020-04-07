import { Geometry, Material, BoxGeometry, MeshNormalMaterial, Scene } from 'Three';
import BaseComponent from '../base/BaseComponent';
import * as conf from './config.json';

export default class Cube extends BaseComponent {
	private geometry: Geometry;
	private material: Material;

	constructor(scene: Scene) {
		super(scene);

		this.geometry = new BoxGeometry(conf.width, conf.height, conf.depth);
		this.material = new MeshNormalMaterial();

		super.init(this.geometry, this.material);
		this.rotationX = -0.01;
		this.rotationY = -0.02;
	}
}
