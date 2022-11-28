const $events = document.querySelector('#events');

const getEvents = () => {
  fetch('/api/users')
    .then(response => response.json())
    .then(eventsArr => {
      eventsArr.forEach(printEvents);
    })
    .catch(err => {
      console.log(err);
    });
};





// Load the function
getEvents();