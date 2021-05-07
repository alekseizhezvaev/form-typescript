import { useCallback, useState } from 'react';

type ModalIsOpen = boolean;
export type ModalHandler = {
  onCloseModal: VoidFunction;
  onOpenModal: VoidFunction;
  onToggleModal: VoidFunction;
};

type UseModalReturnType = [ModalIsOpen, ModalHandler];

/**
 * Usage
 * @example
    const [modalFlag, modalHandler] = useModal(false);

    <Foo
        isOpen={modalFlag}
        onClose={modalHandler.onCloseModal}
        onOpen={modalHandler.onOpenModal}
        onToggle={modalHandler.onToggleModal}
    />
  */
export function useModal(initial: boolean = false): UseModalReturnType {
  const [isOpen, setIsOpen] = useState(initial);

  return [
    isOpen,
    {
      onCloseModal: useCallback(() => setIsOpen(false), [setIsOpen]),
      onOpenModal: useCallback(() => setIsOpen(true), [setIsOpen]),
      onToggleModal: useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]),
    },
  ];
}
