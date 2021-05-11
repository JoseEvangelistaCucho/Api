
/*let url = "https://localhost:44367/api/prueba"*/


/*let url = "https://localhost:44367/api/prueba"
      

      function traer(){
           fetch(url)
           .then(response=> response.json())
           .then(user => mostrarData(user))
           .catch(error=> console.log(error))

           const mostrarData =(user) =>{
               console.table(user)
               let body=''
               for (let i = 0; i < user.length; i++) {
                body+=
                `<tr>
                <td class="col-table">${user[i].id}</td>
                <td class="col-table">${user[i].name}</td>
                <td class="col-table">${user[i].apellido}</td>
                <td class="col-table">${user[i].email}</td>
                <td class="col-table"><center><button onclick="updateUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"><img title="Update" src=""></button></center></td> 
                <td class="col-table"><center><button onclick="deleteUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"><img title="Delete" src=""></button></center></td> 
                `
            
            }
             document.getElementById('data').innerHTML=body
           }
        }*/
    
      /*  async function buscar(id){
            const users= await fetch("https://localhost:44367/api/prueba/"+id);
            const response=await users.json();
            console.log(response);
            data.innerHTML="";
            response.forEach(user => {
            data.innerHTML+=
                `<tr>
                 <td class="col-table">${user.id}</td>
                 <td class="col-table">${user.name}</td>
                 <td class="col-table">${user.apellido}</td>
                 <td class="col-table">${user.email}</td>
                 <td class="col-table"><center><button onclick="updateUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"<img title="Update" src=""></button></center></td> 
                 <td class="col-table"><center><button onclick="deleteUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"<img title="Delete" src=""></button></center></td> 
                  `
                    });
                    data.innerHTML
            }*/


//document.getElementById('loadInfo').addEventListener('click',getData)
async function getData(){
    const users= await fetch("https://localhost:44367/api/prueba")
    const response=await users.json();
    console.log(response);
    data.innerHTML="";
    response.forEach(user => {
        data.innerHTML+=
        `<tr>
         <td class="col-table">${user.id}</td>
         <td class="col-table">${user.name}</td>
         <td class="col-table">${user.apellido}</td>
         <td class="col-table">${user.email}</td>
         <td class="col-table"><center><button onclick="updateUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"<img title="Update" src=""></button></center></td> 
         <td class="col-table"><center><button onclick="deleteUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"<img title="Delete" src=""></button></center></td> 
          `
            });
            data.innerHTML
}



async function deleteUser(userId){
    console.log(userId);
    var url="https://localhost:44367/api/prueba/"+userId;
    console.log(url);
    data.innerHTML="";
    const user=await fetch(url,{
        method:'DELETE'
    })
    .then(response=>response.json())
    .then(data => console.log(data));

    //simulacion
    const users=await fetch("https://localhost:44367/api/prueba/");
    const resp =await users.json();
    console.log(resp);
    data.innerHTML="";
    resp.forEach(user=>{
        if(user.id !=userId){
            data.innerHTML +=
            `<tr>
            <td class="col-table">${user.id}</td>
            <td class="col-table">${user.name}</td>
            <td class="col-table">${user.apellido}</td>
            <td class="col-table">${user.email}</td>
            <td class="col-table"><center><button onclick="updateUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"<img title="Update" src=""></button></center></td> 
            <td class="col-table"><center><button onclick="deleteUser(${user.id})" type="submit" id="loadInfo" class="button button with-mouse-on"<img title="Delete" src=""></button></center></td> 
             `
        }
    })

}


document.getElementById('saved').addEventListener('click',createUser);
//var tableBody="";
var indexDeleted=[];
indexDeleted.push(0);
async function  createUser(){
    console.log("Enviado....");
    const create = await fetch("https://localhost:44367/api/prueba/",{
        method:'POST',
        body: JSON.stringify({
            name:nam.value,
            password:password.value,
            apellido:apellido.value,
            nrotelefono:nrotelefono.value,
            email:email.value
        }),
        Headers:{
        "content-type":"Application/json; charset=utf-8"
    }
    })
    .then(response =>response.json())
    .then(json => console.log(json));
    

}
