import {FC, ReactNode, useCallback, useState} from "react";
import {AugmentFitchSettings, useFitchSettings} from "../fitchSettingsContext";
import {fitchHighlightContext} from "../fitchHighlightContext";
import {IFitchSettings} from "../_types/IFitchSettings";

/** A component that sets up the required contexts and wrapper divs for a fitch derivation */
export const FitchDerivation: FC<{
    settings?: Partial<IFitchSettings>;
    children: ReactNode;
}> = ({settings, children}) => {
    const [highlight, setHighlight] = useState<{
        rule?: string;
        claims: (string | number)[];
    }>({
        rule: undefined,
        claims: [],
    });
    const set = useCallback((claims: (string | number)[], rule?: string) => {
        setHighlight({claims, rule});
    }, []);

    return (
        <fitchHighlightContext.Provider value={{...highlight, set}}>
            <AugmentFitchSettings settings={settings ?? {}}>
                <FitchDerivationInner>{children}</FitchDerivationInner>
            </AugmentFitchSettings>
        </fitchHighlightContext.Provider>
    );
};

/** The inner container of the fitch style derivation */
const FitchDerivationInner: FC<{
    children: ReactNode;
}> = ({children}) => {
    const {FitchDerivationComponent} = useFitchSettings();
    return <FitchDerivationComponent>{children}</FitchDerivationComponent>;
};
