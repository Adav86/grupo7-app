import axios from "axios";

const urlJuegos = `https://api.rawg.io/api/`;
const urlTraductor = `https://deep-translate1.p.rapidapi.com/language/translate/v2`;

export const juegosApi = async (url = 'games', parametros = {}) => {
    let parametrosURL;
    if (Object.keys(parametros).length > 0) {
        Object.keys(parametros).map(valor => {
            parametrosURL = `&${valor}=${parametros[valor]}`
        });
    }
    const key = process.env.REACT_APP_RAWG_API_KEY;
    return await axios.get(`${urlJuegos}${url}?key=${key}${parametrosURL}`)
        .then(respuesta => respuesta.data)
        .then(respuesta => {
            return respuesta.results
        })
        .catch(error => {
            console.log(error);
        });
}

export const traductorApi = async (textoATraducir) => {
    const data = {
        q: textoATraducir,
        source: 'en',
        target: 'es'
    }
    const headers = {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
    }
    await axios.post(urlTraductor, data, { headers })
        .then(respuesta => {
            const { translations } = respuesta.data.data;
            return translations.translatedText;
        })
        .catch(error => {
            console.log(error);
        });
}