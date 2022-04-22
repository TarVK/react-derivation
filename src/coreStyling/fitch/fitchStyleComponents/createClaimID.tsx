import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain claim ID style to be specified in the derivation settings
 * @param settings The settings for the styling of the claim ID
 * @returns The component to be used for claims
 */
export const createClaimID =
    ({
        bracket = false,
        css,
    }: {
        /** Whether to add a bracket behind the ID */
        bracket?: boolean;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="claimID"
                css={{
                    position: "absolute",
                    color: "black",
                    left: 0,
                    ...css,
                }}>
                {children}
                {bracket && ")"}
            </div>
        );
