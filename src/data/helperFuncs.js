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