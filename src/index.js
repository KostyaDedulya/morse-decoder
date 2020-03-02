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
    let result = [];
    expr.split('**********').forEach(item => {
        let word = [];
        item.match(/[01]{10}/g).forEach(item => {
            let letter = [];
            item.match(/[01]{2}/g).forEach(item => {
                if (item !== '00' && item === '10') letter.push('.');
                if (item !== '00' && item === '11') letter.push('-');
            })
            word.push(MORSE_TABLE[letter.join('')]);
            letter = [];
        })
        result.push(word.join(''));
        word = [];
    })
    return result.join(' ');
}

module.exports = {
    decode
}