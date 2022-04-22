import {IClaimComp} from "./IClaimComp";
import {IWrapperComp} from "../../_types/IWrapperComp";

export type IFitchSettings = {
    /** The component to use for claim styling */
    ClaimComponent: IClaimComp;
    /** The component to use for claim body's styling */
    ClaimBodyComponent: IWrapperComp;
    /** The component to use for comment styling */
    ClaimCommentComponent: IWrapperComp;
    /** The component to use for ID styling */
    ClaimIdComponent: IWrapperComp;
    /** The component to use for claim hover styling */
    ClaimHoverComponent: IWrapperComp;
    /** The component to use for flag claim styling */
    FlagComponent: IWrapperComp;
    /** The component to use for flag body styling */
    FlagBodyComponent: IWrapperComp;
    /** The component to use for flag pole/container styling */
    FlagPoleComponent: IWrapperComp;
    /** The component to use for the overall proof container */
    FitchDerivationComponent: IWrapperComp;
};
