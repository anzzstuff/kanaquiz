import { kanaDictionary } from './kanaDictionary';

export function arrayContains(needle, haystack) {
    return (haystack.indexOf(needle) > -1) ? true : false;
}

export function removeFromArray(needle, haystack) {
    if(typeof needle === 'object')
        needle = needle[0];

    if(arrayContains(needle, haystack)) {
        haystack.splice(haystack.indexOf(needle), 1);
    }
    return haystack;
}

export function findRomajisAtKanaKey(needle) {
    let romaji = [];
    Object.keys(kanaDictionary).map(function(whichKana) {
    // console.log(whichKana); // 'hiragana' or 'katakana'
        Object.keys(kanaDictionary[whichKana]).map(function(groupName) {
            // console.log(groupName); // 'h_group1', ...
            // return kanaDictionary[whichKana][groupName]['characters'][this.props.answer];
            Object.keys(kanaDictionary[whichKana][groupName]['characters']).map(function(key) {
                if(key==needle) {
                    // console.log(kanaDictionary[whichKana][groupName]['characters'][key]);
                    romaji = kanaDictionary[whichKana][groupName]['characters'][key];
                }
            }, this);
        }, this);
    }, this);
    // console.log(romaji);
    return romaji;
}
// export function getRandomFromArray(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// export function getIndex(needle, haystack) {
//     return haystack.indexOf(needle);
// }

export function shuffle(array) {
    var i = 0
        , j = 0
        , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}