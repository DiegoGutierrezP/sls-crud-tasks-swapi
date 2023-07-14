const  swFilmEs = require('../lang/starwars/film-es.json');
const  swPeopleEs = require('../lang/starwars/people-es.json');

const filmProps = (data,lang) => {
    let baseTransProps = null;
    if(lang === 'en') return data;

    if(lang === 'es') baseTransProps = swFilmEs;

    if(baseTransProps === null) return data;

    return translateProps(data,baseTransProps);
}

const peopleProps = (data,lang) => {

    let baseTransProps = null;
    if(lang === 'en') return data;

    if(lang === 'es') baseTransProps = swPeopleEs;

    if(baseTransProps === null) return data;

    return translateProps(data,baseTransProps);
}


const translateProps = (data,dataTranslate) => {
    return Object.keys(data).reduce((prev,cur)=>{
        let propTranslated = dataTranslate[cur] || cur;
        let resultsTranslate = []
        if(cur === 'results'){
            resultsTranslate = data.results.map(objRes => {
                return translateProps(objRes, dataTranslate)
            })
        }
        return {
            ...prev,
            [propTranslated] : cur === 'results' ? resultsTranslate  : data[cur]
        }
    },{})
}

module.exports.translateProps = {
    filmProps,
    peopleProps
}