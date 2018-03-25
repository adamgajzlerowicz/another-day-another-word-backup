const word = 'react';

const replaceText = (text, synonims)=>{
    return text;
}
const getChildNodes = (node, synonims)=>{
    if (node.hasChildNodes()) {
        const children = node.childNodes;

        for (let i = 0; i < children.length; i++) {
            getChildNodes(children[i])
        }
    } else {
        if(node.textContent){
            node.textContent = replaceText(node.textContent, synonims)
        }
    }
}

fetch('https://words.bighugelabs.com/api/2/2907f195ac339d6cc7021a2280796049/'+ word +'/json')
    .then(r=>r.json())
    .then(synonims=>{
        const verbs = synonims.verb ? synonims.verb.syn : [];
        const nouns = synonims.noun ? synonims.noun.syn : [];
        const allWords = verbs.concat(nouns);
        getChildNodes(document, synonims)
    });
