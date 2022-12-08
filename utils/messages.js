const moment = require('moment');

function formatMessage(username, text, userColor) {
  return {
    username,
    text,
    time: moment().format('h:mm a'),
    userColor
  };
}

module.exports = formatMessage;
