import * as M from "./style";
import { useState } from "react";

type ModalProp = {
  btnText?: string;
  title: string;
  icon: JSX.Element;
  text: string;
  buttonActionText?: string;
  buttonCancelText?: string;
  isDisabled?: boolean;
  activeModal?: boolean;
  funcActions?: {
    funcOne?: () => void;
    funcTwo?: () => void;
    funcTree?: () => void;
  };
};
export default function Modal({
  btnText,
  title,
  icon,
  text,
  buttonActionText,
  buttonCancelText,
  isDisabled,
  activeModal,
  funcActions = {},
}: ModalProp) {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);

    if (funcActions && funcActions.funcOne) {
      funcActions.funcOne();
    }

    if (funcActions && funcActions.funcTwo) {
      funcActions.funcTwo();
    }

    if (funcActions && funcActions.funcTree) {
      funcActions.funcTree();
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <M.Btn onClick={showModal} disabled={isDisabled}>
        {btnText}
      </M.Btn>

      <M.Container isopen={open || activeModal}>
        <M.Content>
          <M.Header>
            <h1>{title}</h1>
            <h1>{icon}</h1>
          </M.Header>
          <M.Area>{text}</M.Area>
          {(buttonActionText || buttonCancelText) && (
            <M.Footer>
              {buttonCancelText && (
                <M.Button onClick={handleCancel}>{buttonCancelText}</M.Button>
              )}
              {buttonActionText && (
                <M.Button onClick={handleOk}>{buttonActionText}</M.Button>
              )}
            </M.Footer>
          )}
        </M.Content>
      </M.Container>
    </>
  );
}
