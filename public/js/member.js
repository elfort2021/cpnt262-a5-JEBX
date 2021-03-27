fetch('/api/v0/members')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(members){
    // Any code that depends on the `data` must go in this block
    let output = '';

const gallery = document.querySelector('.gallery');

members.forEach(function(members) {
  
output +=
    `<figure>
      <img src="${members.profilePic}" alt="pexels:${members.name}" width="500px">
      <figcaption>
        <h2>${members.name}</h2>
        <h3>${members.title}</h3>
        <h4>${members.bio}</h4>
        <a href="${members.github}" target="_blank">Github</a>
      </figcaption>
    </figure>`;
});

gallery.innerHTML = output;
  })

  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });