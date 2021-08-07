/* $(function () {
    new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
    new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
    new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
    new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
}); */



// #1-Listar todos los paises buscando por días.
function getEntrieByDateChart(data) {
    var config = null;
    let labels = [];
    let casos = [];
    let deaths = [];
    let entrie = null;

    for (let i = 0; i < 6; i++) {
        entrie = data[i];
        labels.push(entrie.country.countriesAndTerritories);
        casos.push(entrie.cases);
        deaths.push(entrie.deaths);
    }

    config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: "Casos",
                data: casos,
                borderColor: 'rgba(0, 188, 212, 0.75)',
                backgroundColor: 'rgba(0, 188, 212, 0.3)',
                pointBorderColor: 'rgba(0, 188, 212, 0)',
                pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                pointBorderWidth: 1
            }, {
                label: "deaths",
                data: deaths,
                borderColor: 'rgba(233, 30, 99, 0.75)',
                backgroundColor: 'rgba(233, 30, 99, 0.3)',
                pointBorderColor: 'rgba(233, 30, 99, 0)',
                pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                pointBorderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: false
        }
    }

    return config;

}

// #Start Conectar los dataos con la API
const hostName = 'https://proyecto-4-covidanalytics-group3.test';

const apiCall = async (method, url, token = null, data = null) => {
    let config = {
        method: method,
        url: url,
    }

    if (token !== null) {
        config['headers'] = { 'Authorization': `Bearer ${token}` };
    }

    if (data !== null) {
        config['data'] = data;
    }

    const response = await axios(config);

    return response.data;
}
// #EnD Conectar los dataos con la API




// #1-Listar todos los paises buscando por días.
async function getEntriesByDate() {
    let key1 = '/api/Entrie/date/';
    let input1 = document.getElementById('date');
    let button1 = document.getElementById('Sumbit1');
    button1.addEventListener('click', run1);

  function run1() { 

    if ( input1 == ''  ) {
        alert ('Insert la date para ver la datos');
    }
 apiCall('GET', hostName + key1 + input1.value.split("-").reverse().join("-"), null, null)
        .then(respuesta => {
            new Chart(document.getElementById("line_chart").getContext("2d"), getEntrieByDateChart(respuesta));
        });

    }
};

getEntriesByDate();


///////////////////////////////////////////////////////////////////////////////////

// #2-Listar datos de un país concreto buscando por días.
function getEntriecountryidChart(data) {
    var config = null;
    let labels = [];
    let casos = [];
    let deaths = [];
    let id = null;
    id = data[0];
    labels.push(id.country.countriesAndTerritories);
    casos.push(id.cases);
    deaths.push(id.deaths);


    config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: "Casos",
                data: casos,
                borderColor: 'rgba(0, 188, 212, 0.75)',
                backgroundColor: 'rgba(0, 188, 212, 0.3)',
                pointBorderColor: 'rgba(0, 188, 212, 0)',
                pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                pointBorderWidth: 1
            }, {
                label: "deaths",
                data: deaths,
                borderColor: 'rgba(233, 30, 99, 0.75)',
                backgroundColor: 'rgba(233, 30, 99, 0.3)',
                pointBorderColor: 'rgba(233, 30, 99, 0)',
                pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                pointBorderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: false
        }
    }

    return config;

}



// #2-Listar datos de un país concreto buscando por días.
async function getEntriesBycountryid() {

    let key2 = '/api/Entrie/countryid/';
    let input2 = document.getElementById('number');
    let input22 = document.getElementById('date2');
    let button2 = document.getElementById('Sumbit2');
    button2.addEventListener('click', run2);


  function run2 () { 
     apiCall('GET', hostName + key2 + input2.value + '/' + input22.value.split("-").reverse().join("-"), null, null)
        .then(respuesta => {
            new Chart(document.getElementById("bar_chart").getContext("2d"), getEntriecountryidChart(respuesta));
        });
    }
};

getEntriesBycountryid();


///////////////////////////////////////////////////////////////////////////////////////////

// #3 Listar todos los paises con el sumatorio de los datos.
function Sum_todos_paises(data) {
    var config = null;
    let labels = [];
    let casos = [];
    let deaths = [];
    let entrie = null;

    for (let i = 0; i < 6; i++) {
        entrie = data.suma[i];
        labels.push(entrie.countriesAndTerritories);
        casos.push(entrie.cases);
        deaths.push(entrie.deaths);
    }

    config = {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                
                {

                label: "Casos",
                data: casos,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, 
            
            
            
            {
                label: "deaths",
                data: deaths,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }

            
        
       
       
       
        ]

        },
        options: {
            responsive: true,
            legend: false
        }
    }

    return config;

}




// #3 Listar todos los paises con el sumatorio de los datos.
async function Sum_todos() {

    await apiCall('GET', hostName + '/api/Entrie', null, null)
        .then(respuesta => {
            new Chart(document.getElementById("radar_chart").getContext("2d"), Sum_todos_paises(respuesta));
        });
};

Sum_todos();


///////////////////////////////////////////////////////////////////////////////////////////


//#4-Listar un país concreto con el sumatorio de los datos
function Sum_pais(data) {
    var config = null;
    let labels = [];
    let casos = [];
    let deaths = [];
    let entrie = null;

    entrie = data.suma[0];
    labels.push(entrie.countriesAndTerritories);
    casos.push(entrie.cases);
    deaths.push(entrie.deaths);


    config = {
        type: 'pie',
        data: {
            
            labels: labels,
            datasets: [{
                label: "Casos",
                data: casos,
                borderColor: 'rgba(0, 188, 212, 0.75)',
                backgroundColor: 'rgba(0, 188, 212, 0.3)',
                pointBorderColor: 'rgba(0, 188, 212, 0)',
                pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                pointBorderWidth: 1
            }, {
                label: "deaths",
                data: deaths,
                borderColor: 'rgba(233, 30, 99, 0.75)',
                backgroundColor: 'rgba(233, 30, 99, 0.3)',
                pointBorderColor: 'rgba(233, 30, 99, 0)',
                pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                pointBorderWidth: 1
            }]
        },
        options: {
            responsive: true,
            legend: false
        }
    }

    return config;

}

//#4-Listar un país concreto con el sumatorio de los datos
async function Sum() {
    let key4 = '/api/Entrie/pais/';
    let input4 = document.getElementById('pais');
    let button4 = document.getElementById('Sumbit4');
    button4.addEventListener('click', run4);

    function run4() {

        if( input4.value == '') {
         alert ('Insert a pais para ver la datas');
        }
        else { 
            
        apiCall('GET', hostName + key4 + input4.value, null, null)
            .then(respuesta => {
                new Chart(document.getElementById("pie_chart").getContext("2d"), Sum_pais(respuesta));
            });
            
        }
        
    }

};

Sum();




