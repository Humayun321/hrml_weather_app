let loc_div = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', (e) => {

    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = '';


});



const getWeather = async (city) => {
    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd`,

            { mode: 'cors' }
        );

        const weatherData = await response.json();
        console.log(weatherData);
        const { name } = weatherData;
        const { feels_like } = weatherData.main;
        const { id, main } = weatherData.weather[0];
        loc_div.textContent = name;
        climate.textContent = main;
        tempvalue.textContent = Math.round(feels_like - 273);
        if (id < 300 && id > 200) {
            tempicon.src = "./icons/thunderstorm.svg"
        }
        else if (id < 400 && id > 300) {
            tempicon.src = "./icons/cloud-solid.svg"
        }
        else if (id < 600 && id > 500) {
            tempicon.src = "./icons/rain.svg"
        }
        else if (id < 700 && id > 600) {
            tempicon.src = "./icons/snow.svg"
        }
        else if (id < 800 && id > 700) {
            tempicon.src = "./icons/clouds.svg"
        }
        else if (id == 800) {
            tempicon.src = "./icons/clouds-and-sun.svg"
        }




    }
    catch (error) {
        alert('city not found');
    }





};


window.addEventListener("load", () => {

    let long;
    let lat;
   
    let geo_url= "https://ipinfo.io/geo?token=7a07cca026efa0";

    // const proxy = "https://cors-anywhere.herokuapp.com/";
    const city_data = "https://ipinfo.io/geo?token=7a07cca026efa0";
    

    fetch(city_data).then((response) => {

        // city_data_value = response.json();
         return response.json()
        
    })
        .then(data => {
            console.log(data)
            const city1 = data.city;
            console.log(city1)
            const loc = data.loc.split(',');
            console.log(loc)
            console.log(loc);
            const lat= loc[0];
            const long= loc[1];
            
            // long = position.coords.longitude;
            // lat = position.coords.latitude;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dab3af44de7d24ae7ff86549334e45bd`

            fetch(api).then((response) => {

                return response.json();
            })
                .then(data => {
                    const { name } = city1;
                    const { feels_like } = data.main;
                    const { id, main } = data.weather[0];

                    loc_div.textContent = city1;
                    climate.textContent = main;
                    tempvalue.textContent = Math.round(feels_like - 273);
                    if (id < 300 && id > 200) {
                        tempicon.src = "./icons/thunderstorm.svg"
                    }
                    else if (id < 400 && id > 300) {
                        tempicon.src = "./icons/cloud-solid.svg"
                    }
                    else if (id < 600 && id > 500) {
                        tempicon.src = "./icons/rain.svg"
                    }
                    else if (id < 700 && id > 600) {
                        tempicon.src = "./icons/snow.svg"
                    }
                    else if (id < 800 && id > 700) {
                        tempicon.src = "./icons/clouds.svg"
                    }
                    else if (id == 800) {
                        tempicon.src = "./icons/clouds-and-sun.svg"
                    }
                    console.log(data);
                }) 
            // console.log (loc)

    })  
}
)

    

    // if (navigator.geolocation) {

    //     navigator.geolocation.getCurrentPosition((position) => {
            // long = position.coords.longitude;
            // lat = position.coords.latitude;
            // const proxy = "https://cors-anywhere.herokuapp.com/";
            // const api = `https:\\${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=dab3af44de7d24ae7ff86549334e45bd`

            // fetch(api).then((response) => {

            //     return response.json();
            // })
            //     .then(data => {
            //         const { name } = data;
            //         const { feels_like } = data.main;
            //         const { id, main } = data.weather[0];

            //         loc.textContent = name;
            //         climate.textContent = main;
            //         tempvalue.textContent = Math.round(feels_like - 273);
            //         if (id < 300 && id > 200) {
            //             tempicon.src = "./icons/thunderstorm.svg"
            //         }
            //         else if (id < 400 && id > 300) {
            //             tempicon.src = "./icons/cloud-solid.svg"
            //         }
            //         else if (id < 600 && id > 500) {
            //             tempicon.src = "./icons/rain.svg"
            //         }
            //         else if (id < 700 && id > 600) {
            //             tempicon.src = "./icons/snow.svg"
            //         }
            //         else if (id < 800 && id > 700) {
            //             tempicon.src = "./icons/clouds.svg"
            //         }
            //         else if (id == 800) {
            //             tempicon.src = "./icons/clouds-and-sun.svg"
            //         }
            //         console.log(data);
//             //     })
//         }
//         )
// //     }
// // })
