import {CSSObject} from "@emotion/react";
import {ICommentStyle} from "../_types/ICommentStyle";
import {IWrapperComp} from "../_types/IWrapperComp";

/**
 * Creates the component with a certain comment style to be specified in the derivation settings
 * @param settings The settings for the styling of the comment
 * @returns The component to be used for derivations
 */
export const createClaimComment =
    ({
        type = "right",
        plain = false,
        marginTop = 5,
        color = "#AAAAAA",
        css,
    }: {
        /** The type of comment */
        type?: ICommentStyle;
        /** Whether to minimize styling (other than positional) */
        plain?: boolean;
        /** The margin of spacing to have above the comment */
        marginTop?: number;
        /** The color of the comment (if plain isn't specified) */
        color?: string;
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) => {
        if (type == "right") {
            return (
                <div
                    className={`comment ${type}`}
                    css={{
                        position: "absolute",
                        left: "100%",
                        whiteSpace: "pre",
                        ...(plain ? {} : {color}),
                        ...css,
                    }}>
                    {children}
                </div>
            );
        }

        return (
            <div
                className={`comment ${type}`}
                css={{
                    marginTop,
                    ...(plain ? {} : {color}),
                    ...css,
                }}>
                {plain ? "" : "{"}
                {children}
                {plain ? "" : "}"}
            </div>
        );
    };
