import * as M from "./style";
import { useState } from "react";

type ModalProp = {
  modalName?: string | JSX.Element;
  headerTitle: string;
  icon: JSX.Element;
  description: string;
  buttonActionText?: string;
  buttonCancelText?: string;
  disableButton?: boolean;
  activeModal?: boolean;
  funcActions?: {
    funcOne?: () => void;
    funcTwo?: () => void;
    funcTree?: () => void;
  };
};
export default function Modal({
  modalName,
  headerTitle,
  icon,
  description,
  buttonActionText,
  buttonCancelText,
  disableButton = false,
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
      <M.Btn onClick={showModal} isdisabled={disableButton ? true : false}>
        {modalName}
      </M.Btn>

      <M.Container isopen={open || activeModal}>
        <M.Content>
          <M.Header>
            <div>{headerTitle}</div>
            <div>{icon}</div>
          </M.Header>
          <M.Area>
            <p>{description}</p>
          </M.Area>
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
