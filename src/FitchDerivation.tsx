import {FC, ReactNode} from "react";
import {AugmentFitchSettings, useFitchSettings} from "./fitchSettingsContext";
import {IFitchSettings} from "./_types/IFitchSettings";

/** A component that sets up the required contexts and wrapper divs for a fitch derivation */
export const FitchDerivation: FC<{
    settings?: Partial<IFitchSettings>;
    children: ReactNode;
}> = ({settings, children}) => {
    return (
        <AugmentFitchSettings settings={settings ?? {}}>
            <FitchDerivationInner>{children}</FitchDerivationInner>
        </AugmentFitchSettings>
    );
};

/** The inner container of the fitch style derivation */
export const FitchDerivationInner: FC<{
    children: ReactNode;
}> = ({children}) => {
    const {paddingLeft, paddingRight} = useFitchSettings();
    return (
        <div
            className="fitchDerivation"
            css={{
                position: "relative",
                paddingLeft,
                width: "fit-content",
                paddingRight,
            }}>
            {children}
        </div>
    );
};
