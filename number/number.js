function log(str)
{
    console.log(str);
}

log(0.1+0.2===.03);

log(Math.pow(2,53));//9007199254740992
log(Math.pow(2,53) === Math.pow(2,53)+1);
log(Number.MAX_SAFE_INTEGER===Math.pow(2,53)-1);//true
log(Number.MAX_SAFE_INTEGER===Math.pow(2,53));//false
log(Number.MAX_SAFE_INTEGER+" "+Number.MIN_SAFE_INTEGER);//9007199254740991 -9007199254740991
log(Infinity);
log(-Infinity);
log(Number.isSafeInteger(Infinity));//false

log(Number.isFinite(Infinity));//false
log(Number.isFinite('a'));//false
log(Number.isNaN('a'));//false

log(Math.trunc('123.456'));
log(Math.sign(-5));
log(Math.cbrt(8));
log(Math.cbrt(64));

log(Math.imul(2,4));
log(Math.imul(-1,8));
log(Math.imul(-2,-2));

log(Math.fround(2**24-1));//16777215
log(Math.fround(2**24));//16777216
log(Math.fround(2**24+1));//16777216

log(Math.fround(1.125));
log(Math.fround(0.3));

//log(typeof 123n);
//log(Integer(124))