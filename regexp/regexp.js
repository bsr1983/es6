function log(str)
{
    console.log(str);
}
var regex1=new RegExp(/xyz/i);
log(regex1.flags);

var regex2=new RegExp(/abc/ig,'i');
log(regex2.flags);

log(/^\uD83D/u.test('\uD83D\uDC2A'));
log(/^\uD83D/.test('\uD83D\uDC2A'));

var s1='𠮷';

log(/^.$/.test(s1));
log(/^.$/u.test(s1));

log(/\u{61}/.test('a'));
log(/\u{61}/u.test('a'));
log(/\u{20BB7}/u.test('𠮷'));

log(/a{2}/.test('aa'));
log(/a{2}/u.test('aa'));
log(/𠮷{2}/.test('𠮷𠮷'));
log(/𠮷{2}/u.test('𠮷𠮷'));

log(/^\S$/.test('𠮷'));
log(/^\S$/u.test('𠮷'));

function codePointLength(text)
{
    var result = text.match(/[\s\S]/gu);
    return result?result.length:0;
}

log('aaa𠮷𠮷'.length);
log(codePointLength('aaa𠮷𠮷'));

var s2 = 'aaa_aa_a';
var r1=/a+/g;
var r2=/a+/y;

log(r1.exec(s2));//[ 'aaa', index: 0, input: 'aaa_aa_a' ]
log(r2.exec(s2));//[ 'aaa', index: 0, input: 'aaa_aa_a' ]

log(r1.exec(s2));//[ 'aa', index: 4, input: 'aaa_aa_a' ]
log(r2.exec(s2));//null

var r3=/a+_/y;
log(r3.exec(s2));//[ 'aaa_', index: 0, input: 'aaa_aa_a' ]
log(r3.exec(s2));//[ 'aa_', index: 4, input: 'aaa_aa_a' ]

log(/abc/ig.source);
log(/abc/ig.flags);

log(/foo.bar/.test('foo\nbar'));//false
log(/foo[^]bar/.test('foo\nbar'));//true

log(/foo.bar/s.test('foo\nbar'));//true

const re = /foo.bar/s;
re.test('foo\nbar');//true
log(re.dotAll);//true
log(re.flags);//s

const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
const matchDate = RE_DATE.exec('1999-12-31');
log(matchDate[1]+" "+matchDate[2]+" "+matchDate[3]);//1999 12 31

// const RE_DATE1 =/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// const matchDate1 =RE_DATE1.exec("2018-01-06");
// log(matchDate1.groups.year);

