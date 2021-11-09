const getPass = localStorage.getItem('password');
if (getPass === null) {
    window.location.href = 'index.html';
}

 document.getElementById('logout').addEventListener('click', logout);

function logout() {
    window.location.href = 'index.html';
    localStorage.removeItem('password') = null;
}

let planets = null;
fetch('https://swapi.dev/api/planets')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        planets = data.results;
    })

document.getElementById('btn1').addEventListener('click', showPlanet);
function showPlanet() {
    planets.map((planet, item) => {
        document.getElementById('return1').innerHTML += `<div>
            <h3> ${planet.name} </h3>   \n
           <h5> ${planet.climate} <h5>
         </div>` +  "\n";
    })
}



let people = null;
fetch('https://swapi.dev/api/people')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        people = data.results;
    })

document.getElementById('btn2').addEventListener('click', showPeople);
function showPeople() {
    console.log(people);
    people.map((people, item) => {
        people.olsa = "oleksas param"
        document.getElementById('return2').innerHTML += `<div class="new-person">
            <h3> ${people.name} </h3>  
           <h5> ${people.height} <h5>
           <h6> ${people.olsa} </h6>
         </div>`;
         
        //  console.log("people", people )
    })
}

document.getElementById('btnClear1').addEventListener('click', claerInfo);
document.getElementById('btnClear2').addEventListener('click', claerInfo);

function claerInfo() {
    document.getElementById('return1').innerHTML = '';
    document.getElementById('return2').innerHTML = '';
}

