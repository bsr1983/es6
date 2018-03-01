const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function(error, data) {
            if (error) return reject(error);
            resolve(data);
        });
    });
};
const asybcReadFile = async function()
{
    const r1 = await readFile('/mac/workspaceForLearn/es6/promise/promise.js');
    const r2 = await readFile('/mac/workspaceForLearn/es6/promise/promise.html');
    console.log(r1.toString());
    console.log(r2.toString());
};

//asybcReadFile();

async function af()
{
    return 'hell async function!';
}
async function ef()
{
    throw new Error('some exception!');
}
af().then(v=>console.log(v));

ef().then(v=>console.log(v),  e=>console.error(e));

