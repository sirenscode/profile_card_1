document.oncontextmenu=function(event){
    document.getElementById("context").classList.remove("hidden");
    document.getElementById("context").style.left = event.clientX+window.scrollX+"px";
    document.getElementById("context").style.top = event.clientY+window.scrollY+"px";
}

document.onclick=function(){
    document.getElementById("context").classList.add("hidden")
}