/* const hostName = 'https://proyecto-4-covidanalytics-group3.test';

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

async function getEntries() {
    let data =  await apiCall('GET', hostName + '/api/Entrie', null, null);
};

new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
function getChartJs(type) {
    var config = null;

    if (type === 'line') {
        config = {
            type: 'line',
            data: {
                labels: ["cases"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(0, 188, 212, 0.75)',
                    backgroundColor: 'rgba(0, 188, 212, 0.3)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "deaths",
                        data: [28, 48, 40, 19, 86, 27, 90],
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
    }
}

getEntries();
 */