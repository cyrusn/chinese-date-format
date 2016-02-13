# Chinese Date Formatter

## Installation

``` bash
npm install chinese-date-formatter
```

## Examples
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

// accept date string
const someday = new Formatter('2014-10-15');
console.log(someday.full);
// 二零一四年十月十五日

// accept date object
const tomorrow = new Date('2014-10-16');
const otherday = new Formatter(tomorrow);
console.log(otherday.full);
// 二零一四年十月十六日
```
