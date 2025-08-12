 // API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
 
 async function main() {
     const users = await fetch("https://jsonplaceholder.typicode.com/users"); 
     console.log(users)
     const userData = await users.json(); 
     const userListEl = document.querySelector(' .user-list');
     console.log(userData);
       userListEl.innerHTML = userData.map((user) => userHTML(user)).join("")

 }
 main()

 /* Now let add the click listener and sent it to the
  new url(the user.html) <<onclick = "showUsuerPosts(${user.id})">>
  NB: to see if it is work, write a function and console it */

  /* Now let rerouting to use the HTML: the question is: how to route to a 
  new page in vanilla javascript?*/

 function showUserPosts(id) {
    localStorage.setItem("id", id); /* this is to seve the id in the local storage*/
    /* this is what we have to wvrite to make it dynamic (in production)*/
    window.location.href = `${window.location.origin}/user.html`
   // console.log(window.location) /*this is to prouve we get the same result*/
    //window.location.href = `http://127.0.0.1:5500/user.html`
    //console.log(id); /*<< this is not the good method because we have to mention the url>>*/
 }


 function userHTML(user) {
    return `<div class="user-card" onclick = "showUserPosts(${user.id})">
            <div class="user-card__container">
              <h3>${user.name}</h4>
                <p><b>Email:</b>${user.email}</p>
                <p><b>Phone:</b>${user.phone}</p>
                <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
            </div>
          </div>`;
    
 }
