import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain rule divider style to be specified in the inference settings
 * @param settings The settings for the styling of the rule
 * @returns The component to be used for rules
 */
export const createRuleDivider =
    ({
        lineWidth = 2,
        css,
    }: {
        /** The width of the border */
        lineWidth?: number;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="ruleDivider"
                css={{
                    borderBottom: `${lineWidth}px solid black`,
                    gridArea: "divider",
                    ...css,
                }}>
                {children}
            </div>
        );
