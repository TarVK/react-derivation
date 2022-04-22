import {FC, ReactNode} from "react";
import {HighlightProvider} from "../../highlightContext";
import {AugmentRuleSettings} from "../ruleSettingsContext";
import {IRuleSettings} from "../_types/IRuleSettings";

/** A component that sets up the required contexts  for a tree derivation */
export const TreeDerivation: FC<{
    settings?: Partial<IRuleSettings>;
    children: ReactNode;
    /** Whether to create a new highlighting context, separateing it from parent highlights */
    resetHighlight?: boolean;
}> = ({settings, children, resetHighlight}) => {
    const inner = (
        <AugmentRuleSettings settings={settings ?? {}}>{children}</AugmentRuleSettings>
    );
    return resetHighlight ? <HighlightProvider>{inner}</HighlightProvider> : inner;
};
