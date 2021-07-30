const hostName = 'https://proyecto-4-covidanalytics-group3.test';
// Login / Logout
async function getEntries() {
  return await apiCall('GET', hostName + '/api/Entrie', null, null);
};

async function logout(token) {
  return await apiCall('GET', hostName + '/api/Entrie/', token, null);
}

// Asistencias
async function listadoFirmas(token) {
  return await apiCall('GET', hostName + '/api/listadoFirmas', token, null);
};

async function firmar(token, data = {}) {
  return await apiCall('POST', hostName + '/api/firmar',token, data);
};

async function getNumFirmasHoy(token) {
  return await apiCall('POST', hostName + '/api/numeroFirmasHoy', token, null);
};



const apiCall = async (method, url, token = null, data = null) => {
  let config = {
    method: method,
    url: url,
  }

  if (token !== null) {
    config['headers'] = {'Authorization': `Bearer ${token}`};
  }

  if (data !== null) {
    config['data'] = data;
  }

  const response = await axios(config);

  return response.data;
}

// Exportación de las funciones

export {
  getEntries,
 
}