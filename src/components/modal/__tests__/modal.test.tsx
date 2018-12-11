import Enzyme from "enzyme";
import React from "react";

import { Modal } from "../modal";
import { ModalBackground } from "../modal-background";
import { ModalCard } from "../modal-card";
import { ModalClose } from "../modal-close";
import { ModalContent } from "../modal-content";
import { ModalPortal } from "../modal-portal";

import { getWindow, hasProperties } from "@/__tests__/helpers";

describe("Modal component", () => {
  hasProperties(Modal, {
    Background: ModalBackground,
    Card: ModalCard,
    Close: ModalClose,
    Content: ModalContent,
    defaultProps: undefined,
  });

  it("should render as the default element", () => {
    const wrapper = Enzyme.mount(<Modal onClose={jest.fn()} />);
    try {
      const window = getWindow();
      expect(
        window.document.getElementsByClassName("modal-controller").length,
      ).toBe(1);
      expect(wrapper.find(ModalPortal)).toHaveLength(0);
    } finally {
      wrapper.unmount();
    }
  });

  it("should forward ref", () => {
    const ref = React.createRef<HTMLDivElement>();
    // Enzyme owns outer ref: https://github.com/airbnb/enzyme/issues/1852
    const wrapper = Enzyme.mount(
      <div>
        <Modal active ref={ref} onClose={jest.fn()} />
      </div>,
    );
    try {
      expect(ref.current).toBe(wrapper.find(".modal").instance());
    } finally {
      wrapper.unmount();
    }
  });

  it("should have bulma className", () => {
    const wrapper = Enzyme.mount(<Modal active onClose={jest.fn()} />);
    try {
      expect(
        wrapper
          .find(ModalPortal)
          .children()
          .hasClass("modal"),
      ).toBe(true);
    } finally {
      wrapper.unmount();
    }
  });

  it("should preserve custom className", () => {
    const className = "foo";
    const wrapper = Enzyme.mount(
      <Modal active onClose={jest.fn()} className={className} />,
    );
    try {
      expect(wrapper.find(ModalPortal).hasClass(className)).toBe(true);
    } finally {
      wrapper.unmount();
    }
  });

  it("should render as active", () => {
    const wrapper = Enzyme.mount(<Modal active onClose={jest.fn()} />);
    try {
      expect(wrapper.find(ModalPortal)).toHaveLength(1);
    } finally {
      wrapper.unmount();
    }
  });

  it("should passthrough props", () => {
    const props = {
      children: <div id="foo">bar</div>,
      onClose: jest.fn(),
    };

    const wrapper = Enzyme.mount(<Modal active {...props} />);
    try {
      const modalPortal = wrapper.find(ModalPortal);

      // children
      const modal = modalPortal.children();
      expect(modal.children().equals(props.children)).toBe(true);

      // onClose
      modalPortal.props().onClose();
      expect(props.onClose.mock.calls.length).toBe(1);
    } finally {
      wrapper.unmount();
    }
  });
});
