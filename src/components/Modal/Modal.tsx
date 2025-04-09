import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import { modalAtom } from 'store/store';
import { isNotEmpty } from 'utils/validation';
import styles from './modal.module.scss';
import type { JSX } from 'react';

interface ModalProps {
  children: JSX.Element;
}

const ModalWrapper = ({ children }: ModalProps): JSX.Element => {
  const { t } = useTranslation('global');
  const [modalOpenName, setModalOpenName] = useAtom(modalAtom);

  const closeModal = (): void => {
    setModalOpenName(RESET);
  };

  return (
    <Modal
      id={modalOpenName}
      className={styles.bModal}
      isOpen={isNotEmpty(modalOpenName)}
      onRequestClose={closeModal}
      contentLabel={modalOpenName}
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      shouldCloseOnEsc
      shouldReturnFocusAfterClose>
      <button className={styles.closeButton} onClick={closeModal} type='button'>
        {t('actions.close')}
      </button>
      <div className={styles.modalContent}>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
