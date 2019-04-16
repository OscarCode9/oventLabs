
const translate = require('@k3rn31p4nic/google-translate-api');

async function translateF(req, res, next){
    const textToTranslate = req.body.textToTranslate;
   let translateObject = {}
   let textArray = []
   const code = req.body.code
   const prevCode = req.body.prevCode;

    for (const key in textToTranslate) {
        if (textToTranslate.hasOwnProperty(key)) {
            const element = textToTranslate[key];
            textArray = textArray.concat(element);
        }
    }

    const resX = await translate(textArray.join(','), { from: prevCode, to: code })
    let newTextArray = resX.text.split(',');
    let newTextArrayNum = 0;

    for (const key in textToTranslate) {
        if (textToTranslate.hasOwnProperty(key)) {
            translateObject = {
                ...translateObject,
                [key]: newTextArray[newTextArrayNum]
            }
            newTextArrayNum++;
        }
    }

    res.send({
        newLneguaje: translateObject
    })
}
module.exports = translateF;