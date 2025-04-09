import { JSX } from 'react';
import { ToastContainer } from 'react-toastify';
import styles from './toast.module.scss';

const Toast = (): JSX.Element => (<ToastContainer
  className={styles.bToast}
  position='bottom-left'
  autoClose={4000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  stacked
  draggable={false}/>); 

export default Toast;
