const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    console.log(response.data);
  });

//malo su te zagrade zeznute, al ovak ih mores pisati
