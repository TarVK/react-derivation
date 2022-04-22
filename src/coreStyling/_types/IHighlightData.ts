import {IHighlightFocusData} from "./IHighlightFocusData";
import {IHighlightPremiseData} from "./IHighlightPremiseData";

/** The data for highlighting claims */
export type IFitchHighlightData = {
    /** The rule that was used */
    rule?: string;
    /** The claim that the rule was applied on */
    claims: IHighlightPremiseData[];
    /** What part of the highlighting has focus */
    focus: IHighlightFocusData;
    /** The function to update the data */
    set(
        claims: IHighlightPremiseData[],
        rule?: string,
        focus?: IHighlightFocusData
    ): void;
};
