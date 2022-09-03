import React, { useEffect, useState } from "react";

const scrollPosition = () => {
	const [scrollX, setScrollX] = useState<number>(0);
	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", () => {
				setScrollX(window.scrollX);
				setScrollY(window.scrollY);
			});
		}

		return () => window.removeEventListener("scroll", () => {});
	}, []);

	return { scrollX, scrollY };
};

export default scrollPosition;
