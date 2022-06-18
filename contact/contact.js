const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(new URLSearchParams(window.location.search));
  placeForResults.append(`${name} : ${value}`);
  placeForResults.append(document.createElement("br"));
});
