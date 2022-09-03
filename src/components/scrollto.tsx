interface scrollToTypes {
	target: "top" | "bottom" | number;
	duration?: number;
}

const scrollTo = ({ target, duration = 500 }: scrollToTypes) => {
	if (typeof window === "undefined") return;

	let targetPosition: "top" | "bottom" | number;

	if (target === "top") targetPosition = document.body.offsetTop;
	else if (target === "bottom") targetPosition = document.body.offsetHeight;
	else if (!target) return;
	else {
		targetPosition = target;
	}

	const startPosition: number = window.pageYOffset;
	const distance: number = targetPosition - startPosition;
	let startTime: any = null;

	function animation(currentTime: any) {
		if (startTime === null) startTime = currentTime;
		let timeElapsed: any = currentTime - startTime;
		let run: any = ease(timeElapsed, startPosition, distance, duration);
		window.scroll(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t: any, b: any, c: any, d: any) {
		return (c * t) / d + b;
	}

	requestAnimationFrame(animation);

	return;
};

export default scrollTo;
