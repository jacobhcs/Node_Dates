const formatDate = require("./utils/formatDate")

const date1 = formatDate.newDate("2007-04-21T09:40:26+0000");
console.log(date1);

const date2 = formatDate.agoDate("2003-11-21T09:40:26+0000");
console.log(date2);

const date3 = formatDate.newDate2("2011-11-01T09:40:26+0000");
console.log(date3);

const date4 = formatDate.newDate3("2023-11-20T09:40:26+0000");
console.log(date4);

const date5 = formatDate.newDate("2017-08-14T18:25:40+0000");
console.log(date5);

const date6 = formatDate.agoDate("2018-12-12T18:25:40+0000");
console.log(date6);

const date7 = formatDate.newDate2("2017-11-19T18:25:40+0000");
console.log(date7);

const date8 = formatDate.newDate3("2013-06-14T18:25:40+0000");
console.log(date8);