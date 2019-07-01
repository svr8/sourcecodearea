const initNewDoc = function() {
  insertNewLineAfter(1);
  defaultCaret.show();
}

$(document).ready(function() {
  console.log('READY');
 
  initNewDoc();

  $(document).on('keydown', function(event) {
    // prevent TAB KEY from switching focus
    if(event.keyCode == 9) event.preventDefault();
    
    if (event.originalEvent.getModifierState("CapsLock")) capsLockKey.press();
    else capsLockKey.release();
    
    handleKeyDown(event.keyCode);
  });

  $(document).on('keyup', function(event) {
    handleKeyUp(event.keyCode);
  });
});

// TEST
var foo = function() {
            document.getElementsByClassName("test")[0].innerHTML = "FOO";
            return "FOO";
        };