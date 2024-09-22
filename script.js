
setInterval(()=>{
    d = new Date()
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    // 12 hours = 360 degree , 1 hour = 30 degree
    hrotation = 30*htime + mtime/2;  
    // 60 minutes = 360 degree , 1 minute = 6 degree
    mrotation = 6*mtime;
    // 60 seconds = 360 degree , 1 second = 6 degree
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);
