
function createGraph(country,status,dates,cases){
    var header;
    switch(status){
      case 'confirmed':
          header = 'Total Number of Covid-19 Confirmed Cases';
          break;
      case 'deaths':
          header = 'Total Number of Covid-19 Confirmed Deaths';
          break;
      case 'recovered':
          header = 'Total Number of Covid-19 Confirmed Recoveries';
          break;
      default :
          console.log('createGraph() Error getting status');

    }
    new Chart(document.getElementById("line-chart"), {
          type: 'line',
          data: {
              labels:  dates,
              datasets: [{ 
                  
                  data: cases,
                  label: country,
                  borderColor: "#3e95cd",
                  fill: false
              }
              ]
          },
          options: {
              title: {
              display: true,
              text: header
              }
          }
      });
  }

function getCountryInfo(covid19URL){
    var queryURL = covid19URL;
    $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {
          //console.log(response);
    
          //.log(response[0].Country);
          var cases = response.map(obj => {
              return obj.Cases;
          });
          var dates = response.map(obj => {
            return obj.Date.slice(0,10);
          })
          //console.log(dates);
         // console.log(cases);
          createGraph(response[0].Country,response[0].Status,dates,cases);
          
          return response;
    });
}
function covid19API(country_input){

    function createGraph(country,status,dates,cases){
      var header;
      switch(status){
        case 'confirmed':
            header = 'Total Number of Covid-19 Confirmed Cases';
            break;
        case 'deaths':
            header = 'Total Number of Covid-19 Confirmed Deaths';
            break;
        case 'recovered':
            header = 'Total Number of Covid-19 Confirmed Recoveries';
            break;
        default :
            console.log('createGraph() Error getting status');

      }
      new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels:  dates,
                datasets: [{ 
                    
                    data: cases,
                    label: country,
                    borderColor: "#3e95cd",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                display: true,
                text: header
                }
            }
        });
    }

    
    var country = country_input;
    var status = 'confirmed';
    var baseURL = 'https://api.covid19api.com/';
    //Summary API
    var summaryURL = `${baseURL}summary`;
    //All Data API
    var alldataURL = `${baseURL}all`;
    //All Countries, lists country,slug name,provinces
    var allCountriesURL =`${baseURL}countries`;
    //Status By Country
    var countryStatusURL = `${baseURL}total/country/${country}/status/${status}`;
    //Status by Country and Province
    var countryProvinceStatusURL = `${baseURL}/country/${country}/status/${status}`;
    //Status by Country from the day of the first case
    var fromDayOneURL = `${baseURL}total/dayone/country/${country}/status/${status}`;
    //Status by Country and Province from the day of the first case
    var fromDayOneProvinceURL = `${baseURL}dayone/country/${country}/status/${status}`;

    var queryURL = alldataURL;

    getCountryInfo(countryStatusURL);
 
}

$("#submit").on("click",function(event){
    event.preventDefault();
 var country = $("#enterCountryToSearch").val().trim();
 country = country.replace(" ","-");
 //console.log(country);
 covid19API(country);
 $(".canvas-div").css("display","block");
 var newCountry= {
     country_name : country
 }
 $.ajax('/api/countries',{type:'POST',data:newCountry}).then(function(response){
    // console.log(response);
     //location.reload();
});
});