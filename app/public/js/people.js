var people = new Vue({
  el: '#people',
  data: {
    patients: []
  },

// Means the same at this
methods: {
  fetchPeople() {
 fetch('https://randomuser.me/api/')
 .then(function(response) {return response.json()})
 .then(function(json) {waitingApp.people = json});

created() {
      this.fetchPeople();
    }
  })
