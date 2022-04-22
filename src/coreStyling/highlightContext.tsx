import {createContext, FC, ReactNode, useCallback, useContext, useState} from "react";
import {IFitchHighlightData} from "./_types/IHighlightData";
import {IHighlightFocusData} from "./_types/IHighlightFocusData";
import {IHighlightPremiseData} from "./_types/IHighlightPremiseData";

/** The react context for setting and reading the claim highlight data */
export const highlightContext = createContext<IFitchHighlightData>({
    rule: undefined,
    claims: [],
    focus: "rule",
    set() {},
});

/** A hook to get the fitch highlight data */
export const useHighlightData = () => useContext(highlightContext);

/** A component to create a new highlight context provider */
export const HighlightProvider: FC<{
    disableForwardParents?: boolean;
    children: ReactNode;
}> = ({disableForwardParents, children}) => {
    const {set: setParent} = useHighlightData();
    const [highlight, setHighlight] = useState<{
        rule?: string;
        focus: IHighlightFocusData;
        claims: IHighlightPremiseData[];
    }>({
        rule: undefined,
        focus: "rule",
        claims: [],
    });
    const set = useCallback(
        (claims: IHighlightPremiseData[], rule?: string, focus?: IHighlightFocusData) => {
            setHighlight({claims, rule, focus: focus ?? "rule"});
            if (!disableForwardParents) setParent(claims, rule, focus);
        },
        []
    );

    return (
        <highlightContext.Provider value={{...highlight, set}}>
            {children}
        </highlightContext.Provider>
    );
};
