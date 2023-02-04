var dateEnd = new Date(value: '2025-05-02 00:00:00'),
    dateNow = new Date(),
    date = Math.floor(x:(dateEnd.getTime() - dateNow.getTime()) / 1000);
function countdown() {
    var dateLeft = date,
        dateTemp = 0;
    dateTemp = Math.floor(x: dateLeft / (24 * 60 * 60));
    dateLeft -= dateTemp * 24 * 60 * 60;
    //dateLeft = Math.floor(dateleft / (24 * 60 * 60)) ;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector(selectors: '#days span').innerHTML = dateTemp;
    dateTemp = Math.floor(x:dateLeft / (60 * 60));
    dateLeft -= dateTemp * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector(selectors: '#hours span').innerHTML = dateTemp;
    dateTemp = Math.floor(x:dateLeft / 60);
    dateLeft -= dateTemp * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector(selectors: '#minutes span').innerHTL = dateTemp;
    if (dateLeft < 10) dateLeft ='o' + dateleft;
    document.querySelector(selectors: '#seconds span').innerHTML = dateLeft;

    date--;
}

setInterval(countdown, timeout: 1000);




