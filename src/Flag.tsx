import {FC, ReactNode} from "react";
import {useFitchSettings} from "./fitchSettingsContext";

/**
 * A fitch style flag component
 */
export const Flag: FC<{
    /** The body of the flag */
    children: ReactNode;
    /** The content in the flag */
    assumption: ReactNode;
}> = ({children, assumption}) => {
    const {FlagBodyComponent, FlagComponent, FlagPoleComponent} = useFitchSettings();

    return (
        <FlagPoleComponent>
            <FlagComponent>{assumption}</FlagComponent>
            <FlagBodyComponent>{children}</FlagBodyComponent>
        </FlagPoleComponent>
    );
};
