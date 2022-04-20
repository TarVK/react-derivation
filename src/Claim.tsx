import {FC, ReactChild, ReactNode} from "react";
import {useFitchSettings} from "./fitchSettingsContext";

/** A numbered fitch-style claim */
export const Claim: FC<{
    /** The actual body of the claim */
    children: ReactChild;
    /** The identifier for the claim */
    id?: ReactNode;
    /** Additional rationale/justification for the claim */
    comment?: ReactNode;
}> = ({children, id, comment}) => {
    const {plain, commentStyle, commentSpacingTop} = useFitchSettings();

    let commentEl = undefined;
    if (comment) {
        if (commentStyle == "right") {
            commentEl = (
                <div
                    className={`comment ${commentStyle}`}
                    css={{
                        position: "absolute",
                        left: "100%",
                        whiteSpace: "pre",
                        ...(plain ? {} : {color: "grey"}),
                    }}>
                    {comment}
                </div>
            );
        } else if (commentStyle == "above") {
            commentEl = (
                <div
                    className={`comment ${commentStyle}`}
                    css={{
                        marginTop: commentSpacingTop,
                        ...(plain ? {} : {color: "grey"}),
                    }}>
                    {plain ? "" : "{"}
                    {comment}
                    {plain ? "" : "}"}
                </div>
            );
        }
    }

    return (
        <div className="claim" css={{width: "fit-content"}}>
            {commentEl}
            <div className="claimID" css={{position: "absolute", left: 0}}>
                {id}
            </div>
            {children}
        </div>
    );
};
