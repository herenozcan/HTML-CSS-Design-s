function setDate() {
  let elementDate = document.querySelector(".js-data");
  let data = new Date();

  const objData = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  };

  elementDate.textContent = data.toLocaleTimeString("en-US", objData);  
}

setDate();
setInterval(() => {
  setDate();
}, 1000);