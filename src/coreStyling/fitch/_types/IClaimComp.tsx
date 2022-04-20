import {FC, ReactNode} from "react";

/** A component that styles and wraps a claim*/
export type IClaimComp = FC<{children: ReactNode; ID?: string | number}>;
