var yidongz = document.getElementById("yidongz"),
    yidongy = document.getElementById("yidongy"),
    img = document.getElementById("img"),
    yuan1 = document.getElementById("yuan1"),
    yuan2 = document.getElementById("yuan2"),
    yuan3 = document.getElementById("yuan3"),
    yuan4 = document.getElementById("yuan4"),
    lbt = ["../tup/mi-img/mi-lbt-img/MI (0).webp",
        "../tup/mi-img/mi-lbt-img/MI (1).webp",
        "../tup/mi-img/mi-lbt-img/MI (2).webp",
        "../tup/mi-img/mi-lbt-img/MI (3).webp"],
    index = 0;
yidongz.onclick = function () {
    index--;
    if (index < 0) {
        index = lbt.length - 1;
    }
    img.src = lbt[index];

}
yidongy.onclick = function () {
    index++;
    if (index > (lbt.length - 1)) {
        index = 0;
    }
    img.src = lbt[index];
}
yuan1.onclick =function(){
    img.src = lbt[0]
}
yuan2.onclick =function(){
    img.src = lbt[1]
}
yuan3.onclick =function(){
    img.src = lbt[2]
}
yuan4.onclick =function(){
    img.src = lbt[3]
}