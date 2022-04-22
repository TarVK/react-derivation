import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain flag body style to be specified in the derivation settings
 * @param settings The settings for the styling of the flag
 * @returns The component to be used for flags
 */
export const createFlagBody =
    ({
        indent = 10,
        marginTop = 0,
        marginBottom = 5,
        css,
    }: {
        /** The indentation amount for the body of the flag */
        indent?: number;
        /** The margin to add to the top of the body */
        marginTop?: number;
        /** The margin to add to the bottom of the body of the flag */
        marginBottom?: number;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="flagBody"
                css={{
                    paddingLeft: indent,
                    marginTop,
                    marginBottom,
                    width: "fit-content",
                    ...css,
                }}>
                {children}
            </div>
        );
