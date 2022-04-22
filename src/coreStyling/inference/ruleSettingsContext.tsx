import {createContext, FC, ReactNode, useContext} from "react";
import {createRule} from "./inferenceRuleComponents/createRule";
import {createRuleConclusion} from "./inferenceRuleComponents/createRuleConclusion";
import {createRuleDivider} from "./inferenceRuleComponents/createRuleDivider";
import {createRuleName} from "./inferenceRuleComponents/createRuleName";
import {createRulePremise} from "./inferenceRuleComponents/createRulePremise";
import {createRulePremises} from "./inferenceRuleComponents/createRulePremises";
import {IRuleSettings} from "./_types/IRuleSettings";

/** The default rule settings */
export const defaultRuleSettings: IRuleSettings = {
    RuleComponent: createRule(),
    RuleNameComponent: createRuleName(),
    RuleDividerComponent: createRuleDivider(),
    RulePremiseComponent: createRulePremise(),
    RulePremisesComponent: createRulePremises(),
    RuleConclusionComponent: createRuleConclusion(),
};

/** The react context containing the rule settings */
export const ruleSettingsContext = createContext(defaultRuleSettings);

/** A hook to get the rule settings */
export const useRuleSettings = () => useContext(ruleSettingsContext);

/** A component to augment the rule settings */
export const AugmentRuleSettings: FC<{
    settings: Partial<IRuleSettings>;
    children: ReactNode;
}> = ({settings, children}) => {
    const oldSettings = useRuleSettings();
    return (
        <ruleSettingsContext.Provider value={{...oldSettings, ...settings}}>
            {children}
        </ruleSettingsContext.Provider>
    );
};
