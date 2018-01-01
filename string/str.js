function log(str)
{
    console.log(str);
}
var str1="\u0061";//a
log(str1);

var str2="\uD842\uDFB7";
log(str2);

var str3="\u20BB7";
log(str3);

var str4="\u{20BB7}";
log(str4);

log("\u{41}\u{42}\u{43}");

let hello = 123;

log(hell\u{6F});

var s="𠮷";

log(s.length+" "+s.charAt(0)+" "+s.charAt(1)+" "+s.charCodeAt(0)+" "+s.charCodeAt(1)+" "+s.codePointAt(0));

let s1="𠮷0";

for(let ch of s1)
{
    log(ch.codePointAt(0).toString(16));
}

function is32Bit(c)
{
    return c.codePointAt(0) > 0xFFFF;
}

log(is32Bit("𠮷"));
log(is32Bit("0"));

log(String.fromCodePoint(0x20BB7));
log(String.fromCodePoint(0x78,0x1f680,0x79)) === 'x\uD83D\uDE80y';

for(let codePoint of 'xyzopq123')
{
    log(codePoint);
}

let text = String.fromCodePoint(0x20BB7);

for (let i=0;i<text.length;i++)
{
    log(text[i]);
}

for (let i of text)
{
    log(i);
}

log('\u01D1'.normalize() === '\u004F\u030C'.normalize());

log('\u004F\u030c'.normalize('NFC').length);//1
log('\u004F\u030c'.normalize('NFD').length);//2

let s11 = 'Hello world!';

log(s11.startsWith('Hello'));
log(s11.endsWith('!'));
log(s11.includes('o'));
log(s11.startsWith('world',6));
log(s11.endsWith('Hello',5));
log(s11.includes('Hello',6));


log('x'.repeat(3));
log('hello'.repeat(2));
log('na'.repeat(0));
log('na'.repeat(-0.9));

log('x'.padStart(5,'ab'));
log('x'.padStart(4,'ab'));

log('xxx'.padStart(2,'ab'));