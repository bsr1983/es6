const p1 = new Promise(function (resolve,reject)
{
    setTimeout(()=>reject(new Error('fail')),3000);
});
const p2 = new Promise(function (resolve, reject)
{
    setTimeout(() => resolve(p1),1000);
});
// p2.then(result => console.log(result))
// .catch(error => console.log(error));

let thenable={
    then:function(resolve,reject){
        resolve(111);
    }
};

let p3=Promise.resolve(thenable);
p3.then(function(value)
{
    console.log(value);
});