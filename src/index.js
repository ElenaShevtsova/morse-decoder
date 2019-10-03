const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let result = [];
    let lengthLetter = expr.match(/.{1,10}/g);
    console.log(lengthLetter);
    for (let i = 0; i < lengthLetter.length; i++) {
        let data = lengthLetter[i].match(/.{1,2}/g);
        let value = data.filter(item => {
            return item != '00'
        })
        let arrayValue = value.map(item => {
            if (item === '10') {
                return '.';
            } else if (item === '11') {
                return '-';
            } else if (item === '**') {
                return '/';
            }
        })
        let stringValue = arrayValue.join('');
        let arrStr = [];
        arrStr.push(stringValue);
        console.log(arrStr);
        for (let key in MORSE_TABLE) {
            for (let i = 0; i < arrStr.length; i++) {
                if (arrStr[i] === key) {
                    result.push(MORSE_TABLE[key]);
                }
                if (arrStr[i] === '/////') {
                    result.push(' ');
                }
            }
        }
    }
    let res = result.join('');
    let resultValue = res.replace(/\s\s+/g, ' ');
    return resultValue;
}


module.exports = {
    decode
}