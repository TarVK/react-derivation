import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain fitch derivation style to be specified in the derivation settings
 * @param settings The settings for the styling of the derivation
 * @returns The component to be used for derivations
 */
export const createFitchDerivation =
    ({
        paddingLeft = 30,
        paddingRight = 30,
        css,
    }: {
        /** The amount of spacing to have on the left of the derivation, in which IDs can be shown */
        paddingLeft?: number;
        /** The spacing to have tot the right of the derivation */
        paddingRight?: number;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="fitchDerivation"
                css={{
                    position: "relative",
                    paddingLeft,
                    width: "fit-content",
                    paddingRight,
                    ...css,
                }}>
                {children}
            </div>
        );
