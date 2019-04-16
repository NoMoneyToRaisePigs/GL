
var leftContainer = document.getElementById('left-container');
var runInfoContainer = document.getElementById('run-info');

registerDrag(document.getElementById("vertical-drag-bar"), function(offset){ 
  leftContainer.style.width = offset.left + 'px' 
});

registerDrag(document.getElementById("horizontal-drag-bar"), function(offset){ 
  runInfoContainer.style.height = offset.top + 'px' 
});

function registerDrag(element, event) {
  element.onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    
    document.onmouseup = cancel;
    document.onmousemove = drag;
  }

  function drag(e) {
    e.preventDefault();
    e.stopPropagation();
    event({ top: e.clientY, left: e.clientX });
  }

  function cancel() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

for(let icon of document.getElementsByClassName('full-screen-icon')){
  icon.onclick = (e) =>{
    var x = nearestPositionedElement(e.target);
    x.classList.toggle('full-screen');
  }
}

function nearestPositionedElement(element){
  return ['relative','fixed'].includes(getComputedStyle(element).position)  ? element :  nearestPositionedElement(element.parentElement);
}


