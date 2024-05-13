var MenuItens = document.getElementById("MenuItens");
MenuItens.style.maxHeight = "0px";
function menucelular() {
    if (MenuItens.style.maxHeight == "0px") {
        MenuItens.style.maxHeight = "200px";
    } else {
        MenuItens.style.maxHeight = "0px";
    }
}

var produtoimg = document.getElementById("produtoimg");
var produtominiatura = document.getElementsByClassName("produtominiatura");

produtominiatura[0].onclick = function(){
    produtoimg.src = produtominiatura[0].src;
}
produtominiatura[1].onclick = function(){
    produtoimg.src = produtominiatura[1].src;
}
produtominiatura[2].onclick = function(){
    produtoimg.src = produtominiatura[2].src;
}
produtominiatura[3].onclick = function(){
    produtoimg.src = produtominiatura[3].src;
}





