var App = new Vue({
  el: '#waitingApp',
  data: {
    "user": {
      "gender": "",
      "name": {
        "title": "",
        "first": "",
        "last": ""
      },

      "location":{
        "street": "",
        "city": "",
        "state": "",
        "postcode":"",
      },

      "email": "",

      "dob": {
        "date": "",
        "age": "",
      },

      "picture": {
        "large": "",
        "medium":"",
        "thumbnail": ""
      },

      "nat": ""
    },
},

// Means the same as this
methods: {
 fetchPatients() {
 fetch('https://randomuser.me/api/')
 .then( response => response.json() )
 .then( json => {App.user = json.results[0]})
     ;}
   },
created: function() {
this.fetchPatients();
    }
  })
