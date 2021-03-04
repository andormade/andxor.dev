import { Engine } from 'glugglugglug';
import computerIconFile from './images/computer.png';

const loadImage = async function (src: string): Promise<HTMLImageElement> {
	return new Promise(function (resolve) {
		const spriteImageElement = <HTMLImageElement>document.createElement('img');
		spriteImageElement.onload = function () {
			resolve(spriteImageElement);
		};
		spriteImageElement.src = src;
	});
};

const init = async function () {
	window.addEventListener('contextmenu', function (event) {
		event.preventDefault();
	});

	const canvas = <HTMLCanvasElement>document.getElementById('glcanvas');
	const spriteImageElement = await loadImage(computerIconFile);

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const engine = new Engine(canvas);
	engine.gl.clearColor(0, 0.5, 0.5, 1.0);
	engine.loadSpriteSheet(spriteImageElement);

	engine.render(function () {
		engine.resize(window.innerWidth, window.innerHeight);
		engine.drawSpriteFromCoordinates(
			Math.floor(window.innerWidth / 2) - 24,
			Math.floor(window.innerHeight / 2) - 24,
			48,
			48,
			0,
			0
		);
	});
};

if (document.readyState === 'complete') {
	init();
} else {
	window.addEventListener('DOMContentLoaded', init);
}
