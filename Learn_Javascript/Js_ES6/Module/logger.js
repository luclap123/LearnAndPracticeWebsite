export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';

function logger(message, type = TYPE_LOG) {
  console[type](message);
}

export default logger;
