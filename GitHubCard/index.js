/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let gitHubData = axios.get('https://api.github.com/users/classic-username')
  .then(response => {
  console.log(response);
  return new cardCreate(response);
  })
  .catch(error => {
  console.log("error", error);
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];



let gitpage = 'https://api.github.com/users/'

followersArray.forEach( cv => {
  axios
    .get(gitpage + cv)
    .then(response => {
      return new cardCreate(response);
    })
    .catch(error => {
      console.log("error", error)
    })
})



let nativeCardsDiv = document.querySelector('.cards')
let cardCreate = function(obj){
  let firstDiv = document.createElement('div');
  firstDiv.classList.add('card');
  nativeCardsDiv.appendChild(firstDiv);
  let firstImg = document.createElement('IMG');
  firstImg.setAttribute('src', `${obj.data.avatar_url}`);
  firstDiv.appendChild(firstImg);
  let firstDivChild = document.createElement('div');
  firstDivChild.classList.add('card-info');
  firstDiv.appendChild(firstDivChild);
  let h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.textContent = `${obj.data.name}`;
  firstDivChild.appendChild(h3);
  let pUser = document.createElement('p');
  pUser.classList.add('username');
  pUser.textContent = `${obj.data.login}`;
  firstDivChild.appendChild(pUser);
  let pLoc = document.createElement('p');
  pLoc.textContent = `Location: ${obj.data.location}`;
  firstDivChild.appendChild(pLoc);
  let pProfile = document.createElement('p');
  pProfile.textContent = 'Profile:';
  firstDivChild.appendChild(pProfile);
  let pProfAnchor = document.createElement('a');
  pProfAnchor.href = `${obj.data.html_url}`;
  pProfAnchor.textContent = `${obj.data.html_url}`;
  pProfile.appendChild(pProfAnchor);
  let pFolrs = document.createElement('p');
  pFolrs.textContent = `Followers: ${obj.data.followers}`;
  firstDivChild.appendChild(pFolrs);
  let pFolng = document.createElement('p');
  pFolng.textContent = `Following: ${obj.data.following}`;
  firstDivChild.appendChild(pFolng);
  let pBio = document.createElement('p');
  pBio.textContent = `Bio: ${obj.data.bio}`;
  firstDivChild.appendChild(pFolng);
}




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// const myFollArray = []

// myFollArray.forEach(cv => {
//   axios
//     .get('https://api.github.com/users/Classic-username/followers')
//     .then(result => {
//       return
//     })
// })

// axios.get('https://api.github.com/users/Classic-username/followers')
//   .then(result =>  {
//     console.log(result)
//   })
    
    