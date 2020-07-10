export function generateThreeEqual(verbs) {
    return verbs.filter(filterThreeEqual);
};

export function generateSPAndPPEqual(verbs) {
    return verbs.filter(filterSPAndPPEqual);
};


function filterThreeEqual(verb) {
    return verb.infinitive === verb.simplePast && verb.infinitive === verb.pastParticiple
    && verb.simplePast === verb.pastParticiple;
}

function filterSPAndPPEqual(verb) {
    if (filterThreeEqual(verb)) {
        return false;
    }

    return verb.simplePast === verb.pastParticiple;
}

