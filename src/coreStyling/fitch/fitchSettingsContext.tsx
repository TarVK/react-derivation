import {createContext, FC, ReactNode, useContext} from "react";
import {createClaim} from "./fitchStyleComponents/createClaim";
import {createClaimBody} from "./fitchStyleComponents/createClaimBody";
import {createClaimComment} from "./fitchStyleComponents/createClaimComment";
import {createClaimHover} from "./fitchStyleComponents/createClaimHover";
import {createClaimID} from "./fitchStyleComponents/createClaimID";
import {createFitchDerivation} from "./fitchStyleComponents/createFitchDerivation";
import {createFlag} from "./fitchStyleComponents/createFlag";
import {createFlagBody} from "./fitchStyleComponents/createFlagBody";
import {createFlagPole} from "./fitchStyleComponents/createFlagPole";
import {IFitchSettings} from "./_types/IFitchSettings";

/** The default fitch settings */
export const defaultFitchSettings: IFitchSettings = {
    ClaimComponent: createClaim(),
    ClaimIdComponent: createClaimID(),
    ClaimBodyComponent: createClaimBody(),
    ClaimHoverComponent: createClaimHover(),
    ClaimCommentComponent: createClaimComment(),
    FlagComponent: createFlag(),
    FlagPoleComponent: createFlagPole(),
    FlagBodyComponent: createFlagBody(),
    FitchDerivationComponent: createFitchDerivation(),
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
