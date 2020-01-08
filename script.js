
function myfunction(){

let fList = document.getElementById('myList');
    vList = document.getElementById('myListTwo')
    li = document.createElement('li');
    txt = document.getElementById('txtinput').value;


    if(document.getElementById('fr_radio').checked){
    li.appendChild(document.createTextNode(txt));
    fList.appendChild(li);
} else if (document.getElementById('vg_radio').checked){
    li.appendChild(document.createTextNode(txt));
    vList.appendChild(li);
}
}