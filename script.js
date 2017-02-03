var text = document.createElement('div');
text.className = "text rex";
text.innerHTML = "Here you can see a chess desk";
document.body.appendChild(text);

var numblist = document.createElement('div');
numblist.className = 'numbliste';
numblist.innerHTML = ''+ 1;
document.body.appendChild(numblist);

for(var i = 2; i <= 8;i++){
  var numblist = document.createElement('div');
  numblist.className = 'numblist';
  numblist.innerHTML = ''+ i;
  document.body.appendChild(numblist);
}

for(var i = 0 ;i < 8;i++){
  if(i%2){
  var black = document.createElement('div');
  black.className = 'black';
  document.body.appendChild(black);
  }
  else{
   var white = document.createElement('div');
  white.className = 'white';
  document.body.appendChild(white); 
  }
}


/*for (var i = 65; i <= 72;i++){
  var abclist = document.createElement('div');
  abclist.className = 'abclist';
  abclist.innerHTML = String.fromCharCode(i);
  document.body.appendChild(abclist);
}*/