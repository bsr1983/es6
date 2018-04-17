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
    return 'hello async function!';
}
async function ef()
{
    throw new Error('some exception!');
}
af().then(v=>console.log(v));

ef().then(v=>console.log(v),  e=>console.error(e));

async function ff()
{
    await new Promise(function (resolve, reject) {
        throw new Error('some exception!');
    })
}

ff().then(value => console.log(value))
    .catch(e=>console.error(e));

async function bf()
{
    try{
        await new Promise(function (resolve, reject) {
            throw new Error("some exception!");
        })
    }catch (e)
    {
        
    }
    return await ('hello async function! ooooo');
}

bf().then(value => console.log(value))
    .catch(e=>console.error(e));

const superagent = require('superagent');
const NUM_RETRIES = 3;

async function test() {
    let i;
    for (i = 0; i < NUM_RETRIES; ++i) {
        try {
            await superagent.get('http://www.baidu.com');
            break;
        } catch(err) {
            console.log(err)
        }
    }
    console.log(i); // 3
}

test().then(value => console.log(value))
    .catch(e=>console.error(e));