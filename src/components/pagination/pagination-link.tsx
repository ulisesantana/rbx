import classNames from "classnames";
import React from "react";

import { forwardRefAs, HelpersProps, transformHelpers } from "../../base";

export type PaginationLinkModifiers = Partial<{
  className: string;
  current: boolean;
}>;

export type PaginationLinkProps = HelpersProps & PaginationLinkModifiers;

export const PaginationLink = forwardRefAs<PaginationLinkProps, "a">(
  (props, ref) => {
    const { as, current, ...rest } = transformHelpers(props);
    rest.className = classNames("pagination-link", rest.className, {
      "is-current": current,
    });
    return <li children={React.createElement(as!, { ref, ...rest })} />;
  },
  { as: "a" },
);