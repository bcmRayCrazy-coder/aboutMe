const storage = window.localStorage;
var agree = storage.getItem('ap_agree');
if (agree != null) {
    if (agree) {
        window.location.href = './main_page.html';
    } else {
        window.alert('请自行关闭页面');
    }
} else {
    var dbtn = document.getElementById('disagree');
    var abtn = document.getElementById('agree');
    dbtn.onclick = function() {
        storage.setItem('ap_agree', false);
    }
    abtn.onclick = function() {
        storage.setItem('ap_agree', true);
    }
}