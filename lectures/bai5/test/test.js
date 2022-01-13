var allButtons = document.querySelectorAll(".trigger");

for ( var i = 0; i < allButtons.length; i++ ) (function(i){ 
  const parent = allButtons[i].parentNode;
  allButtons[i].onclick = function(e) {
    parent.classList.add('show-text');
    window.addEventListener('mouseup', function checkClickOutside(event) {
      if (!parent.contains(event.target)) {
        parent.classList.remove('show-text');
        window.removeEventListener('mouseup', checkClickOutside);
      }
    })
    
    
    // const parent = allButtons[i].parentNode;
    // if(parent.classList.contains('show-text')) {
    //   parent.classList.remove('show-text');
    // } else {
    //   parent.classList.add('show-text');
    // }
    

  }
})(i);

