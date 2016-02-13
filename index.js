'use strict';

const ChineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const TEN_DIGIT = '十';

function yearFormat (year) {
  const result = [];

  year.toString().split('').forEach(letter => {
    result.push(ChineseNumbers[parseInt(letter, 10)]);
  });

  result.push('年');
  return result.join('');
}

function monthFormat (month) {
  const tenDigit = Math.floor((month + 1) / 10);
  const firstDigit = (month + 1) % 10;

  return (tenDigit > 0 ? TEN_DIGIT : '') + (firstDigit !== 0 ? ChineseNumbers[firstDigit] : '') + '月';
}

function dayFormat (day) {
  const tenDigit = Math.floor(day / 10);
  const firstDigit = day % 10;
  const result = [];

  if (tenDigit > 0) {
    result.push((tenDigit > 1 ? ChineseNumbers[tenDigit] : '') + TEN_DIGIT);
  }

  if (firstDigit !== 0) {
    result.push(ChineseNumbers[firstDigit]);
  }

  return result.join('') + '日';
}

function dayOfWeekFormat (dayOfWeek) {
  if (dayOfWeek === 0) {
    return '星期日';
  }
  return '星期' + ChineseNumbers[dayOfWeek];
}

class DateFormatter {
  constructor (date) {
    this.date = date || new Date();
  }

  get full () {
    return yearFormat(this.date.getFullYear()) + monthFormat(this.date.getMonth()) + dayFormat(this.date.getDate());
  }

  get simple () {
    return monthFormat(this.date.getMonth()) + dayFormat(this.date.getDate());
  }

  get year () {
    return yearFormat(this.date.getFullYear());
  }

  get month () {
    return monthFormat(this.date.getMonth());
  }

  get day () {
    return dayFormat(this.date.getDate());
  }

  get dayOfWeek () {
    return dayOfWeekFormat(this.date.getDay());
  }
}

module.exports = DateFormatter;
