import classNames from "classnames";
import Enzyme from "enzyme";
import React from "react";

import {
  CompatibleWithForwardsProps,
  CompositeProps,
  forwardRefAs,
  ForwardRefAsExoticComponent,
  HasIntersectingNonOptionalKeys,
} from "../exotic";

/**
 * Always passes when the test is run,
 * but only compiles if `T` is a subtype of`U`.
 */
const assert = <T, U extends T>() => undefined;

type DoesExtend<Supplied, Received> = Supplied extends Received ? true : false;

describe("HasIntersectingNonOptionalKeys", () => {
  it("should be false on empty 'a', 'b' with required", () => {
    type a = {};
    type b = { a: string };
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be false on empty 'a', 'b' with optional", () => {
    type a = {};
    type b = { a?: string };
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be false on 'a' with required, empty 'b'", () => {
    type a = { a: string };
    type b = {};
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be false on 'a' with optional, empty 'b'", () => {
    type a = { a?: string };
    type b = {};
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be true when 'a' and 'b' have intersecting required", () => {
    type a = { a: string };
    type b = { a: string };
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = true;

    assert<supplied, expected>();
  });

  it("should be true when 'a' has optional, 'b' has required", () => {
    type a = { a?: string };
    type b = { a: string };
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = true;

    assert<supplied, expected>();
  });

  it("should be false when 'a' has required, 'b' has optional", () => {
    type a = { a: string };
    type b = { a?: string };
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = false;

    assert<supplied, expected>();
  });

  it("should be false when 'a', 'b' have optional", () => {
    type a = { a?: string };
    type b = { a?: string };
    type supplied = HasIntersectingNonOptionalKeys<a, b>;
    type expected = false;

    assert<supplied, expected>();
  });
});

// tslint:disable:no-reserved-keywords
describe("CompositeProps", () => {
  describe("disjoint required props", () => {
    type a = { a: string };
    type b = { b: string; c?: string };
    type received = CompositeProps<a, React.ReactType<b>>;

    it("should allow b's required props at the root", () => {
      type supplied = { a: string; b: string };
      assert<DoesExtend<supplied, received>, true>();
    });

    it("should allow b's required props with the prop 'with'", () => {
      type supplied = { a: string; with: { b: string } };
      assert<DoesExtend<supplied, received>, true>();
    });

    it("should not allow b's required prop to be omitted", () => {
      type supplied = { a: string };
      assert<DoesExtend<supplied, received>, false>();
    });
  });

  describe("union required props", () => {
    type a = { a: string };
    type b = { a: string; b?: string };
    type received = CompositeProps<a, React.ReactType<b>>;

    it("should not allow b's required props to be omitted", () => {
      type supplied = { a: string };
      assert<DoesExtend<supplied, received>, false>();
    });

    it("should allow b's required props with the prop 'with'", () => {
      type supplied = { a: string; with: { a: string } };
      assert<DoesExtend<supplied, received>, true>();
    });
  });

  describe("disjoint, no required props", () => {
    type a = { a: string };
    type b = { b?: string; c?: string };
    type received = CompositeProps<a, React.ReactType<b>>;

    it("should allow b's props at the root", () => {
      type supplied = { a: string; b?: string };
      assert<DoesExtend<supplied, received>, true>();
    });

    it("should allow b's props with the prop 'with'", () => {
      type supplied = { a: string; with: { b?: string } };
      assert<DoesExtend<supplied, received>, true>();
    });

    it("should allow b's props to be omitted", () => {
      type supplied = { a: string };
      assert<DoesExtend<supplied, received>, true>();
    });
  });

  describe("union required props with `a` index signature", () => {
    type a = { [K: string]: any; a: string }; // tslint:disable-line:no-any
    type b = { a: string; b?: string };
    type received = CompositeProps<a, React.ReactType<b>>;

    it("should not allow b's required props to be omitted", () => {
      type supplied = { a: string };
      assert<DoesExtend<supplied, received>, false>();
    });

    it("should allow b's required props with the prop 'with'", () => {
      type supplied = { a: string; with: { a: string } };
      assert<DoesExtend<supplied, received>, true>();
    });
  });

  describe("disjoint required props with `a` index signature", () => {
    type a = { [K: string]: any; a: string }; // tslint:disable-line:no-any
    type b = { b: string };
    type received = CompositeProps<a, React.ReactType<b>>;

    it("should not allow b's required props to be omitted", () => {
      type supplied = { a: string };
      assert<DoesExtend<supplied, received>, false>();
    });

    it("should not allow b's required props at the root", () => {
      type supplied = { a: string; b: string };
      assert<DoesExtend<supplied, received>, false>();
    });

    it("should allow b's required props with the prop 'with'", () => {
      type supplied = { a: string; with: { b: string } };
      assert<DoesExtend<supplied, received>, true>();
    });
  });

  describe("union required props with `b` index signature", () => {
    type a = { a: string };
    type b = { [K: string]: any; a: string }; // tslint:disable-line:no-any
    type received = CompositeProps<a, React.ReactType<b>>;

    it("should not allow b's required props to be omitted", () => {
      type supplied = { a: string };
      assert<DoesExtend<supplied, received>, false>();
    });

    it("should allow b's required props with the prop 'with'", () => {
      type supplied = { a: string; with: { a: string } };
      assert<DoesExtend<supplied, received>, true>();
    });
  });
});

describe("CompatibleWithForwardsProps", () => {
  it("should allow pforwards, preceives equal with required key", () => {
    type pforwards = { a: string };
    type preceives = pforwards;
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = true;
    assert<result, expected>();
  });

  it("should allow pforwards, preceives equal with optional key", () => {
    type pforwards = { a?: string };
    type preceives = pforwards;
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = true;
    assert<result, expected>();
  });

  it("should allow pforwards with required key, preceives with optional key", () => {
    type pforwards = { a: string };
    type preceives = { a?: string };
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = true;
    assert<result, expected>();
  });

  it("should not allow pforwards with optional key, preceives with required key", () => {
    type pforwards = { a?: string };
    type preceives = { a: string };
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = false;
    assert<result, expected>();
  });

  it("should allow empty pforwards, non-empty preceives", () => {
    type pforwards = {};
    type preceives = { a: string };
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = true;
    assert<result, expected>();
  });

  it("should allow empty pforwards and empty preceives", () => {
    type pforwards = {};
    type preceives = {};
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = true;
    assert<result, expected>();
  });

  it("should not allow pforwards with required key and empty preceives", () => {
    type pforwards = { a: string };
    type preceives = {};
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = false;
    assert<result, expected>();
  });

  it("should not allow pforwards with optional key and empty preceives", () => {
    type pforwards = { a?: string };
    type preceives = {};
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = false;
    assert<result, expected>();
  });

  it("should allow pforwards to be a subset of preceives", () => {
    type pforwards = { a: string };
    type preceives = { a: string; b: string };
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = true;
    assert<result, expected>();
  });

  it("should not allow pforwards to be a superset of preceives", () => {
    type pforwards = { a: string; b: string };
    type preceives = { a: string };
    type result = CompatibleWithForwardsProps<pforwards, preceives>;
    type expected = false;
    assert<result, expected>();
  });
});

describe("ForwardRefAsExoticComponent Props", () => {
  type ownProps = { a: number };
  type defaultComponentProps = { b: string; className?: string };
  type defaultComponent = React.FC<defaultComponentProps>;
  type forwards = { className: string };
  type received = ForwardRefAsExoticComponent<
    defaultComponent,
    ownProps,
    forwards
  >;
  type props = React.ComponentProps<received>;

  describe("without composition (no 'as' prop)", () => {
    it("should assume TDefaultComponent's props", () => {
      type supplied = { a: number; b: string };
      assert<DoesExtend<supplied, props>, true>();
    });

    it("should allow defaultComponent's required props in prop 'with'", () => {
      type supplied = { a: number; with: { b: string } };
      assert<DoesExtend<supplied, props>, true>();
    });

    it("should allow the proper Ref type", () => {
      type supplied = {
        a: number;
        b: string;
        ref: React.Ref<defaultComponent>;
      };
      assert<DoesExtend<supplied, props>, true>();
    });
  });

  describe("with composition ('as' prop)", () => {
    type asComponentProps = { c: string };
    type asComponent = React.FC<asComponentProps>;

    it("should assume TAsComponents's props", () => {
      type supplied = { as: asComponent; a: number; c: string };
      assert<DoesExtend<supplied, props>, true>();
    });

    it("should allow a `with` prop with defaultComponent's required props", () => {
      type supplied = { a: number; with: { c: string } };
      assert<DoesExtend<supplied, props>, true>();
    });

    it("should allow the proper Ref type", () => {
      type supplied = {
        as: asComponent;
        a: number;
        c: string;
        ref: React.Ref<asComponent>;
      };
      assert<DoesExtend<supplied, props>, true>();
    });
  });
});

describe("forwardRefAs", () => {
  type GrandparentOwnProps = { a: "g-a"; b: number; className?: string };
  type GrandparentForwardsProps = { className: string };
  const Grandparent = forwardRefAs<
    "div",
    GrandparentOwnProps,
    GrandparentForwardsProps
  >(
    ({ as, a, b, className, with: withProps, ...rest }, ref) => {
      return React.createElement(as, {
        className: classNames(
          {
            [`G-A-${a}`]: a,
            [`G-B-${b}`]: b,
          },
          className,
        ),
        ref,
        ...rest,
        ...withProps,
      });
    },
    { as: "div" },
  );
  Grandparent.displayName = "Grandparent";

  describe("Grandparent", () => {
    it("should receive required props", () => {
      const node = <Grandparent a="g-a" b={2} />;
      const wrapper = Enzyme.shallow(node);
      expect(wrapper.hasClass("G-A-g-a")).toBe(true);
      expect(wrapper.hasClass("G-B-2")).toBe(true);
    });
  });

  type ParentOwnProps = { a: "p-a"; c: number; className?: string };
  type ParentForwardsProps = { className: string };
  const Parent = forwardRefAs<"span", ParentOwnProps, ParentForwardsProps>(
    ({ as, a, c, className, with: withProps, ...rest }, ref) => {
      return React.createElement(as, {
        className: classNames(
          {
            [`P-A-${a}`]: a,
            [`P-C-${c}`]: c,
          },
          className,
        ),
        ref,
        ...rest,
        ...withProps,
      });
    },
    { as: "span" },
  );
  Parent.displayName = "Parent";

  describe("Parent", () => {
    it("should receive required props", () => {
      const node = <Parent a="p-a" c={3} />;
      const wrapper = Enzyme.shallow(node);
      expect(wrapper.hasClass("P-A-p-a")).toBe(true);
      expect(wrapper.hasClass("P-C-3")).toBe(true);
    });
  });

  type ChildOwnProps = { a: "c-a"; d: number; className?: string };
  type ChildForwardsProps = { className: string };
  const Child = forwardRefAs<"p", ChildOwnProps, ChildForwardsProps>(
    ({ as, a, d, className, with: withProps, ...rest }, ref) => {
      return React.createElement(as, {
        className: classNames(
          {
            [`C-A-${a}`]: a,
            [`C-D-${d}`]: d,
          },
          className,
        ),
        ref,
        ...rest,
        ...withProps,
      });
    },
    { as: "p" },
  );
  Child.displayName = "Child";

  describe("Child", () => {
    it("should receive required props", () => {
      const node = <Child a="c-a" d={4} />;
      const wrapper = Enzyme.shallow(node);
      expect(wrapper.hasClass("C-A-c-a")).toBe(true);
      expect(wrapper.hasClass("C-D-4")).toBe(true);
    });
  });

  describe("Composition with intersecting required props", () => {
    type MyComponentProps = { a: "mc-a"; b: number; className?: string };
    const MyComponent: React.FC<MyComponentProps> = ({ a, b, className }) => (
      <div
        className={classNames(
          {
            [`MC-A-${a}`]: a,
            [`MC-B-${b}`]: b,
          },
          className,
        )}
      />
    );

    it("should render a component through the 'as' prop with 'with' props", () => {
      const node = (
        <Child as={MyComponent} a="c-a" d={3} with={{ a: "mc-a", b: 2 }} />
      );
      const rootWrapper = Enzyme.shallow(node);
      const nestedWrapper = rootWrapper.dive();
      expect(nestedWrapper.hasClass("C-A-c-a")).toBe(true);
      expect(nestedWrapper.hasClass("C-D-3")).toBe(true);
      expect(nestedWrapper.hasClass("MC-A-mc-a")).toBe(true);
      expect(nestedWrapper.hasClass("MC-B-2")).toBe(true);
    });
  });

  describe("Composition without required props collision", () => {
    type MyComponentProps = { y: "mc-y"; z: number; className?: string };
    const MyComponent: React.FC<MyComponentProps> = ({ y, z, className }) => (
      <div
        className={classNames(
          {
            [`MC-Y-${y}`]: y,
            [`MC-Z-${z}`]: z,
          },
          className,
        )}
      />
    );

    it("should render a component through the 'as' prop with 'with' props", () => {
      const node = (
        <Child as={MyComponent} a="c-a" d={3} with={{ y: "mc-y", z: 26 }} />
      );
      const rootWrapper = Enzyme.shallow(node);
      const nestedWrapper = rootWrapper.dive();
      expect(nestedWrapper.hasClass("C-A-c-a")).toBe(true);
      expect(nestedWrapper.hasClass("C-D-3")).toBe(true);
      expect(nestedWrapper.hasClass("MC-Y-mc-y")).toBe(true);
      expect(nestedWrapper.hasClass("MC-Z-26")).toBe(true);
    });

    it("should render a component through the 'as' prop with root props", () => {
      const node = <Child as={MyComponent} a="c-a" d={3} y="mc-y" z={26} />;
      const rootWrapper = Enzyme.shallow(node);
      const nestedWrapper = rootWrapper.dive();
      expect(nestedWrapper.hasClass("C-A-c-a")).toBe(true);
      expect(nestedWrapper.hasClass("C-D-3")).toBe(true);
      expect(nestedWrapper.hasClass("MC-Y-mc-y")).toBe(true);
      expect(nestedWrapper.hasClass("MC-Z-26")).toBe(true);
    });
  });

  describe("Composition through another ForwardRefAsExoticComponent", () => {
    it("should render a component through the 'as' prop with 'with' props", () => {
      const node = (
        <Child as={Parent} a="c-a" d={3} with={{ a: "p-a", c: 3 }} />
      );
      const rootWrapper = Enzyme.shallow(node);
      const nestedWrapper = rootWrapper.dive();
      expect(nestedWrapper.hasClass("C-A-c-a")).toBe(true);
      expect(nestedWrapper.hasClass("C-D-3")).toBe(true);
      expect(nestedWrapper.hasClass("P-A-p-a")).toBe(true);
      expect(nestedWrapper.hasClass("P-C-3")).toBe(true);
    });
  });

  describe("Deep composition through ForwardRefAsExoticComponents", () => {
    it("should render a component through the 'as' prop with 'with' props", () => {
      const node = (
        <Child
          as={Parent}
          a="c-a"
          d={3}
          with={{
            a: "p-a",
            c: 3,
            as: Grandparent,
            with: { a: "g-a", b: 2 },
          }}
        />
      );
      const childWrapper = Enzyme.shallow(node);
      const parentWrapper = childWrapper.dive();
      const grandParentWrapper = parentWrapper.dive();
      expect(grandParentWrapper.hasClass("C-A-c-a")).toBe(true);
      expect(grandParentWrapper.hasClass("C-D-3")).toBe(true);
      expect(grandParentWrapper.hasClass("P-A-p-a")).toBe(true);
      expect(grandParentWrapper.hasClass("P-C-3")).toBe(true);
      expect(grandParentWrapper.hasClass("G-A-g-a")).toBe(true);
      expect(grandParentWrapper.hasClass("G-B-2")).toBe(true);
    });
  });
});