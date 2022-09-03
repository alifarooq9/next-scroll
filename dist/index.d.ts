import { FC, ReactNode } from 'react';

interface linkTypes {
    children: ReactNode;
    to: String;
    offset?: number;
    duration?: number;
    className?: String;
}
declare const Link: FC<linkTypes>;

declare const scrollPosition: () => {
    scrollX: number;
    scrollY: number;
};

interface inViewTypes {
    id: String;
    offset?: number;
}
declare const componentInView: ({ id, offset }: inViewTypes) => boolean | null;

interface scrollToTypes {
    target: "top" | "bottom" | number;
    duration?: number;
}
declare const scrollTo: ({ target, duration }: scrollToTypes) => void;

export { Link, componentInView, scrollPosition, scrollTo };
