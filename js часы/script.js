setInterval(function () {
    var date = new Date();

    var format = [
        (date.getHours()<10 ? "0"+date.getHours():date.getHours()),
        (date.getMinutes()<10 ? "0"+date.getMinutes():date.getMinutes()),
        (date.getSeconds()<10 ? "0"+date.getSeconds():date.getSeconds())
    ].join(":");

    document.getElementById("clock").innerHTML = format;
}, 10);