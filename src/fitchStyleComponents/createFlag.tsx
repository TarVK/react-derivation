import {CSSObject} from "@emotion/react";
import {IFlagStyle} from "../_types/IFlagStyle";
import {IWrapperComp} from "../_types/IWrapperComp";

/**
 * Creates the component with a certain flag style to be specified in the derivation settings
 * @param settings The settings for the styling of the flag
 * @returns The component to be used for flags
 */
export const createFlag =
    ({
        indent = 2,
        spacingTop = 5,
        borderWidth = 2,
        type = "open",
        css,
    }: {
        /** The amount of indentation to have for the text in the flag */
        indent?: number;
        /** The spacing to have at the top of the flag */
        spacingTop?: number;
        /** The width of the border fo the flag */
        borderWidth?: number;
        /** The flag type to used */
        type?: IFlagStyle;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) =>
        (
            <div
                className={`flagAssumption ${type}`}
                css={{
                    width: "fit-content",
                    marginBottom: spacingTop,
                    paddingLeft: indent,
                    ...flagStyles[type],
                    borderWidth,
                    ...css,
                }}>
                {children}
            </div>
        );

const flagStyles: Record<IFlagStyle, CSSObject> = {
    open: {
        borderBottom: `2px solid black`,
    },
    closed: {
        borderBottom: `2px solid black`,
        borderRight: `2px solid black`,
        borderTop: `2px solid black`,
    },
    solid: {
        backgroundColor: `black`,
        color: "white",
    },
};
