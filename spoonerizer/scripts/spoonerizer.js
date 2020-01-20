
//if a vowel + 1 ltr consonant combo of words, take the consonant off and place it on the vowel word. CHECK
//if a vowel + 2 ltr consonant combo, take the 2 letter consonant off and place it on the vowel word CHECK
//if a vowel + vowel combo, swap vowels CHECK
//if a 2 letter consonant + 1 letter consonant, swap consonants using both letters from one and one letter from the other CHECK
//if a 2 letter consonant + 2 letter consonant, swap consonants using both letters from both CHECK
//if both 1 letter consonants, swap consonants CHECK

const form = document.getElementById('form1')


const output = document.getElementById('output');


let twoLetterConsonants = ['ce','ph', 'ch', 'th', 'wh', 'sh', 'sp', 'fl', 'gr', 'ou']

let vowels = ['a', 'e', 'i', 'o', 'u']


function spoonerize (string1, string2) {
    let phonemeReplace1;
    let phonemeReplace2;

    let lowerCase1 = string1.toLowerCase();

    let lowerCase2 = string2.toLowerCase();

    //checks if 1st phoneme is 2-letter consonant and sets replacement value
    for (i = 0; i < twoLetterConsonants.length; i++) {
        if (lowerCase1.startsWith(twoLetterConsonants[i])) {
            phonemeReplace1 = twoLetterConsonants[i];
        }
    }

    for (i = 0; i < twoLetterConsonants.length; i++) {
        if (lowerCase2.startsWith(twoLetterConsonants[i])) {
            phonemeReplace2 = twoLetterConsonants[i];
        }
    }

    //checks if 1st phoneme is vowel and sets replacement value
    for (i = 0; i < vowels.length; i++) {
        if (lowerCase1.startsWith(vowels[i])) {
            phonemeReplace1 = vowels[i];
        }
    }

    for (i = 0; i < vowels.length; i++) {
        if (lowerCase2.startsWith(vowels[i])) {
            phonemeReplace2 = vowels[i];
        }
    }

    //checks if 1st phoneme is NOT a 2 letter or vowel
    if (!phonemeReplace1) {
        phonemeReplace1 = lowerCase1[0]
    }

    if (!phonemeReplace2) {
        phonemeReplace2 = lowerCase2[0]
    }

    //checks if one word is a vowel and one is not
    
    if ((vowels.includes(phonemeReplace1) && !vowels.includes(phonemeReplace2))) {
        phonemeReplace1 = '';
    }

    if ((vowels.includes(phonemeReplace2) && !vowels.includes(phonemeReplace1))) {
        phonemeReplace2 = '';
    }

    

    let newString1 = lowerCase1.replace(phonemeReplace1, phonemeReplace2);
    let newString2 = lowerCase2.replace(phonemeReplace2, phonemeReplace1);
    return newString1 + ' ' + newString2
}



form.onsubmit = function (e) {
    e.preventDefault();
    console.log(spoonerize(form.word1.value, form.word2.value));
    output.innerHTML = spoonerize(form.word1.value, form.word2.value);
}