const dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);

const newDate = date => dayjs(date).format("MMMM, D, YYYY, h:m:s A UTC");

const newDate2 = date => dayjs(date).format("dddd, MMMM D, YYYY");

const newDate3 = date => dayjs(date).format("MM/DD/YYYY");

const agoDate = date => dayjs(date).fromNow();

module.exports = {
  newDate,
  newDate2,
  newDate3,
  agoDate
}