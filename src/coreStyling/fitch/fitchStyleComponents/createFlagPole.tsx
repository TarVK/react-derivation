import {CSSObject} from "@emotion/react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain flag pole style to be specified in the derivation settings
 * @param settings The settings for the styling of the flag
 * @returns The component to be used for flags
 */
export const createFlagPole =
    ({
        borderWidth = 2,
        css,
    }: {
        /** The width of the flag pole to use */
        borderWidth?: number;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className="flag"
                css={{
                    borderLeft: `${borderWidth}px solid black`,
                    width: "fit-content",
                    ...css,
                }}>
                {children}
            </div>
        );
