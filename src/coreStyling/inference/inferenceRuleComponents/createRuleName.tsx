import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain rule name style to be specified in the inference settings
 * @param settings The settings for the styling of the rule
 * @returns The component to be used for rules
 */
export const createRuleName =
    ({
        css,
    }: {
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="ruleName"
                css={{gridArea: "name", height: 0, paddingLeft: 2, ...css}}>
                <div className="ruleNameInner" css={{transform: "translate(0, -50%)"}}>
                    {children}
                </div>
            </div>
        );
