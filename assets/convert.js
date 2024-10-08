let timeSec= prompt('dönüştürmek istediğiniz saniye değerini giriniz:');

let timeHour= (timeSec / 3600);

let timeMinute= (timeSec - (timeHour * 60)) / 60;

let otherSec= timeSec - (timeHour + timeMinute);

alert(timeSec +  ' saniye= ' + timeHour +' saat' + timeMinute +' dakika'+ otherSec + ' saniye');
  