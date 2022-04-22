import {FC, ReactNode} from "react";
import {AugmentFitchSettings, useFitchSettings} from "../fitchSettingsContext";
import {HighlightProvider} from "../../highlightContext";
import {IFitchSettings} from "../_types/IFitchSettings";

/** A component that sets up the required contexts and wrapper divs for a fitch derivation */
export const FitchDerivation: FC<{
    settings?: Partial<IFitchSettings>;
    children: ReactNode;
}> = ({settings, children}) => (
    <HighlightProvider>
        <AugmentFitchSettings settings={settings ?? {}}>
            <FitchDerivationInner>{children}</FitchDerivationInner>
        </AugmentFitchSettings>
    </HighlightProvider>
);

/** The inner container of the fitch style derivation */
const FitchDerivationInner: FC<{
    children: ReactNode;
}> = ({children}) => {
    const {FitchDerivationComponent} = useFitchSettings();
    return <FitchDerivationComponent>{children}</FitchDerivationComponent>;
};
