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
    let casos=[];
    let deaths=[];
    let entrie = null;

    for(let i = 0; i < 6; i++){
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
async function getEntriesByDate(fecha) {
     
         await apiCall('GET', hostName + '/api/Entrie/date/' + fecha, null, null)
    .then(respuesta => {
        new Chart(document.getElementById("line_chart").getContext("2d"), getEntrieByDateChart(respuesta));
    });
};

getEntriesByDate('19-05-2020');


///////////////////////////////////////////////////////////////////////////////////

// #2-Listar datos de un país concreto buscando por días.
function getEntriecountryidChart(data) {
    var config = null;
    let labels = [];
    let casos=[];
    let deaths=[];
    let id= null;
    id= data[0];
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
async function getEntriesBycountryid(countryid, date) {
     
    await apiCall('GET', hostName + '/api/Entrie/countryid/' + countryid +'/'+ date , null, null)
.then(respuesta => {
   new Chart(document.getElementById("bar_chart").getContext("2d"), getEntriecountryidChart(respuesta));
});
};

getEntriesBycountryid('1', '19-05-2020');


///////////////////////////////////////////////////////////////////////////////////////////

// #3 Listar todos los paises con el sumatorio de los datos.
function Sum_todos_paises(data) {
    var config = null;
    let labels = [];
    let casos=[];
    let deaths=[];
    let entrie = null;

    for(let i = 0; i < 6; i++){
        entrie = data.suma[i];
        labels.push(entrie.countriesAndTerritories);
        casos.push(entrie.cases);
        deaths.push(entrie.deaths);
    }
    
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




// #3 Listar todos los paises con el sumatorio de los datos.
async function Sum_todos() {
     
         await apiCall('GET', hostName + '/api/Entrie' , null, null)
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
    let casos=[];
    let deaths=[];
    let entrie = null;
     
        entrie = data.suma[0];
        labels.push(entrie.countriesAndTerritories);
        casos.push(entrie.cases);
        deaths.push(entrie.deaths);
    
    
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


// let pais;
// function fin() {

//     pais = document.getElementById('text').value;
// }
// fin()
// console.log(pais);

//#4-Listar un país concreto con el sumatorio de los datos
async function Sum(pais) {
     
         await apiCall('GET', hostName + '/api/Entrie/pais/' + pais , null, null)
    .then(respuesta => {
        new Chart(document.getElementById("pie_chart").getContext("2d"), Sum_pais(respuesta));
    });


};

Sum("Mali");


