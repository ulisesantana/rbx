import classNames from "classnames";
import React from "react";

import { forwardRefAs, HelpersProps, transformHelpers } from "../../base";

export type FileCTAModifierProps = Partial<{ className: string }>;

export type FileCTAProps = HelpersProps & FileCTAModifierProps;

export const FileCTA = forwardRefAs<FileCTAProps, "span">(
  (props, ref) => {
    const { as, ...rest } = transformHelpers(props);
    rest.className = classNames("file-cta", rest.className);
    return React.createElement(as!, { ref, ...rest });
  },
  { as: "span" },
);