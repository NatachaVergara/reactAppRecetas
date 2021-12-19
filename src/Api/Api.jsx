
const Api = async ({ query, setRecetas }) => {

    const APP_ID = "7feadccc";
    const APP_KEY = "d7e990c52f68053030c0382c4e8437c2";

    await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100&image=small`)
        .then(res => res.json())
        .then(data => setRecetas(data.hits))
        .catch(err => console.log(err))

}

export default Api


