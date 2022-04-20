import {FC} from "react";

/** The argumentation for this line, I.e. the applied rule and related lines */
export const Arg: FC<{
    /** The name of the applied rule */
    name: string;
    /** The ids of the claims it was applied on */
    on?: (string | number)[];
}> = ({name, on = []}) => {
    const names = on.map(item => `(${item})`);
    const onString = names.reverse().reduce((tail, item, i) => {
        if (i == 0) return item;
        if (i == 1) return item + " and " + tail;
        else return item + ", " + tail;
    }, "");
    const text = name + (names.length > 0 ? " on " : "") + onString;
    return <>{text}</>;
};
