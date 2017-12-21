function logFetch(url) {
    return fetch(url).then(response => response.text()).then(text => {
        console.log(text);
    }).catch(err => {
        console.error('fetch failed', err);
    });
};
function onload()
{
    console.log("onload start!");
    console.log("logFetch start!");
    logFetch("onload1.html");
    console.log("logFetch end!");
    console.log("asyncLogFetch start!");
    asyncLogFetch("onload2.html");
    console.log("asyncLogFetch end!");
    hello().then(text => {
        console.log(text);
    }).catch(err => {
        console.error('fetch failed', err);
    });
    foo();
    console.log("onload end!");
}
async function asyncLogFetch(url)
{
    try
    {
        const response = await fetch(url);
        console.log(await response.text());
    }
    catch (err)
    {
        console.log('fetch failed',err);
    }
}


function wait(ms)
{
    return new Promise(r => setTimeout(r, ms));
}

async function hello()
{
    await wait(500);
    return 'world!';
}

async function foo()
{
    await wait(500);
    throw Error('bar');
}

function getResponseSize(url)
{

}