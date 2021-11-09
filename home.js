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



let hero = null;
fetch('https://swapi.dev/api/films')
    .then((response) => {
        return response.json();
    })
    .then((data) => { 
        hero = data.results; 
    })



    // console.log(hero)
    // let human = [];
    // hero.map((film, i) => {
    //     if (i == 2) { 
    //         console.log(film.characters);
    //         human = human.concat(film);
    //     }
//     // })
//     // console.log("ggghjk", human)


// document.getElementById('btn3').addEventListener('click', showPeopleByFilms);
// function showPeopleByFilms() {
//     let somebody = '';
//     axios.get('https://swapi.dev/api/films')
//     .then(function(response) {
//         console.log(response.data.characters);
//         return somebody = a;
//     })

//     // axios.get(somebody)
//     // .then(function(response) {
//     //     console.log(response)
//     // })

// }

document.getElementById('btn3').addEventListener('click', showPeopleByFilms);

let somebody = null;
axios.get('https://swapi.dev/api/films')
            .then((response)=>{
                somebody =  response.data.results[2].characters;
                console.log(somebody);
                return somebody;
            })


function showPeopleByFilms() {
    console.log(somebody);

    // for(let i = 0; i < somebody.length; ) {
    //     axios.get(somebody[i])
    //     .then(function(response){
    //         console.log(response.name)
    //     })
   // }

   somebody.map((some, index) => {
        console.log(some)
        axios.get(some)
        .then(function(response) {
            console.log(response.data.name)
        })
   })
        
}