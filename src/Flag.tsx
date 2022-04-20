import {CSSObject} from "@emotion/react";
import {FC, ReactNode} from "react";
import {useFitchSettings} from "./fitchSettingsContext";
import {IFlagStyle} from "./_types/IFlagStyle";

/**
 * A fitch style flag component
 */
export const Flag: FC<{
    /** The body of the flag */
    children: ReactNode;
    /** The content in the flag */
    assumption: ReactNode;
}> = ({children, assumption}) => {
    const {flagBodyIndent, flagIndent, flagSpacingTop, flagSpacingBottom, flagStyle} =
        useFitchSettings();

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
    return (
        <div className="flag" css={{borderLeft: `2px solid black`, width: "fit-content"}}>
            <div
                className={`flagAssumption ${flagStyle}`}
                css={{
                    width: "fit-content",
                    marginBottom: flagSpacingTop,
                    paddingLeft: flagIndent,
                    ...flagStyles[flagStyle],
                }}>
                {assumption}
            </div>
            <div
                className="flagBody"
                css={{
                    paddingLeft: flagBodyIndent,
                    marginBottom: flagSpacingBottom,
                    width: "fit-content",
                }}>
                {children}
            </div>
        </div>
    );
};
