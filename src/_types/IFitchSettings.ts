import {ICommentStyle} from "./ICommentStyle";
import {IFlagStyle} from "./IFlagStyle";

export type IFitchSettings = {
    /** The indentation for the body of the flag */
    flagBodyIndent: number;
    /** The indentation for the claim of the flag */
    flagIndent: number;
    /** The amount of space to add below a flag */
    flagSpacingTop: number;
    /** The amount of space to add above the end of a flag pole */
    flagSpacingBottom: number;
    /** The type of flag to create */
    flagStyle: IFlagStyle;
    /** Spacing to add above a comment when using above style */
    commentSpacingTop: number;
    /** The type of comment to create */
    commentStyle: ICommentStyle;
    /** Whether to prevent (simple) non-content formatting */
    plain: boolean;
    /** The amount of padding added to the left of the full derivation */
    paddingLeft: number;
    /** The amount of padding added to the right of the full derivation */
    paddingRight: number;
};
