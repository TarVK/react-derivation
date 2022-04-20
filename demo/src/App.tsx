import {FC} from "react";
import {Arg, Flag, Claim, FitchDerivation} from "react-derivation";

export const App: FC = () => {
    return (
        <div css={{margin: 40}}>
            <FitchDerivation settings={{commentStyle: "right"}}>
                <Flag assumption={<Claim id="1">Bob is cool</Claim>}>
                    <Flag
                        assumption={
                            <Claim id="2" comment={<Arg name="reasons" on={[]} />}>
                                Bob punches people
                            </Claim>
                        }>
                        <Claim id="3">Bob is lame</Claim>
                        <Claim id="4" comment={<Arg name="contradiction" on={[1, 3]} />}>
                            False
                        </Claim>
                    </Flag>
                    <Claim id="5" comment={<Arg name="reasons" on={[4]} />}>
                        Bob does not punch people
                    </Claim>
                </Flag>
            </FitchDerivation>
        </div>
    );
};
