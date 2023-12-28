function returnRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function returnRandomCods() {
    return cods[Math.floor(Math.random() * cods.length)];
}

function returnRandomVerbs() {
    return verbs[Math.floor(Math.random() * verbs.length)];
}

function generateQuote() {
    let sentence = returnRandomSentence();
    const cod = returnRandomCods();
    const verb = returnRandomVerbs();

    // console.log('Corps de la phrase: ', sentence);
    // console.log('COD: ', cod);
    // console.log('Verbe: ', verb);

    sentence = sentence.replace(":cod", cod);
    sentence = sentence.replace(":verb", verb);

    return sentence;
}