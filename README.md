# Chinese Date Format

## How to Use
``` js
const Formatter = require('chinese-date-format');

const today = new Formatter();
console.log(today.fullDate());
console.log(today.simpleDate());
console.log(today.dayOfWeek());
// 二零一六年二月十三日
// 二月十三日
// 星期六

const someDay = new Formatter(new Date('2014-10-15'));
console.log(someDay.fullDate());
console.log(someDay.simpleDate());
console.log(someDay.dayOfWeek());
// 二零一四年十月十五日
// 十月十五日
// 星期三
```
