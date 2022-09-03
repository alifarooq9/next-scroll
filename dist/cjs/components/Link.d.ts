import { FC, ReactNode } from "react";
interface linkTypes {
    children: ReactNode;
    to: String;
    offset?: number;
    duration?: number;
    className?: String;
}
declare const Link: FC<linkTypes>;
export default Link;
