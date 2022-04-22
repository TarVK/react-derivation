import {FC, ReactChild} from "react";
import {useRuleSettings} from "../ruleSettingsContext";

/** A component for defining an inference rule */
export const Rule: FC<{
    /** The name of the inference rule */
    name: string;
    /** The premises required for the rule to be applied */
    premises: ReactChild[];
    /** The conclusion of the rule */
    conclusion: ReactChild;
}> = ({name, premises, conclusion}) => {
    const {
        RuleComponent,
        RuleConclusionComponent,
        RuleDividerComponent,
        RuleNameComponent,
        RulePremiseComponent,
        RulePremisesComponent,
    } = useRuleSettings();

    return (
        <RuleComponent name={name} premiseCount={premises.length}>
            <RulePremisesComponent>
                {premises.map((premise, i) => (
                    <RulePremiseComponent key={i} index={i} ruleName={name}>
                        {premise}
                    </RulePremiseComponent>
                ))}
            </RulePremisesComponent>
            <RuleDividerComponent />
            <RuleNameComponent>{name}</RuleNameComponent>
            <RuleConclusionComponent>{conclusion}</RuleConclusionComponent>
        </RuleComponent>
    );
};
