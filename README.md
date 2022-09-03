# Next-Scroll

Scroll postion gives you ability the manipulate scroll

## Features

-   **Lightweight**
-   **smooth scroll**
-   **component in view**
-   **Vertical and horizontal scroll position**

## Installation

#### With yarn

```sh
yarn add next-scroll
```

#### With npm

```sh
npm install next-scroll
```

## Getting Started

## smooth scroll any section

import the Link tag from next-scroll and wrapp it to your content it will act like a scroll trigger, Link will take 3 parameters first "to" which will take the id of the section, then "offset" which will take numbers of pixels by default its 0. And last duration which will take numbers in milliseconds by default its 500ms.

```jsx
import { Link } from "next-scroll";

export default function nextScroll() {
	return (
		<div>
			<Link to="section" offset={100} duration={700}>
				Scroll to section
			</Link>

			<section id="section">Section</section>
		</div>
	);
}
```

## smooth scroll to top, bottom or anywhere in window

scrollTo is funtion it will take 2 parameters first target which you can set top bottom or anywhere pixels in the window and second duration it will take numbers in milliseconds by default its 500ms.

```jsx
import { scrollTo } from "next-scroll";

export default function Home() {
	// set target to "top" to scroll to top
	function handleScrollToTop() {
		scrollTo({ target: "top", duration: 600 });
	}

	// set target to "bottom" to scroll to bottom
	function handleScrollToBottom() {
		scrollTo({ target: "bottom", duration: 600 });
	}

	// set target to any where in the window in pixels
	function handleScrollToAnyWhere() {
		scrollTo({ target: 1000, duration: 600 });
	}

	return (
		<div>
			{/* scroll to bottom button */}
			<button onClick={handleScrollToBottom}>Scroll to Botton</button>

			{/* scroll to 1000px button */}
			<button onClick={handleScrollToAnyWhere}>Scroll to anywhere</button>

			{/* scroll to top button */}
			<button onClick={handleScrollToTop}>Scroll to Top</button>
		</div>
	);
}
```

## check if section is in view

componentInView is a funtion it will take 2 parameters id and offset. "id" will take the id of section you want to apply on and last, "offset" will take numbers in pixels it will determine how much offset you want when triggering inView function. This function will reture True, False or null, null means there is not id found.

```jsx
import { componentInView } from "next-scroll";

export default function nextScroll() {
	// id will take any section id and offset will take numbers in pixels
	const inView = componentInView({ id: "section", offset: 0 });

	console.log(inView); // true / false or null
	// null means no id found

	return (
		<div>
			<section id="section">Section</section>
		</div>
	);
}
```

## position of scrollX and scrollY

scrollPostion will give your scrollY and scrollX of window

```jsx
import { scrollPosition } from "next-scroll";

export default function nextScroll() {
	console.log(scrollPosition().scrollX); // 120px return how many pixels a user scrolled
	console.log(scrollPosition().scrollY); // 1500px return how many pixels a user scrolled

	return (
		<div>
			<h1>ScrollY : {scrollPosition().scrollX}</h1>
			<h1>ScrollY : {scrollPosition().scrollY}</h1>
		</div>
	);
}
```
