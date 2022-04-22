import {FC, ReactNode} from "react";

/** A component that styles and wraps a rule */
export type IRuleComp = FC<{children: ReactNode; name?: string; premiseCount: number}>;
