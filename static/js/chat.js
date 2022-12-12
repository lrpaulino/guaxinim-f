const tx = document.getElementById('input');
tx.setAttribute('style', 'height:' + (tx.scrollHeight) + 'px;overflow-y:hidden;');
tx.addEventListener("input", function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}, false);
tx.addEventListener("keypress", function (e) {
    if (e.hasOwnProperty('which') ? e.which : e.keyCode == 13 && !e.shiftKey) {
        send_message();
        e.preventDefault();
    }
}, false);


function send_message() {
    var message = tx.value.trim();
    if (message) {
        console.log(message);
    }

    tx.value = '';
    tx.style.height = 'auto';
    tx.style.height = (tx.scrollHeight) + 'px';
}
window['send_message'] = send_message;
