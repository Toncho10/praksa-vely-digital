const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {
    console.log(response.data);
  });

//malo su te zagrade zeznute, al ovak ih mores pisati

// ovo je ES6 primjer s promises

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((x) => {
  console.log(x.data);
});

// ES5 je function (x) {return x}
// ES6 je (x) => {return x}

// funkcija NE MORA IMATI IME, tipa ovo gore, ali ako das ime funkciji

// ES5 function f(x) {return x}
// ES6 const f = (x) => {return x}

// ako koristis funkciju UNUTAR () tipa gore na axios, ona ona nema ime,
// to najcesce se koristi kod .then, npr gore na liniji 15

// ak si imal matematiku, function f(x) zvuci poznato, ne? zato se zove funkcionalno programiranje

/*
  .then (
    function (x) {console.log(x)}
  )
  */

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((x) => {
  console.log(x.data);
});

// ovo gore je ES5 promises based

// sada bumo napisali ISTO TO, samo full ES6, sa promises async metodom
// prvo pravilo es6 je da sve mora biti funkcija, zapocnima s tim, napravimo funkciju
// ako zelimo da nasa funkcija ima .then (bude promises), stavimo na nju async
// next pozovemo axios
// ako hocemo da ima .then, onda ispred njega stavio await.. nek ceka podatak

const axiosGet = async () => {
  const x = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  console.log("async based", x.data);
};
// vidis da je isto, samo drugacije napisano

axiosGet();
