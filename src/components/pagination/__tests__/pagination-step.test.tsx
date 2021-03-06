import React from "react";

import {
  PAGINATION_STEP_DEFAULTS,
  PaginationStep,
  PaginationStepProps,
} from "src/components/pagination/pagination-step";

import {
  hasProperties,
  makeGenericHOCShallowWrapperInContextConsumer,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
  validateStringOrNumberPropType,
} from "src/__tests__/testing";

const COMPONENT = PaginationStep;
const DISPLAY_NAME = "Pagination.Step";
const DEFAULT_ELEMENT = "a";
// const BULMA_CLASS_NAME = "pagination-";

const makeNode = (props: Partial<PaginationStepProps>) => {
  const propsWithDefaults = {
    align: "next" as PaginationStepProps["align"],
    ...props,
  };

  return <PaginationStep {...propsWithDefaults} />;
};

describe(`${DISPLAY_NAME} component`, () => {
  hasProperties(COMPONENT, {
    defaultProps: { as: DEFAULT_ELEMENT },
  });

  testForwardRefAsExoticComponentIntegration(COMPONENT, {
    displayName: DISPLAY_NAME,
    bulmaClassName: "pagination-next",
    defaultElement: DEFAULT_ELEMENT,
    makeNode,
  });

  testThemeIntegration(COMPONENT, { makeNode });

  describe("props", () => {
    const { propTypes } = COMPONENT;

    describe("align", () => {
      validateStringOrNumberPropType(propTypes, "align");

      PAGINATION_STEP_DEFAULTS.alignments.map(align => {
        it(`should be ${align}`, () => {
          const node = makeNode({ align });
          const wrapper = makeGenericHOCShallowWrapperInContextConsumer(node);
          expect(wrapper.hasClass(`pagination-${align}`)).toBe(true);
        });
      });
    });
  });
});
