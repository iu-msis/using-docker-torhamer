var peopleApp = new Vue({
  el: '#peopleApp',
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

      "Nat": ""
    },
    comment: []
},

// Means the same at this
methods: {
 fetchPatients() {
 fetch('https://randomuser.me/api/')
 .then( response => response.json() )
     .then( json => {peopleApp.user = json.results[0]})
     ;
//
created() {
    this.fetchPatients();
    }
  })
