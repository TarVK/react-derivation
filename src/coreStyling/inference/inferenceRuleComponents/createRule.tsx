import {CSSObject} from "@emotion/react";
import {useHighlightData} from "../../highlightContext";
import {IRuleComp} from "../_types/IRuleComp";

/**
 * Creates the component with a certain rule style to be specified in the inference settings
 * @param settings The settings for the styling of the rule
 * @returns The component to be used for rules
 */
export const createRule =
    ({
        paddingLeft = 5,
        paddingRight = 5,
        marginRight = 10,
        skipHighlight = false,
        highlightDespiteFocus = false,
        css,
    }: {
        /** The padding to the left of the rule */
        paddingLeft?: number;
        /** The padding to the right of the rule */
        paddingRight?: number;
        /** The margin to keep to the right of the rule */
        marginRight?: number;
        /** Whether to skip claim highlighting styling */
        skipHighlight?: boolean;
        /** Whether to highlight this rule even if highlight focus isn't rule but premise */
        highlightDespiteFocus?: boolean;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IRuleComp =>
    ({children, name}) => {
        const {rule, focus} = useHighlightData();
        const highlight =
            rule && rule == name && (focus == "rule" || highlightDespiteFocus);
        return (
            <div
                className={`rule ${highlight ? "highlight" : ""}`}
                css={{
                    display: "grid",
                    width: "fit-content",
                    height: "fit-content",
                    gridTemplateColumns: "auto auto",
                    gridTemplateAreas: '"premises ."\n"divider name"\n"conclusion ."',
                    marginRight,
                    paddingLeft,
                    paddingRight,
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
