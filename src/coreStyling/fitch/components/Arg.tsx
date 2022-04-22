import {FC, useMemo} from "react";
import {useHighlightData} from "../../highlightContext";

/** The argumentation for this line, I.e. the applied rule and related lines */
export const Arg: FC<{
    /** The name of the applied rule */
    name: string;
    /** The ids of the claims it was applied on */
    on?: (string | number)[];
}> = ({name, on = []}) => {
    const {set: setHighlight} = useHighlightData();
    const itemEls = on.map((item, index) => (
        <span
            key={index}
            onMouseEnter={() => setHighlight([{id: item, index}], name, "premise")}
            onMouseLeave={() => setHighlight([])}>
            ({item})
        </span>
    ));
    const joinedItemEls = itemEls.reverse().reduce((tail, item, i) => {
        if (i == 0) return [item];
        if (i == 1) return [item, " and ", ...tail];
        else return [item, ", ", ...tail];
    }, []);
    const allPremises = useMemo(() => on.map((item, index) => ({id: item, index})), []);

    return (
        <>
            <span
                onMouseEnter={() => setHighlight(allPremises, name, "rule")}
                onMouseLeave={() => setHighlight([])}>
                {name}
                {itemEls.length > 0 ? " on " : ""}
            </span>
            {joinedItemEls}
        </>
    );
};
