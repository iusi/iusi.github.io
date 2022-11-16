function copy() {
    navigator.clipboard.writeText("hi@urmymoon.com");
  }
document.onkeyup = function(event) {
    var keycode = event.key;
    if (keycode === 'Enter') {
        navigator.clipboard.writeText("hi@urmymoon.com");
    }
}