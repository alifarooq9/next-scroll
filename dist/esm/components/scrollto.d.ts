interface scrollToTypes {
    target: "top" | "bottom" | number;
    duration?: number;
}
declare const scrollTo: ({ target, duration }: scrollToTypes) => void;
export default scrollTo;
