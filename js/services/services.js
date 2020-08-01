const postData = async (url, data) => {

    const resultPost = await fetch(url, {

        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await resultPost.json();  
};

async function getResource(url) {
    const resultGet = await fetch(url);

    if (!resultGet.ok) {
        throw new Error(`Couldn't feth ${url}, status: ${resultGet.status}`);
    } else {
        return await resultGet.json();
    }
}

export {postData};
export {getResource};