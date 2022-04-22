import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain rule conclusion style to be specified in the inference settings
 * @param settings The settings for the styling of the rule
 * @returns The component to be used for rules
 */
export const createRuleConclusion =
    ({
        css,
    }: {
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="ruleConclusion"
                css={{
                    gridArea: "conclusion",
                    display: "flex",
                    justifyContent: "space-around",
                    ...css,
                }}>
                {children}
            </div>
        );
