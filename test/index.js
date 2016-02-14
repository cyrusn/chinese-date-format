const test = require('tape');
const Formatter = require('..');

test('construct with `string`', function (t) {
  // double digit month and day, Sunday
  const chtDate = new Formatter('2014-10-19');
  t.equal(chtDate.full, '二零一四年十月十九日', 'full equal');
  t.equal(chtDate.simple, '十月十九日', 'simple equal');
  t.equal(chtDate.year, '二零一四年', 'year equal');
  t.equal(chtDate.month, '十月', 'month equal');
  t.equal(chtDate.day, '十九日', 'day equal');
  t.equal(chtDate.dayOfWeek, '星期日', 'day of week equal');

  t.end();
});

test('construct with `Date`', function (t) {
  // single digit month and day, with Date object
  const chtDate = new Formatter(new Date('1776-7-4'));
  t.equal(chtDate.full, '一七七六年七月四日', 'full equal');
  t.equal(chtDate.month, '七月', 'month equal');
  t.equal(chtDate.day, '四日', 'day equal');
  t.equal(chtDate.dayOfWeek, '星期四', 'day of week equal');

  t.end();
});

test('construct with `undefined`', function (t) {
  new Formatter(); // eslint-disable-line
  // cannot assert on Date.now()
  t.pass('no assert on `Date.now()`');
  t.end();
});

test('months', function (t) {
  t.equal((new Formatter('2014-9-1')).month, '九月', 'single digit -> single character');
  t.equal((new Formatter('2014-10-1')).month, '十月', 'double digit -> single character');
  t.equal((new Formatter('2014-11-1')).month, '十一月', 'double digit -> double character');

  t.end();
});

test('days', function (t) {
  t.equal((new Formatter('2014-10-9')).day, '九日', 'single digit -> single character');
  t.equal((new Formatter('2014-10-19')).day, '十九日', 'double digit -> double character');
  t.equal((new Formatter('2014-10-29')).day, '二十九日', 'double digit -> triple character');
  t.equal((new Formatter('2014-10-10')).day, '十日', 'double digit -> single character');
  t.equal((new Formatter('2014-10-20')).day, '二十日', 'double digit -> double character');
  t.equal((new Formatter('2014-10-30')).day, '三十日', 'double digit -> double character');

  t.end();
});
