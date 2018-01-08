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

log('1'.padStart(10,'0'));
log('12'.padStart(10,'0'));
log('123456'.padStart(10,'0'));

log('12'.padStart(10,'YYYY-MM-DD'));
log('09-12'.padStart(10,'YYYY-MM-DD'));

log(`In JavaScript '\n' is a line-feed.`);
log(`In JavaScript this 
is not legal.`);
log(`string text line 1
string text line 2`);
let name1 = "Bob",time = "today";
log(`Hello ${name1},how are you ${time}?`);
let greeting = `\`Yo\` World!`;
log(greeting);
log(`
<ul>
    <li>first</li>
    <li>second</li>
</ul>`);
log(`
<ul>
    <li>first</li>
    <li>second</li>
</ul>`.trim());

let x11 =1;
let y11 =2;
log(`${x11} + ${y11} = ${x11+y11}`);
log(`${x11} + ${y11*2} = ${x11+y11*2}`);
let obj11 = {x:11,y:22};
log(`${obj11.x+obj11.y}`);

function fnstr()
{
    return "SomeThingToShow";
}
log(`this is from function ${fnstr()}`);

const tmpl= addrs => `
    <table>
    ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;
const tmpldata = [
    { first:'<Jane>',last:'Bond'},
    { first:'Lars',last:'<Croft>'}
];
log(tmpl(tmpldata));

//alert `123`;
//alert('123');

let a12 =5,b12=10;
//log(tag`Hello ${a12+b12} world ${a*b}`);
function SaferHTML(templateData) {
    let s=templateData[0];
    for (let i=1;i<arguments.length;i++){
        let arg = String(arguments[i]);
        s+= arg.replace(/&/g,"amp;")
            .replace(/</g,"&lt;")
            .replace(/>/g,"&gt;");
        s+= templateData[i];
    }
    return s;
}
let sender ="<script>alert('abc');</script>"
let message = SaferHTML`<p>${sender} has send you a message.</p>p>`;
log(message);

log(String.raw`Hi\n${2+3}!`);
log(String.raw`Hi\u000A!`);
log(String.raw({raw:'test'},0,1,2));
log(String.raw({raw:['t','e','s','t']},0,1,2));