function updateTime(){
    const utcTime = new Date().toUTCString();
    document.getElementById("utcTime").textContent = "UTC Time: " + utcTime;
}

updateTime();
setInterval(updateTime, 1000); //update every second
