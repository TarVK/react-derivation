import {CSSObject} from "@emotion/react";
import {useState} from "react";
import {IWrapperComp} from "../../_types/IWrapperComp";

/**
 * Creates the component with a certain claim body style to be specified in the derivation settings
 * @param settings The settings for the styling of the claim body
 * @returns The component to be used for claims
 */
export const createClaimBody =
    ({
        css,
    }: {
        /** Additional CSS styling */
        css?: CSSObject;
    } = {}): IWrapperComp =>
    ({children}) => {
        const [ref, setRef] = useState<HTMLDivElement | null>(null);
        return (
            <div
                ref={setRef}
                className="claimBody"
                css={{
                    width: "fit-content",
                    ":hover .claimHover": {
                        display: "block",
                    },
                    ...css,
                }}>
                <div
                    className="claimBodyHighlight"
                    css={{
                        position: "absolute",
                        height: ref?.getBoundingClientRect().height,
                    }}
                />
                {children}
            </div>
        );
    };
