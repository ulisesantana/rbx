import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { BREAKPOINTS } from "@/base/helpers";
import {
  forwardRefAs,
  genericPropTypes,
  HelpersProps,
  transformHelpers,
} from "../../base";
import { tuple } from "../../utils";

export const COLUMN_SIZES = tuple(
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  "one-third",
  "two-thirds",
  "one-quarter",
  "half",
  "three-quarters",
  "one-fifth",
  "two-fifths",
  "three-fifths",
  "four-fifths",
  "full",
);
export type ColumnSizes = (typeof COLUMN_SIZES)[number];

export type ColumnSizeModifierProps = Partial<{
  /**
   * If you want a column to only take the space it needs, use the narrow
   * modifier. The other column(s) will fill up the remaining space.
   */
  narrow: boolean;
  /**
   * Create horizontal space around Column elements
   */
  offset: ColumnSizes;
  /**
   * The size of the column. the maximun size of a row is 12
   */
  size: ColumnSizes;
}>;

const ColumnSizeModifierPropTypes = {
  narrow: PropTypes.bool,
  offset: PropTypes.oneOf(COLUMN_SIZES),
  size: PropTypes.oneOf(COLUMN_SIZES),
};

export type ColumnModifierProps = Partial<
  {
    /**
     * Size, Offset and Narrow props for Mobile devices (Up to 768px)
     */
    mobile: ColumnSizeModifierProps;
    /**
     * Size, Offset and Narrow props for Tablet devices (Between 769px and 1023px)
     */
    tablet: ColumnSizeModifierProps;
    /**
     * Size, Offset and Narrow props for Desktop devices (Between 1024px and
     * 1215px)
     */
    desktop: ColumnSizeModifierProps;
    /**
     * Size, Offset and Narrow props for WideScreen devices (Between 1216px and
     * 1407px)
     */
    widescreen: ColumnSizeModifierProps;
    /**
     * Size, Offset and Narrow props for FullHD devices (1408px and above)
     */
    fullhd: ColumnSizeModifierProps;
    /**
     * Size, Offset and Narrow props for Touch devices (Up to 1087px)
     */
    touch: ColumnSizeModifierProps;
  } & ColumnSizeModifierProps
>;

export type ColumnProps = HelpersProps & ColumnModifierProps;

const propTypes = {
  ...genericPropTypes,
  ...BREAKPOINTS.map(breakpoint => ({
    [breakpoint]: PropTypes.shape(ColumnSizeModifierPropTypes),
  })).reduce((acc, cv) => ({ ...acc, ...cv }), {}),
  ...ColumnSizeModifierPropTypes,
};

export const Column = Object.assign(
  forwardRefAs<ColumnProps, "div">(
    (props, ref) => {
      const {
        as,
        mobile,
        tablet,
        desktop,
        widescreen,
        fullhd,
        touch,
        narrow,
        offset,
        size,
        ...rest
      } = transformHelpers(props);

      rest.className = classNames(
        "column",
        rest.className,
        {
          [`is-${size}`]: !!size,
          [`is-offset-${offset}`]: !!offset,
          "is-narrow": narrow,
        },
        Object.entries({
          desktop,
          fullhd,
          mobile,
          tablet,
          touch,
          widescreen,
        })
          .filter(([breakpoint, value]) => value)
          .map(([breakpoint, value]) => ({
            [`is-${value!.size}-${breakpoint}`]: !!value!.size,
            [`is-narrow-${breakpoint}`]: value!.narrow,
            [`is-offset-${value!.offset}-${breakpoint}`]: !!value!.offset,
          }))
          .reduce((acc, cv) => ({ ...acc, ...cv }), {}),
      );

      return React.createElement(as!, { ref, ...rest });
    },
    { as: "div" },
  ),
  { propTypes },
);
