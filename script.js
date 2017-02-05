var desk = document.createElement('div');
desk.className = 'desk';
document.body.appendChild(desk);

for (var i = 72; i >= 65;i--){
var tabup = document.createElement('div');
tabup.className = 'tabup';
tabup.innerHTML = String.fromCharCode(i);
desk.appendChild(tabup);
}
for(var i=0;i<8;i++){
  for(var j = 0;j<8;j++){
    if((i+j)%2){
      var black = document.createElement('div');
      black.className = 'black';
      desk.appendChild(black);
    }
    else{
      var white = document.createElement('div');
      white.className = 'white';
      desk.appendChild(white);
    }
  }
}

for (var i = 65; i <= 72;i++){
var tabdown = document.createElement('div');
tabdown.className = 'tabdown';
tabdown.innerHTML = String.fromCharCode(i);
desk.appendChild(tabdown);
}