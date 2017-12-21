
function get(url)
{
    return new Promise(function(resolve,reject)
    {
        var req=new XMLHttpRequest();
        /**
         @param {string} method
         @param {string} url
         @param {boolean} [async]
         @param {string} [user]
         @param {string} [password]
         */
        req.open('GET',url);
        req.onload=function(){
            if(req.status == 200)
            {
                resolve(req.response);
            }
            else
            {
                reject(Error(req.statusText))
            }
        };

        req.onerror = function(){
          reject(Error("Network Error"))
        };

        return req.send();
    });
}

get("room.json").then(function(response) {
    console.log("Success!");
},function (error) {
    console.error("Failed!",error);
});

var promise = new Promise(function (resolve,reject) {
    resolve(1);
});
promise.then(function(val) {
    console.log(val);
    return val+2;
}).then(function(val)
{
    console.log(val);
});

function getJSON(url)
{
    return get(url).then(JSON.parse).catch(function(error){console.log("getJSON fail for ",url,error)});
}

getJSON("room.json").then(function(roomdata)
{
    if(roomdata) {
        console.log(roomdata.length);
        console.log(JSON.stringify(roomdata[0]));
    }
}).then(undefined,function(error){
    console.error("Failed!",error);
}).catch(function(error)
{
    console.error("Catch Error!",error);
});

