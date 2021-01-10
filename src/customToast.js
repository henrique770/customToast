import { toast as custom } from 'react-toastify';

const toast = {
  success(msg, options = {}) {
    return custom.success(msg, {
      ...options,
      className: 'toast-success-container toast-container',
    });
  },
  error(msg, options = {}) {
    return custom.error(msg, {
      ...options,
      className: 'toast-error-container toast-container',
    });
  },
};

export default toast;
