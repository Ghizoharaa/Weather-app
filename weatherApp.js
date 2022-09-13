
async function getWeatherData(city){
    try{
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=f8477ac263fb0fd6211eef3afebd6e14")
        const data = await response.json();
        displayWeather(data)
    }
    catch(e){
        console.log('Error: ', e);
    }
    function displayDate(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        document.querySelector("p").innerText = today
    }
    function displayWeather(data){
        const {name} = data;
        const {temp, humidity} = data.main;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        console.log(name, temp, humidity, icon, description, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText =temp + " °C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity:"+humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " +speed;
        displayDate();
        
    }
    
    
};
function search(){
    getWeatherData(document.querySelector(".search-bar").value);
}

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == 'Enter'){
        search();
    }
})
document.querySelector(".btn").addEventListener('click', function(){
    search()
})


