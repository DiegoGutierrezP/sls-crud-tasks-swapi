
const { default: axios } = require("axios");
const { Router } = require("express");
const { translateProps } = require("../helpers/translate-props");

const ACEPTED_LANGUAGES = ['en','es'];

const router = Router();

router.get("/films", async function (req, res) {

   const { lang = 'en' }  = req.headers;
   const { title = '' } = req.query;

   if(!ACEPTED_LANGUAGES.includes(lang)) lang = 'en';
  
   const { data } = await axios.get(`${process.env.SWAPI_API_BASE}/films?search=${title}`);

   const newData = translateProps.filmProps(data,lang)

    res.status(200).json(newData);
});

router.get("/person/:id", async function (req, res) {

    const { id = '' } = req.params;
    const { lang = 'en' }  = req.headers;

    if(!ACEPTED_LANGUAGES.includes(lang)) lang = 'en';

    const { data } = await axios.get(`${process.env.SWAPI_API_BASE}/people/${id}`);

    const newData = translateProps.peopleProps(data,lang)

    res.status(200).json(newData);
});



module.exports = router;