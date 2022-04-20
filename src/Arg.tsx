import {FC} from "react";
import {useFitchHighlightData} from "./fitchHighlightContext";

/** The argumentation for this line, I.e. the applied rule and related lines */
export const Arg: FC<{
    /** The name of the applied rule */
    name: string;
    /** The ids of the claims it was applied on */
    on?: (string | number)[];
}> = ({name, on = []}) => {
    const {set: setHighlight} = useFitchHighlightData();
    const itemEls = on.map((item, id) => (
        <span
            key={id}
            onMouseEnter={() => setHighlight([item])}
            onMouseLeave={() => setHighlight([])}>
            ({item})
        </span>
    ));
    const joinedItemEls = itemEls.reverse().reduce((tail, item, i) => {
        if (i == 0) return [item];
        if (i == 1) return [item, " and ", ...tail];
        else return [item, ", ", ...tail];
    }, []);

    return (
        <>
            <span
                onMouseEnter={() => setHighlight(on, name)}
                onMouseLeave={() => setHighlight([])}>
                {name}
                {itemEls.length > 0 ? " on " : ""}
            </span>
            {joinedItemEls}
        </>
    );
};
