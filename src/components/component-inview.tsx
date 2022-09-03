import { useEffect, useState } from "react";

interface inViewTypes {
	id: String;
	offset?: number;
}

const componentInView = ({ id, offset = 0 }: inViewTypes) => {
	const [inView, setInView] = useState<boolean | null>(null);

	useEffect(() => {
		let isCancelled: boolean = false;

		if (isCancelled) return;

		if (typeof window !== "undefined") {
			const sec = document.getElementById(id as string) as HTMLElement;

			if (!sec) return;

			const secHeight = sec.offsetHeight - offset;
			const secY = sec.getBoundingClientRect().y;
			if (secHeight > secY && secY > -secHeight) {
				setInView(true);
			} else {
				setInView(false);
			}

			window.addEventListener("scroll", () => {
				const secHeight = sec.offsetHeight - offset;
				const secY = sec.getBoundingClientRect().y;
				if (secHeight > secY && secY > -secHeight) {
					setInView(true);
				} else {
					setInView(false);
				}
			});
		}

		return () => {
			isCancelled = true;
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	return inView;
};

export default componentInView;
