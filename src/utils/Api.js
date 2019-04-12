import Config from '../Config'

class Api {

    async getHome() {
        const url = Config.host;

        const api_call = await fetch(url);
        const data = await api_call.json();
        const memes = data
        // console.log('Donnees', cities);
        return memes;
    }
}

export default new Api();
