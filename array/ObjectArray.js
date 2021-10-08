class message{
    constructor(messageid,weixinid,message) {
        this.messageid = messageid;
        this.weixinid = weixinid;
        this.message = message;
    }

    getKey(){
        return this.messageid+"_"+this.message;
    }

};

let array1=[new message(1,1,"1"),new message(2,2,"1"),new message(3,3,"1"),new message(4,4,"1")];
let array2=[new message(1,1,"12222"),new message(2,2,"1"),new message(5,5,"1"),new message(6,6,"1")];
let uniqueArr = [... new Set(array1.concat(array2).map(data => data.getKey()))]
console.log(JSON.stringify(uniqueArr));

function unionArray(array1,array2){
    let union =[];
    let unionMessageId =[];
    for(a of array1.concat(array2)){
        if(unionMessageId.indexOf(a.messageid) > -1){
            continue;
        }
        union.push(a);
        unionMessageId.push(a.messageid);
    }
    return union;
}
let union =  unionArray(array1,array2);

console.log(JSON.stringify(union));

const obj16 = {foo:'bar',baz:42};
const map = new Map(Object.entries(obj16));
console.log(map);
const set = new Set(Object.entries(array1.concat(array2)));
console.log(set);