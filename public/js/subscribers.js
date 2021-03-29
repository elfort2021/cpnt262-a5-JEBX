fetch('./api/v0/subscribers')
  .then(function(response){
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(subscribers){
    // use fetch() and forEach() to display the subscribers list from API endpoint //
    let output = '';
    subscribers.forEach((subscriber) => {
      output += `<dt>${subscriber.name}</dt>
                 <dd>${subscriber.email}</dd>`;
    })
    document.querySelector('.sub-list').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });