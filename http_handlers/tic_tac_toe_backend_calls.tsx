export default async function getGame() {
    const url = 'http://192.168.86.26:4000/api/games/3';
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors'
        });
        let new_response = await response.json();
        // console.log(new_response.data)
        return new_response.data;
    } catch (error) {
        console.log(error);
    };
}
