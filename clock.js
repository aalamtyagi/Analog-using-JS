setInterval(() => {
    let d = new Date();
    let hourTime = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hrotation = 30 * hourTime + min / 2;
    mrotation = 6 * min;
    srotation = 6 * sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);