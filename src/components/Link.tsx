import React, { FC, ReactNode } from "react";

interface linkTypes {
	children: ReactNode;
	to: String;
	offset?: number;
	duration?: number;
	className?: String;
}

const Link: FC<linkTypes> = ({
	children,
	to = "",
	offset = 0,
	duration = 500,
	className = "",
}) => {
	if (typeof window !== "undefined") {
		// reset window scroll
		window.onbeforeunload = function () {
			window.scrollTo(0, 0);
		};
	}

	// smooth scroll
	function handleSmoothScroll() {
		const target = document.getElementById(to as string) as HTMLElement;
		if (!target) return;

		const targetPosition: number = target.offsetTop - offset;
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
	}

	return (
		<div
			onClick={() => {
				if (to) {
					handleSmoothScroll();
				}
			}}
			className={className as string}
		>
			{children}
		</div>
	);
};

export default Link;
