import {CSSObject} from "@emotion/react";
import {useHighlightData} from "../../highlightContext";
import {IClaimComp} from "../_types/IClaimComp";

/**
 * Creates the component with a certain claim style to be specified in the derivation settings
 * @param settings The settings for the styling of the claim
 * @returns The component to be used for claims
 */
export const createClaim =
    ({
        skipHighlight = false,
        css,
    }: {
        /** Whether to skip claim highlighting styling */
        skipHighlight?: boolean;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IClaimComp =>
    ({children, ID}) => {
        const {claims} = useHighlightData();
        const highlight = claims.find(item => item.id == ID);
        return (
            <div
                className={`claim ${highlight ? "highlight" : ""}`}
                css={{
                    width: "fit-content",
                    ...(skipHighlight
                        ? {}
                        : {
                              "&.highlight .claimBodyHighlight": {
                                  boxShadow: "0 1px 2px 2px #0000005e",
                                  left: 0,
                                  right: 0,
                              },
                          }),
                    ...css,
                }}>
                {children}
            </div>
        );
    };
