import classNames from "classnames";
import React from "react";

import { forwardRefAs, HelpersProps, transformHelpers } from "../../base";
import { tuple } from "../../utils";

export const CONTROL_SIZES = tuple("small", "medium", "large");
export type ControlSizes = (typeof CONTROL_SIZES)[number];

export type ControlModifierProps = Partial<{
  className: string;
  expanded: boolean;
  iconLeft: boolean;
  iconRight: boolean;
  loading: boolean;
  size: ControlSizes;
}>;

export type ControlProps = HelpersProps & ControlModifierProps;

export const Control = forwardRefAs<ControlProps, "div">(
  (props, ref) => {
    const {
      as,
      expanded,
      iconLeft,
      iconRight,
      loading,
      size,
      ...rest
    } = transformHelpers(props);
    rest.className = classNames("control", rest.className, {
      "has-icons-left": iconLeft,
      "has-icons-right": iconRight,
      "is-expanded": expanded,
      "is-loading": loading,
      [`is-${size}`]: size,
    });
    return React.createElement(as!, { ref, ...rest });
  },
  { as: "div" },
);