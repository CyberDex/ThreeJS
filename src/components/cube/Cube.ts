import { Geometry, Material, BoxGeometry, MeshPhongMaterial , Scene } from 'Three';
import BaseComponent from '../base/BaseComponent';
import * as conf from './config.json';

export default class Cube extends BaseComponent {
	private geometry: Geometry;
	private material: Material;

	constructor(scene: Scene) {
		super(scene, conf);

		this.geometry = new BoxGeometry(conf.width, conf.height, conf.depth);
		this.material = new MeshPhongMaterial({
			color: 0xffdd99
		});
		
		this.init(this.geometry, this.material);
	}
}
