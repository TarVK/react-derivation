import {IWrapperComp} from "../../_types/IWrapperComp";
import {IRuleComp} from "./IRuleComp";
import {IRulePremiseComp} from "./IRulePremiseComp";

export type IRuleSettings = {
    /** The component to use for rule container styling */
    RuleComponent: IRuleComp;
    /** The component to use for rule conclusion styling */
    RuleConclusionComponent: IWrapperComp;
    /** The component to use for rule premises styling */
    RulePremisesComponent: IWrapperComp;
    /** The component to wrap individual premises in, mostly for rule premise highlight styling */
    RulePremiseComponent: IRulePremiseComp;
    /** The component to use for rule name styling */
    RuleNameComponent: IWrapperComp;
    /** The component to use for rule divider bar styling */
    RuleDividerComponent: IWrapperComp;
};
