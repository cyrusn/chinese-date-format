# Chinese Date Formatter

## How to Use
``` js
const Formatter = require('chinese-date-formatter');

const today = new Formatter();
console.log(today.full);
// 二零一六年二月十三日
console.log(today.simple);
// 二月十三日
console.log(today.year);
// 二零一六年
console.log(today.month);
// 二月
console.log(today.day);
// 十三日
console.log(today.dayOfWeek);
// 星期六

const someDay = new Formatter(new Date('2014-10-15'));
console.log(someDay.full);
// 二零一四年十月十五日
console.log(someDay.simple);
// 十月十五日
console.log(someDay.year);
// 二零一四年
console.log(someDay.month);
// 十月
console.log(someDay.day);
// 十五日
console.log(someDay.dayOfWeek);
// 星期三

```
