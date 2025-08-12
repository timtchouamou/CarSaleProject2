function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}
    
document.getElementById('search-button').addEventListener('click', () => { 
const model = document.getElementById('header__search--input').value; 
const url = `https://api.api-ninjas.com/v1/cars?model=${model}`;

const options = {
      method: 'GET', 
    headers: {
        'X-Api-Key': '35CKhj2b4+6T4CcWXVJIgQ==wqPLiPlyXi17eKTH', // Replace with your actual API key 
        'Content-Type': 'application/json',
   },

 }; 

 fetch(url, options)
  .then(response => { 
    console.log(response)
      if (!response.ok) {   
          throw new Error('Network response was not ok ' + 

response.statusText); 

     } 
       return response.json();

     }) 

      .then(data => { 
        console.log(data)
         const carInfoDiv = document.getElementById('car-info');   
        carInfoDiv.innerHTML = ''; // Clear previous results    
        if (data.length > 0) { 
            data.forEach(car => {   
               carInfoDiv.innerHTML += `  
            <h2>Search results for:"${car.model}"</h2>  
         `;   

         }); 

          } else {

              carInfoDiv.innerHTML = '<p>No car data found.</p>'; 

           }
        })  
          .catch(error => { 
             console.error('There was a problem with the fetch operation:', error);   
             document.getElementById('car-info').innerHTML = '<p>Error fetching data.</p>'; 
             });
             
     });

   
