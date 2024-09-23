const user = {
    "name": "Andres",
    "surname": "Soria",
}

const person = {
    name: "Ryan",
    lastname: "Ray",
    age: 22,
    nickname: "ryan123",
    hobbies: ["sing", "read", "run"],
    address: {
      street: "liberty avenue",
      city: "london",
    },
    married: false,
  };

//Muestra datos en formato JavaScript
//console.log(person)
//Muestra datos en formato JSON
//console.log(JSON.stringify(person));

//trae el people de lista ul de html
//document.getElementById('people').innerHTML = output

let postElements = ''
//document.getElementById('posts')

//trae datos de servidor externo y los toma como JSON, luego los recorre en data y manda a html
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json()
  })
  .then(data =>{
    //console.log(data)
    for(let i=0; i < data.length; i++){
      //console.log(data) para ver si muestra en console del navegador
      postElements += `<li>${data[i].userId} - ${data[i].title}</li>`
    }
    //trae el posts de lista ul de html e iguala a arreglo cargado
    document.getElementById('posts').innerHTML = postElements
  })

  