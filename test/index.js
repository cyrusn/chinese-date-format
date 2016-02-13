const test = require('tape');
const Formatter = require('..');

test('with string', function (t) {
  t.plan(6);

  // double digit month and day, Sunday
  const chtDate = new Formatter('2014-10-19');
  t.equal(chtDate.full, '二零一四年十月十九日');
  t.equal(chtDate.simple, '十月十九日');
  t.equal(chtDate.year, '二零一四年');
  t.equal(chtDate.month, '十月');
  t.equal(chtDate.day, '十九日');
  t.equal(chtDate.dayOfWeek, '星期日');
});

test('with Date', function (t) {
  t.plan(4);

  // single digit month and day, with Date object
  const chtDate = new Formatter(new Date('1776-7-4'));
  t.equal(chtDate.full, '一七七六年七月四日');
  t.equal(chtDate.month, '七月');
  t.equal(chtDate.day, '四日');
  t.equal(chtDate.dayOfWeek, '星期四');
});

test('months', function (t) {
  t.plan(3);
  t.equal((new Formatter('2014-9-1')).month, '九月');
  t.equal((new Formatter('2014-10-1')).month, '十月');
  t.equal((new Formatter('2014-11-1')).month, '十一月');
});

test('days', function (t) {
  t.plan(6);
  t.equal((new Formatter('2014-10-9')).day, '九日');
  t.equal((new Formatter('2014-10-19')).day, '十九日');
  t.equal((new Formatter('2014-10-29')).day, '二十九日');
  t.equal((new Formatter('2014-10-10')).day, '十日');
  t.equal((new Formatter('2014-10-20')).day, '二十日');
  t.equal((new Formatter('2014-10-30')).day, '三十日');
});
