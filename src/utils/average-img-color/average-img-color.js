/**
 * @param {HTMLImageElement} img - A DOM image element from which the average color will be extracted
 * @param {number} brightness - How much brightness the resulting color should have
 * @param {()=>void} onerror
 * @returns {['rgb(0-255,0-255,0-255)', {red,green,blue}]}
 * @example
 * 	const [colorString, colorObject] = getIMGAverageColor(img, 1);
 */
export const getIMGAverageColor = (img, brightness = 1, onerror = () => {}) => {
	// Create a canvas to access the image pixels
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	let data;
	canvas.width = img.width;
	canvas.height = img.height;

	// Try/catch block to prevent pixel access errors
	try {
		// Draw the image on the canvas at position x=0, y=0
		if (!ctx) {
			onerror?.(new Error('Could not get 2d context'));
			return ['', {}];
		}
		ctx.drawImage(img, 0, 0);

		// Get the image data
		const imageData = ctx.getImageData(0, 0, img.width, img.height);
		data = imageData.data;
	} catch (error) {
		onerror?.(error);
		return ['', {}];
	}

	// Accumulate color channel values
	let red = 0;
	let green = 0;
	let blue = 0;

	// Iterate over canvas pixels and sum each color channel
	for (let i = 0; i < data.length; i += 4) {
		red += data[i];
		green += data[i + 1];
		blue += data[i + 2];
	}

	// Calculate averages by dividing each channel total by the number of pixels,
	// then apply the brightness multiplier
	const numberOfPixels = canvas.width * canvas.height;
	const dataBrightness = parseFloat(
		img.getAttribute('average-brightness') || ''
	);
	brightness = dataBrightness || brightness;
	red = (red / numberOfPixels) * brightness;
	green = (green / numberOfPixels) * brightness;
	blue = (blue / numberOfPixels) * brightness;

	// Clamp minimum value to 0 for each channel
	const average = {
		red: red < 0 ? 0 : red,
		green: green < 0 ? 0 : green,
		blue: blue < 0 ? 0 : blue,
	};

	// Return the average color as both a string and an object
	const rgb = `rgb(${average.red}, ${average.green}, ${average.blue})`;
	return [rgb, average];
};
