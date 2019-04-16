async function loadText(lenguage, code, prevCode, dispatch) {
    const url = 'http://localhost:3005/api/transtalteService';
    try {
        const result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "textToTranslate": lenguage,
                "code": code,
                "prevCode": prevCode
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        });
        console.log(result)
        const textResult = await result.json();
        dispatch({
            type: 'changeLenguage',
            lenguage: textResult.newLneguaje,
            prevCode: code
        })
    } catch (error) {
        console.log(error)
    }
}
export {
    loadText
}