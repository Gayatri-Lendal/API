/*let p = fetch ("https://goweather.herokuapp.com/weather/ny")
p.then((response)=>
{
    console.log(response.status);
    console,log(response.ok);
    return response.json()
})
p.then((data)=>
{
  console.log(data);
})*/


//store data in table,display on html from api data
fetch("https://fakestoreapi.com/products")
.then((data)=>{
    //console.log(data);  it is in json format
    return data.json();  //converted to object
})
.then((objectData)=>{           
    console.log(objectData);
    let tableData ="";
    objectData.map((values)=>{           
        tableData +=` <tr>                      
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    })

    document.getElementById("table_body").innerHTML=tableData;
})
.catch((err)=>{             //to handle errors
    console.log(err);
})


/*Map method 
 it runs function for each object inside the array
 
 objectData.map((param)=>{          //param contains the data of api

 })
*/
//i took the api from 'fake store api' 
// when the data is fetch from the api its an array of object


/*fetch is a promise,in promise there are 2 methods then(when success) and catch(incase of error)
.then((paramtere)=> {       //inside first .then this parameter contains the data stored in the mentioned API url
console.log(data);           //it is response from the api and this data is json format
return data.json();          //data is converted into object   
})  
*/
//parameter of the second .then is the value returned by first .then 
//here it is the data converted into object is the parameter of second .then named as objectData

/*
.then((objectData)=>{
console.log(objectData);        //it will display the data in the console in array of objects
})
*/

/* To Display the data on html page
create id for tabel body >> use innerHTML >>  document.getElementById("table_body").innerHTML=tableData; 

we add += >>it brings all the data otherwise it only displays last data
'$' > it gets the original data

*/