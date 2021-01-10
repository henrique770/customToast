import { toast as custom } from 'react-toastify';
import { AiOutlineCheck } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';

const toast = {
  success(msg, options = {}) {
    return custom.success(
      <>
        <AiOutlineCheck /> {msg}
      </>,
      {
        ...options,
        className: 'toast-success-container toast-container',
      }
    );
  },
  error(msg, options = {}) {
    return custom.error(
      <>
        <VscError /> {msg}
      </>,
      {
        ...options,
        className: 'toast-error-container toast-container',
      }
    );
  },
};

export default toast;
