interface inViewTypes {
    id: String;
    offset?: number;
}
declare const componentInView: ({ id, offset }: inViewTypes) => boolean | null;
export default componentInView;
