
setInterval(updateTime, 1000);
function updateTime() {

    let newDate = new Date();
    let yr = newDate.getFullYear();
    let dat = newDate.getDate();
    let month = newDate.toLocaleString('en-us', { month: 'long' });
    let hours = newDate.getHours();
    let min = newDate.getMinutes();
    let sec = newDate.getSeconds();
    
    let y = document.getElementById('year');
    let mon = document.getElementById('month');
    let d = document.getElementById('day');
    let h = document.getElementById('hour');
    let m = document.getElementById('minute');
    let s = document.getElementById('second');
     
    y.innerHTML = yr;
    mon.innerHTML = month;
    d.innerHTML = dat;

    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
}
