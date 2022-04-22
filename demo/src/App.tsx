import {FC} from "react";
import {
    Arg,
    Flag,
    Claim,
    FitchDerivation,
    TreeDerivation,
    createClaim,
    Rule,
    HighlightProvider,
} from "react-derivation";

export const App: FC = () => {
    return (
        <div css={{margin: 40}}>
            <HighlightProvider>
                <FitchDerivation>
                    <Flag assumption={<Claim id="1">Bob is cool</Claim>}>
                        <Flag
                            assumption={
                                <Claim id="2" comment={<Arg name="reasons" on={[]} />}>
                                    Bob punches people
                                </Claim>
                            }>
                            <Claim id="3">Bob is lame</Claim>
                            <Claim
                                id="4"
                                comment={<Arg name="contradiction" on={[1, 3]} />}
                                hover={"Oranges"}>
                                False
                            </Claim>
                        </Flag>
                        <Claim id="5" comment={<Arg name="reasons" on={[4]} />}>
                            Bob does not punch people
                        </Claim>
                    </Flag>
                </FitchDerivation>
                <div css={{height: 50}} />
                {/* <TreeDerivation> */}
                <Rule
                    premises={[
                        <Rule
                            premises={[
                                <Rule premises={[]} name="exists" conclusion="Bob" />,
                            ]}
                            name="People with B in name are cool"
                            conclusion="Bob is cool"
                        />,
                        <Rule premises={[]} name="exists" conclusion="John" />,
                    ]}
                    name="contradiction"
                    conclusion="John knows Bob is cool"
                />
                {/* </TreeDerivation> */}
            </HighlightProvider>
        </div>
    );
};
