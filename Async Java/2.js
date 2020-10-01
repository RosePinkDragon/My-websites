const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);
  if (request.readyState === 4 && request.status == 200) {
    console.log(request.responseText);
    //this checks if the response is 4.
    //if response is 4 then only it displays data
    //if you dont get it --> https://www.youtube.com/watch?v=aNDfsHQ5Gts
  } else if (request.readyState === 4) {
    console.log("could not fetch data");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
