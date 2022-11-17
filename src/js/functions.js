import {
    urlCharsKeys,
    urlCharsPositions
} from "./data.js";

// find URL algorithm
export const getURL = () => {
    const url = [];

    for (let char in urlCharsKeys) {
        const charID = urlCharsKeys[char];

        const charPositionsInUrl = urlCharsPositions[charID];
        charPositionsInUrl.forEach(position => {
            url[position] = char;
        })
    }

    return url.join("");
}

// Iterate through dictionary
// const testObj = {
//     "A": "1",
//     "B": "2",
//     "C": "3",
// }

// for (let key in testObj) {
//     console.log(`Key: ${key}, Value: ${testObj[key]}`);
// }