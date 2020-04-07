import { Geometry, Material, TorusGeometry, MeshPhongMaterial, Scene } from 'Three';
import BaseComponent from '../base/BaseComponent';
import * as conf from './config.json';

export default class Torus extends BaseComponent {
	private geometry: Geometry;
	private material: Material;

	constructor(scene: Scene) {
		super(scene);

		this.geometry = new TorusGeometry(conf.radius, conf.tubeDiameter, conf.radialSegments, conf.tubularSegments);
		this.material = new MeshPhongMaterial({
			color: 0xdaa520,
			specular: 0xbcbcbc
		});

		this.init(this.geometry, this.material);
		this.rotationX = 0.02;
	}
}
