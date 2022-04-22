import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain rule premises style to be specified in the inference settings
 * @param settings The settings for the styling of the rule
 * @returns The component to be used for rules
 */
export const createRulePremises =
    ({
        minHeight = 10,
        css,
    }: {
        /** The minimum height of the premises, even if none are present */
        minHeight?: number;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="rulePremises"
                css={{
                    gridArea: "premises",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "space-around",
                    minHeight,
                    ...css,
                }}>
                {children}
            </div>
        );
