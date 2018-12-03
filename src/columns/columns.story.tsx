import { boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Columns } from "@/columns";
import { ColumnProps } from "@/columns/column";
import { Box, Notification, Title } from "@/elements";
import { Colors } from "@/modifiers/color";
import { BREAKPOINTS } from "@/modifiers/responsive";
import { COLUMN_SIZES, COLUMNS_GAP_SIZES, ColumnSizes } from "./constants";

const makeGapSizeSelect = (name: string = "Gap size") =>
  select(
    name,
    {
      undefined: "",
      ...COLUMNS_GAP_SIZES.map(size => ({ [size]: size })).reduce(
        (acc, cv) => ({ ...acc, ...cv }),
        {},
      ),
    },
    "",
  );

type ColumnNotificationProps = ColumnProps & { color?: Colors };
const ColumnNotification: React.FC<ColumnNotificationProps> = props => {
  const { color, children, ...rest } = props;
  return (
    <Columns.Column {...rest}>
      <Notification textAlignment="centered" color={color}>
        {children}
      </Notification>
    </Columns.Column>
  );
};

storiesOf("Columns", module)
  .add("Basics", () => (
    <Columns>
      {["First", "Second", "Third", "Fourth"].map(name => (
        <ColumnNotification color="primary" children={`${name} Column`} />
      ))}
    </Columns>
  ))
  .add("Sizes (by name)", () =>
    COLUMN_SIZES.filter(size => typeof size === "string").map(size => (
      <Columns key={size}>
        <ColumnNotification color="primary" size={size} children={size} />
        {size !== "full" && <ColumnNotification children="Auto" />}
      </Columns>
    )),
  )
  .add("Sizes (by number)", () =>
    COLUMN_SIZES.filter(size => typeof size === "number").map(size => (
      <Columns key={size}>
        <ColumnNotification color="primary" size={size} children={size} />
        {COLUMN_SIZES.filter(size2 => size2 > size).map(size2 => (
          <ColumnNotification size={1} key={size2} children={1} />
        ))}
      </Columns>
    )),
  )
  .add("Offset", () => {
    const permutations: Array<{ size: ColumnSizes; offset: ColumnSizes }> = [
      { size: "half", offset: "one-quarter" },
      { size: "three-fifths", offset: "one-fifth" },
      { size: 4, offset: 8 },
      { size: 11, offset: 1 },
    ];
    return permutations.map(({ size, offset }, i) => (
      <Columns key={i}>
        <ColumnNotification size={size} offset={offset} color="primary">
          <code className="html">is-{size}</code>
          <br />
          <code className="html">is-offset-{offset}</code>
        </ColumnNotification>
      </Columns>
    ));
  })
  .add("Narrow", () => (
    <Columns>
      <Columns.Column narrow>
        <Box style={{ width: 200 }}>
          <Title<"p"> as="p" size={5}>
            Narrow column
          </Title>
          <Title<"p"> as="p" subtitle>
            This column is only 200px wide.
          </Title>
        </Box>
      </Columns.Column>
      <Columns.Column>
        <Box>
          <Title<"p"> size={5} as="p">
            Flexible column
          </Title>
          <Title<"p"> subtitle as="p">
            This column will take up the remaining space available.
          </Title>
        </Box>
      </Columns.Column>
    </Columns>
  ))
  .add("Responsiveness", () => {
    const breakpoint = select(
      "Breakpoint",
      {
        undefined: "",
        ...BREAKPOINTS.map(size => ({ [size]: size })).reduce(
          (acc, cv) => ({ ...acc, ...cv }),
          {},
        ),
      },
      "",
    );

    return (
      <Box>
        <Title<"p"> size={5} as="p">
          Breakpoint:{" "}
          <code className="html">
            {breakpoint === "" ? "undefined" : breakpoint}
          </code>
        </Title>
        <Columns breakpoint={breakpoint === "" ? undefined : breakpoint}>
          {["First", "Second", "Third", "Fourth"].map(name => (
            <ColumnNotification color="primary" children={`${name} Column`} />
          ))}
        </Columns>
      </Box>
    );
  })
  .add("Responsiveness (by breakpoint)", () => (
    <Columns breakpoint="mobile">
      <ColumnNotification
        color="primary"
        mobile={{ size: "three-quarters" }}
        tablet={{ size: "two-thirds" }}
        desktop={{ size: "half" }}
        widescreen={{ size: "one-third" }}
        fullhd={{ size: "one-quarter" }}
      >
        <code>is-three-quarters-mobile</code>
        <br />
        <code>is-two-thirds-tablet</code>
        <br />
        <code>is-half-desktop</code>
        <br />
        <code>is-one-third-widescreen</code>
        <br />
        <code>is-one-quarter-fullhd</code>
      </ColumnNotification>
      {[2, 3, 4, 5].map(name => (
        <ColumnNotification color="primary" children={name} />
      ))}
    </Columns>
  ))
  .add("Nesting", () => (
    <Columns breakpoint="mobile">
      <Columns.Column size="half">
        <Notification color="info" textAlignment="centered">
          First Column
        </Notification>
        <Columns>
          <ColumnNotification color="info" children="First Nested Column" />
          <ColumnNotification color="info" children="Second Nested Column" />
        </Columns>
      </Columns.Column>

      <Columns.Column size="half">
        <Notification color="info" textAlignment="centered">
          Second Column
        </Notification>
        <Columns>
          <ColumnNotification color="danger" size="half" children="50%" />
          <ColumnNotification color="danger" children="Auto" />
          <ColumnNotification color="danger" children="Auto" />
        </Columns>
      </Columns.Column>
    </Columns>
  ))
  .add("Gap", () => {
    const gaplessBoolean = boolean("Gapless", false);
    return (
      <Box>
        <Title<"p"> size={5} as="p">
          Gapless: <code>{gaplessBoolean ? "true" : "false"}</code>
        </Title>
        <Columns gapless={gaplessBoolean}>
          {["First", "Second", "Third", "Fourth"].map(name => (
            <ColumnNotification color="primary" children={`${name} Column`} />
          ))}
        </Columns>
      </Box>
    );
  })
  .add("Gap (multiline)", () => {
    const gapless = boolean("Gapless", false);
    const permutations: ColumnNotificationProps[] = [
      { size: "one-quarter" },
      { size: "one-quarter" },
      { size: "one-quarter" },
      { size: "one-quarter" },
      { size: "half" },
      { size: "one-quarter" },
      { size: "one-quarter" },
      { size: "one-quarter" },
      {},
    ];
    return (
      <Box>
        <Title<"p"> size={5} as="p">
          Gapless: <code>{gapless ? "true" : "false"}</code>
          <br />
        </Title>
        <Columns breakpoint="mobile" gapless={gapless} multiline>
          {permutations.map(({ size }, key) => (
            <ColumnNotification
              children={size ? `is-${size}` : "Auto"}
              color="primary"
              key={key}
              size={size}
            />
          ))}
        </Columns>
      </Box>
    );
  })
  .add("Gap (variable)", () => {
    const gapSize = makeGapSizeSelect();
    return (
      <Box>
        <Title<"p"> size={5} as="p">
          Gap size:{" "}
          <code>{gapSize === "" ? "undefined" : `is-${gapSize}`}</code>
          <br />
        </Title>
        <Columns gapSize={gapSize === "" ? undefined : gapSize}>
          <ColumnNotification color="primary" children="Side" size={3} />
          <ColumnNotification color="primary" children="Main" size={9} />
        </Columns>

        <Columns gapSize={gapSize === "" ? undefined : gapSize}>
          {[1, 2, 3].map(key => (
            <ColumnNotification
              children="Three columns"
              color="primary"
              key={key}
              size="one-third"
            />
          ))}
        </Columns>

        <Columns gapSize={gapSize === "" ? undefined : gapSize}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(key => (
            <ColumnNotification
              children={key}
              color="primary"
              key={key}
              size={1}
            />
          ))}
        </Columns>
      </Box>
    );
  })
  .add("Gap (variable, by-breakpoint)", () => {
    // tslint:disable:object-literal-sort-keys
    const gapSizes = {
      mobile: makeGapSizeSelect("Mobile gap size"),
      tablet: makeGapSizeSelect("Tablet gap size"),
      desktop: makeGapSizeSelect("Desktop gap size"),
      fullhd: makeGapSizeSelect("FullHD gap size"),
      widescreen: makeGapSizeSelect("Widescreen gap size"),
    };
    // tslint:enable:object-literal-sort-keys

    const getGapSizeTitle = (gapSize: ReturnType<typeof makeGapSizeSelect>) =>
      gapSize === "" ? "undefined" : `is-${gapSize}`;
    const getGapSizeValue = (gapSize: ReturnType<typeof makeGapSizeSelect>) =>
      gapSize === "" ? undefined : gapSize;

    return (
      <Box>
        {Object.entries(gapSizes).map(([breakpoint, selectValue]) => (
          <Title<"p"> size={5} as="p" key={breakpoint}>
            {`${breakpoint.charAt(0).toUpperCase()}${breakpoint.slice(1)}`} gap
            size: <code>{getGapSizeTitle(selectValue)}</code>
            <br />
          </Title>
        ))}
        <Columns
          {...Object.entries(gapSizes)
            .map(([breakpoint, selectValue]) => ({
              [breakpoint]: { gapSize: getGapSizeValue(selectValue) },
            }))
            .reduce((acc, cv) => ({ ...acc, ...cv }), {})}
        >
          {[1, 2, 3, 4, 5, 6].map(key => (
            <ColumnNotification children={key} color="primary" key={key} />
          ))}
        </Columns>
      </Box>
    );
  });