function log(str) {
    console.log(str);
}
let a = 1;
let b = 2;
let c = 3;
log("a="+a+" b="+b+" c="+c);
let [d,e,f] = [4,5,6];
log("d="+d+" e="+e+" f="+f);
let [foo,[[bar],baz]] = [1,[[2],3]];
log("foo="+foo+" bar="+bar+" baz="+baz);
let[,,third]=["foo","bar","third"];
log("third="+third);
let[h,,g]=[7,8,9];
log("h="+h+" g="+g);
let [head,...tail] = [1,2,3,"tail"];
log("head="+head+" tail="+tail);
let [i,j,...k] = ['a'];
log("i="+i+" j="+j+" k="+k);
let [l]=[];
let [m,n] = [1];
log("m="+m+" n="+n);
let [o,p]=[1,2,3];
log("o="+o+" p="+p);
let [q,[r],s] =[1,[2,3],4];
log("q="+q+" r="+r+" s="+s);
//TypeError: 1 is not iterable
/*let [u] = 1;
let [v] = false;
let [w] = NaN;
let [x] = undefined;
let [y] = null;
let [z] = {};*/
let [x,y,z] = new Set(['a','b','c']);
log("x="+x+" y="+y+" z="+z);
function* fibs(){
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a,b]=[b,a+b];
    }
}
let [first,second,third1,fourth,fifth,sixth]=fibs();
log(sixth);

let [foo1=true]=[];
log(foo1);