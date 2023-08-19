/* const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);  */

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); //Se corrigio el selector
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

// se agrego async en la funcion
async function displayUser(username) {
  $n.textContent = 'Cargando...';
  try {//Se agrego un try 
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Convertir la respuesta a JSON
    console.log(data);
    $n.textContent = data.name; // aceeder al data.name en formato json
    $b.textContent = data.blog; // aceeder al data.blog en formato json
    $l.textContent = data.location; // aceeder al data.location en formato json
  } catch (err) { //Se agrego un catch con una funcion que mostrara el error
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError) 