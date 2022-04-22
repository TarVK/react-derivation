import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain claim hover style to be specified in the derivation settings
 * @param settings The settings for the styling of the claim hover
 * @returns The component to be used for derivations
 */
export const createClaimHover =
    ({
        plain = false,
        css,
    }: {
        /** Whether to minimize styling (other than positional) */
        plain?: boolean;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="claimHover"
                css={{
                    position: "absolute",
                    display: "none",
                    ...(plain
                        ? {}
                        : {
                              boxShadow: "0 1px 2px 2px #0000005e",
                              backgroundColor: "white",
                          }),
                    ...css,
                }}>
                {children}
            </div>
        );
