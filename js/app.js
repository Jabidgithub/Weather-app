


const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {

    // console.log(data);


    // const cityDets = data.cityDets;
    // const weather = data.weather;


    // destructure properties
    const { cityDets, weather } = data;

    console.log(data);
    // update details of weather
    details.innerHTML = `
                <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    `;

    // updating day/nights and icons and images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // let timeSrc = null;
    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg';
    // }
    // else {
    //     timeSrc = 'img/night.svg';
    // };

    // remove d-none 
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }


};

const updateCity = async (city) => {
    
    const cityDets = await getCity(city);
    const weather = await getweather(cityDets.Key);

    return {cityDets,weather};

};



cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();



    // update UI with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    
    
    // setlocal storage
    // applying local storage

    localStorage.setItem('city', city);
});




// showing most recent searched city weather
if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err=> console.log(err));
};




