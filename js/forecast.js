
// provided API key
const key = '3zwyeER6I9XlADIgtP4BMYGoGotteYEV';



// Get weather information
const getweather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    // console.log(data[0]);
    return data[0];
}





// Fetching Cityt information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};



/*

getCity('manchester').then(data => {
        return getweather(data.Key);
}).then(data => {
    console.log(data);
})
    .catch(error=>console.log('Here are errors:',error));


*/

