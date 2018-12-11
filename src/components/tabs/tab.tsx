import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/base";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type TabModifierProps = Partial<{
  active: boolean;
  className: string;
  style: React.CSSProperties;
}>;

export type TabProps = ModifierProps & TabModifierProps;

export const Tab = forwardRefAs<TabModifierProps, "a">(
  (props, ref) => {
    const { as, active, className, style, ...rest } = transformModifiers(props);
    return (
      <li
        style={style}
        className={cx(className, {
          "is-active": active,
        })}
      >
        {React.createElement(as!, { ref, ...rest })}
      </li>
    );
  },
  { as: "a" },
);
