const url = 'https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'c7ad3a1f0dmsh93d1a5f5f25a157p167b37jsn96949fa914e8',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
};
export default class API {
    async getPopular() {
        const data1 = await this.searchMusic("sezen aksu");
        const data2 = await this.searchMusic("alizade");

        return [...data1, ...data2];
    }

    async searchMusic(query) {

        const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`;
        const res = await fetch(url, options);
        const data = await res.json();
        const formatted = data.tracks.hits.map((item) => item.track);

        return formatted;
    }
}