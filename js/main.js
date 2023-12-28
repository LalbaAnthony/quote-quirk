function returnRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function returnRandomCod() {
    return cods[Math.floor(Math.random() * cods.length)];
}

function returnRandomVerb() {
    return verbs[Math.floor(Math.random() * verbs.length)];
}

function generateQuote() {

    let sentence = returnRandomSentence();

    while (sentence.includes(":cod")) {
        sentence = sentence.replace(":cod", returnRandomCod());
    }
    while (sentence.includes(":verb")) {
        sentence = sentence.replace(":verb", returnRandomVerb());
    }

    return sentence;
}