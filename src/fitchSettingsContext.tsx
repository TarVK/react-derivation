import {createContext, FC, ReactNode, useContext} from "react";
import {IFitchSettings} from "./_types/IFitchSettings";

/** The default fitch settings */
export const defaultFitchSettings: IFitchSettings = {
    paddingLeft: 30,
    paddingRight: 30,
    flagIndent: 2,
    flagBodyIndent: 10,
    flagSpacingTop: 5,
    flagSpacingBottom: 5,
    flagStyle: "open",
    commentSpacingTop: 3,
    commentStyle: "above",
    plain: false,
};

/** The react context containing the fitch settings */
export const fitchSettingsContext = createContext(defaultFitchSettings);

/** A hook to get the fitch settings */
export const useFitchSettings = () => useContext(fitchSettingsContext);

/** A component to augment the fitch settings */
export const AugmentFitchSettings: FC<{
    settings: Partial<IFitchSettings>;
    children: ReactNode;
}> = ({settings, children}) => {
    const oldSettings = useFitchSettings();
    return (
        <fitchSettingsContext.Provider value={{...oldSettings, ...settings}}>
            {children}
        </fitchSettingsContext.Provider>
    );
};
