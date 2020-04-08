import { Geometry, Material, BoxGeometry, MeshNormalMaterial, Scene } from 'Three';
import BaseComponent from '../base/BaseComponent';
import * as conf from './config.json';

export default class Cube extends BaseComponent {
	private geometry: Geometry;
	private material: Material;

	constructor(scene: Scene) {
		super(scene, conf);

		this.geometry = new BoxGeometry(conf.width, conf.height, conf.depth);
		this.material = new MeshNormalMaterial();

		this.init(this.geometry, this.material);
	}
}
