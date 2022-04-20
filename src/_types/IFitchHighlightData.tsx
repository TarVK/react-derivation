/** The data for highlighting claims */
export type IFitchHighlightData = {
    /** The rule that was used */
    rule?: string;
    /** The claim that the rule was applied on */
    claims: (string | number)[];
    /** The function to update the data */
    set(claims: (string | number)[], rule?: string): void;
};
