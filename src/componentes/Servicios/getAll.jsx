export function getAllJuegos() {

    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ffdbfc5751msh0bbc5f820324e10p13d625jsn3c49de84e2c3',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        return fetch(url, options)
            .then(response => {
                const data = response.json();
                // console.log(data);
                return data;
            });

    } catch (error) {
        console.error(error);
    }

}
