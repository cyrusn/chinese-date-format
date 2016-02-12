'use strict';

const CONSTANT = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
const TEN_DIGIT = '十';

function yearFormat (year) {
  const result = [];

  year.toString().split('').forEach(letter => {
    result.push(CONSTANT[parseInt(letter, 10)]);
  });

  result.push('年');
  return result.join('');
}

function monthFormat (month) {
  return CONSTANT[month + 1] + '月';
}

function dayFormat (day) {
  const tenDigit = Math.floor(day / 10);
  const result = [];
  const firstDigit = day % 10;

  if (tenDigit > 0) {
    result.push((tenDigit > 1 ? CONSTANT[tenDigit] : '') + TEN_DIGIT);
  }

  if (firstDigit !== 0) {
    result.push(CONSTANT[firstDigit]);
  }

  return result.join('') + '日';
}

function dayOfWeekFormat (dayOfWeek) {
  if (dayOfWeek === 0) {
    return '星期日';
  }
  return '星期' + CONSTANT[dayOfWeek];
}

class DateFormatter {
  constructor (date) {
    this.date = date || new Date();
  }

  fullDate () {
    return yearFormat(this.date.getFullYear()) + monthFormat(this.date.getMonth()) + dayFormat(this.date.getDate());
  }

  simpleDate () {
    return monthFormat(this.date.getMonth()) + dayFormat(this.date.getDate());
  }

  dayOfWeek () {
    return dayOfWeekFormat(this.date.getDay());
  }
}

module.exports = DateFormatter;
