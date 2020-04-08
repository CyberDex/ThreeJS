import { Geometry, Material, SphereGeometry, MeshNormalMaterial, Scene } from 'Three';
import BaseComponent from '../base/BaseComponent';
import * as conf from './config.json';

export default class Sphere extends BaseComponent {
	private geometry: Geometry;
	private material: Material;

	constructor(scene: Scene) {
		super(scene, conf);

		this.geometry = new SphereGeometry(conf.radius, conf.widthSegments, conf.heightSegments);
		this.material = new MeshNormalMaterial();

		this.init(this.geometry, this.material);
	}
}
