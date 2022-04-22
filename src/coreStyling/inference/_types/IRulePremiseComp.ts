import {FC, ReactNode} from "react";

/** A component that styles highlighting of a rule's premise */
export type IRulePremiseComp = FC<{children: ReactNode; index: number; ruleName: string}>;
