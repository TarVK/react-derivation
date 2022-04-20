import {createContext, useContext} from "react";
import {IFitchHighlightData} from "./_types/IFitchHighlightData";

/** The react context for setting and reading the claim highlight data */
export const fitchHighlightContext = createContext<IFitchHighlightData>({
    rule: undefined,
    claims: [],
    set() {},
});

/** A hook to get the fitch highlight data */
export const useFitchHighlightData = () => useContext(fitchHighlightContext);
