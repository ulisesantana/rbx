import classNames from "classnames";
import React from "react";

import { forwardRefAs, HelpersProps, transformHelpers } from "../../base";
import { Breakpoints } from "../../base/helpers";
import { tuple } from "../../utils";
import { Column } from "./column";

export const COLUMNS_GAPS = tuple(0, 1, 2, 3, 4, 5, 6, 7, 8);
export type ColumnsGaps = (typeof COLUMNS_GAPS)[number];

export type ColumnsBreakpointProps = Partial<{
  /**
   * The column gap size for Tablet devices (Between 769px and 1023px)
   */
  gap: ColumnsGaps;
}>;

type ColumnsModifierProps = Partial<
  {
    /**
     * Breakpoint where columns become stacked.
     */
    breakpoint: Breakpoints;
    /**
     * `true` you want the columns inside to be horizontaly centered
     */
    centered: boolean;
    children: React.ReactNode;
    className: string;
    /**
     * `true` to remove space between columns
     */
    gapless: boolean;
    /**
     * `true` if you want to use more than one line if you add more column
     * elements that would fit in a single row.
     */
    multiline: boolean;
    /**
     * The column gap size for Mobile devices (Up to 768px)
     */
    mobile: ColumnsBreakpointProps;
    /**
     * The column gap size for Tablet devices (Between 769px and 1023px)
     */
    tablet: ColumnsBreakpointProps;
    /**
     * The column gap size for Desktop devices (Between 1024 and 1215px)
     */
    desktop: ColumnsBreakpointProps;
    /**
     * The column gap size for WideScreen devices (Between 1216px and 1407px)
     */
    widescreen: ColumnsBreakpointProps;
    /**
     * The column gap size for FullHD devices (1408px and above)
     */
    fullhd: ColumnsBreakpointProps;
  } & ColumnsBreakpointProps
>;

export type ColumnsProps = HelpersProps & ColumnsModifierProps;

export const Columns = Object.assign(
  forwardRefAs<ColumnsProps, "div">(
    (props, ref) => {
      const {
        as,
        breakpoint,
        centered,
        desktop,
        fullhd,
        gap,
        gapless,
        mobile,
        multiline,
        tablet,
        widescreen,
        ...rest
      } = transformHelpers(props);

      const gapClassNames = classNames(
        { [`is-${gap}`]: typeof gap === "number" },
        Object.entries({
          desktop,
          fullhd,
          mobile,
          tablet,
          widescreen,
        })
          .filter(([key, value]) => value)
          .map(([key, value]) => ({
            [`is-${value!.gap}-${key}`]: typeof value!.gap === "number",
          }))
          .reduce((acc, cv) => ({ ...acc, ...cv }), {}),
      );

      rest.className = classNames(
        "columns",
        rest.className,
        {
          [`is-${breakpoint}`]: breakpoint,
          "is-centered": centered,
          "is-gapless": gapless,
          "is-multiline": multiline,
          "is-variable ": !!gapClassNames,
        },
        gapClassNames,
      );

      return React.createElement(as!, { ref, ...rest });
    },
    {
      as: "div",
      multiline: true,
    },
  ),
  { Column },
);