function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function returnRandomTemplate() {
    return templates[Math.floor(Math.random() * templates.length)];
}

function returnRandomCod() {
    return cods[Math.floor(Math.random() * cods.length)];
}

function returnRandomVerb() {
    return verbs[Math.floor(Math.random() * verbs.length)];
}

function generateQuote() {

    let template = returnRandomTemplate();
    console.log(template);

    // COD
    while (template.includes(":cod")) {

        let newCod = returnRandomCod();

        if (template.includes(":cod_det")) {
            template = template.replace(":cod_det", `${newCod.det_sing}${newCod.mot_sing}`);
        } else {
            template = template.replace(":cod", newCod.mot_sing);
        }

        console.log('COD utilisé: ', newCod.mot_sing);
    }

    // VERBS
    while (template.includes(":verb")) {

        let newVerb = returnRandomVerb();

        if (template.includes(":verb_present_il_elle")) {
            template = template.replace(":verb_present_il_elle", newVerb.conjugaisons.present.il_elle);
        } else if (template.includes(":verb_det")) {
            template = template.replace(":verb_det", `${newVerb.det}${newVerb.infinitif}`);
        } else {
            template = template.replace(":verb", newVerb.infinitif);
        }

        console.log('Verbe utilisé: ', newVerb.infinitif);
    }

    return `${ucFirst(template)}.`;
}