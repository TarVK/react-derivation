import {CSSObject} from "@emotion/react";
import {useHighlightData} from "../../highlightContext";
import {IRulePremiseComp} from "../_types/IRulePremiseComp";

/**
 * Creates the component with a certain rule premise style to be specified in the inference settings
 * @param settings The settings for the styling of the rule
 * @returns The component to be used for rules
 */
export const createRulePremise =
    ({
        highlightDespiteFocus = false,
        skipHighlight = false,
        css,
    }: {
        /** Whether to skip claim highlighting styling */
        skipHighlight?: boolean;
        /** Whether to highlight this rule even if highlight focus isn't rule but premise */
        highlightDespiteFocus?: boolean;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IRulePremiseComp =>
    ({children, index, ruleName}) => {
        const {claims, rule, focus} = useHighlightData();
        const highlight =
            rule == ruleName &&
            claims.find(item => item.index == index) &&
            (focus == "premise" || highlightDespiteFocus);
        return (
            <div
                className={`rulePremise ${highlight ? "highlight" : ""}`}
                css={{
                    width: "fit-content",
                    ...(skipHighlight
                        ? {}
                        : {
                              "&.highlight": {
                                  boxShadow: "0 1px 2px 2px #0000005e",
                              },
                          }),
                    ...css,
                }}>
                {children}
            </div>
        );
    };
