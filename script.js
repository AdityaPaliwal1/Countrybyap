let countryinp = document.getElementById("countryinp");
let search = document.getElementById("btn");
 Name = document.getElementsByName("Name");
 search.addEventListener("click" , ()  => {

   if(Name == null || Name == " "){
      console.error("Please enter> the name of country...");
      return false;
   }

    let counrtyname = countryinp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${counrtyname}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response)=> response.json())
     .then((data) =>  {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
        console.log(data[0].timezones[0]);
        console.log(data[0].population);

        result.innerHTML = `
      <img src = "${data[0].flags.svg}"
       class = "flag-img" > 
       <h2>${data[0].name.common}</h2>

       <div class ="wrapper">
          <div class = "data-wrapper" >
        <h4>Capital :</h4>
        <span>${data[0].capital[0]}</span>
       </div>

       <div class ="wrapper">
          <div class = "data-wrapper" >
        <h4>Continent :</h4>
        <span>${data[0].continents[0]}</span>
       </div>

       <div class ="wrapper">
          <div class = "data-wrapper" >
        <h4>Currency :</h4>
        <span>${Object.keys(data[0].currencies)[0]} ${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
       </div>

       <div class ="wrapper">
          <div class = "data-wrapper" >
        <h4> Populations:</h4>
        <span>${data[0].population}</span>
       </div>


       <div class ="wrapper">
          <div class = "data-wrapper" >
        <h4> Languages:</h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
       </div>

       <div class ="wrapper">
          <div class = "data-wrapper" >
        <h4> Time-Zone:</h4>
        <span>${data[0].timezones[0]}</span>
       </div>
       `;
        
    
});

});
 