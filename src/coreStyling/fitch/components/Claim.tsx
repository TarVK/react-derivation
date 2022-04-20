import {FC, ReactChild, ReactNode} from "react";
import {useFitchSettings} from "../fitchSettingsContext";

/** A numbered fitch-style claim */
export const Claim: FC<{
    /** The actual body of the claim */
    children: ReactChild;
    /** The identifier for the claim */
    id?: string | number;
    /** Additional rationale/justification for the claim */
    comment?: ReactNode;
    /** A node to show when hovering the claim */
    hover?: ReactNode;
}> = ({children, id, comment, hover}) => {
    const {
        ClaimCommentComponent,
        ClaimHoverComponent,
        ClaimIdComponent,
        ClaimComponent,
        ClaimBodyComponent,
    } = useFitchSettings();

    return (
        <ClaimComponent ID={id}>
            {comment && <ClaimCommentComponent>{comment}</ClaimCommentComponent>}
            {id && <ClaimIdComponent>{id}</ClaimIdComponent>}
            <ClaimBodyComponent>
                {children}
                {hover && <ClaimHoverComponent>{hover}</ClaimHoverComponent>}
            </ClaimBodyComponent>
        </ClaimComponent>
    );
};
