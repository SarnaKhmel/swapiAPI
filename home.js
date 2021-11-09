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
    })
}

document.getElementById('btnClear1').addEventListener('click', claerInfo);
document.getElementById('btnClear2').addEventListener('click', claerInfo);

function claerInfo() {
    document.getElementById('return1').innerHTML = '';
    document.getElementById('return2').innerHTML = '';
}



let hero = null;
fetch('https://swapi.dev/api/films')
    .then((response) => {
        return response.json();
    })
    .then((data) => { 
        hero = data.results; 
    })


document.getElementById('btn3').addEventListener('click', showPeopleByFilms);

let somebody = null;
axios.get('https://swapi.dev/api/films')
            .then((response)=>{
                somebody =  response.data.results[4].characters;
                console.log(response.data);
                console.log(somebody);
                return somebody;
            })


function showPeopleByFilms() {
    console.log(somebody);

let count = 1;
   somebody.map((some) => {
        console.log(some)
        axios.get(some)
        .then(function(response) {
            
            console.log(response.data.name)
            console.log(response.data.gender)

           
            document.getElementById('return3').innerHTML += `<div class="actor"> `;
            document.getElementById('return3').innerHTML += `${count}`
            document.getElementById('return3').innerHTML += `${response.data.name} `;
            document.getElementById('return3').innerHTML += `${response.data.birth_year}`
            // document.getElementById('return3').innerHTML += `<image src="foto${index}">`
            if (response.data.gender == 'male') {
                document.getElementById('return3').innerHTML +=  `<i class="fa fa-mars" aria-hidden="true"></i>`
            } else if (response.data.gender == 'female') {
                document.getElementById('return3').innerHTML +=  `<i class="fa fa-venus" aria-hidden="true"></i>`
            }else if (response.data.gender == 'none' || response.data.gender == 'n/a') {
                document.getElementById('return3').innerHTML +=  `<i class="fa fa-question" aria-hidden="true"></i>
                `
            }
            
            document.getElementById('return2').innerHTML +=  `</div>`;
            count++;
        })
   })
        
}