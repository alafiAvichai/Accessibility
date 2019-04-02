



// add FontAwesome to <head>

var head = document.getElementsByTagName("head")[0];
var fontAwesome = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>';
head.innerHTML += fontAwesome;



var style = document.createElement("style");

style.innerHTML = `.bodyColor-Contrast {
                        background-color: rgb(12, 12, 12) !important;
                        color: #0072e4 !important;
                    }
                    
                    .button-Contrast {
                        background: rgb(114, 0, 19) !important;
                        color: white !important;
                        border: 1px solid red !important;
                    }

                    .bodyColor-Contrast-reverse {
                        background-color: rgb(12, 12, 12) !important;
                        color: #f1e100 !important;
                    }
                    
                    .button-bodyColor-Contrast-reverse {
                        background-color: rgb(12, 12, 12) !important;
                        color: #f1e100 !important;
                        border: 1px solid white !important;
                    }
                    
                    .white-background {
                        background: white !important;
                        color: rgb(0, 0, 0) !important !important;
                    }
                    
                    .link-bolt {
                        text-decoration: underline !important;
                    }
                    
                    .read-font {
                        font-family: Arial, Helvetica, sans-serif !important;
                    }
                    
                    `;


head.appendChild(style);




var body = document.getElementsByTagName("body")[0];
body.style.fontSize = "16px";

var h1 = document.getElementsByTagName("h1");

var h2 = document.getElementsByTagName("h2");

var h3 = document.getElementsByTagName("h3");

var h4 = document.getElementsByTagName("h4");

var h5 = document.getElementsByTagName("h5");

var h6 = document.getElementsByTagName("h6");

var aTag = document.getElementsByTagName("a");

var paraTag = document.getElementsByTagName("p");

var buttonTag = document.getElementsByTagName("button");


// create div container

var containerDivAccissebility = document.createElement("div");
containerDivAccissebility.setAttribute("id", "containerDivAccissebility");
containerDivAccissebility.style.minWidth = "175px"
containerDivAccissebility.style.minHeight = "175px"
containerDivAccissebility.style.position = "fixed"
containerDivAccissebility.style.top = "35%";
containerDivAccissebility.style.left = "0%";
document.body.append(containerDivAccissebility)


// create and append Button 

var button = document.createElement("button");
button.setAttribute("id", "accessibleBtn");

button.style.fontSize = "36px";
button.style.color = "rgb(109, 109, 109)";
button.style.background = "none";
button.style.border = "none";
button.style.cursor = "pointer";
button.addEventListener("focus", function () {
    this.style.outline = "none";
});


containerDivAccissebility.appendChild(button);


// set icon in button

var accessibilityBtn = document.getElementById("accessibleBtn");
accessibilityBtn.innerHTML = '<i class="fa fa-wheelchair"></i>';


// hover effect on button


accessibilityBtn.onmouseover = function () {
    this.style.color = "#212529"
}

accessibilityBtn.onmouseleave = function () {
    this.style.color = "rgb(109, 109, 109)"
}


// create  div Accessible


var div = document.createElement("div");
div.setAttribute("id", "divAccessible");

div.style.border = "1px solid #333";
div.style.visibility = "hidden";


containerDivAccissebility.appendChild(div);


// create ul

var ul = document.createElement("ul");
ul.setAttribute("id", "ulAccessible");
ul.style.padding = "0 0 0 40px";
ul.style.textAlign = "right"
ul.style.margin = "5px"
divAccessible.appendChild(ul);


// create li > a

var allLi = ' <li class="accessibileLi"><a class="aTagAccessibility" href="#" id="bigFontAccessibility">הגדל טקסט <i class="fas fa-search-plus"></i></a></li>';
allLi += '<li class="accessibileLi"><a class="aTagAccessibility" href="#" id="smallFontAccessibility">הקטן טקסט <i class="fas fa-search-minus"></i></a></li>';
allLi += '<li class="accessibileLi"><a class="aTagAccessibility" href="#" id="ContrastAccessibility">ניגודיות גבוהה <i class="fas fa-adjust"></i></a></li>';
allLi += '<li class="accessibileLi"><a class="aTagAccessibility" href="#" id="ContrastReverseAccessibility">ניגודיות הפוכה <i class="far fa-eye"></i></a></li>';
allLi += '<li class="accessibileLi"><a class="aTagAccessibility" href="#" id="whitBackroundAccessibility">רקע בהיר <i class="fas fa-chalkboard"></i></a></li>';
allLi += '<li class="accessibileLi"><a class="aTagAccessibility" href="#" id="boltLinkAccessibility">הדגשת קישורים<i class="fas fa-link"></i></a></li>';
allLi += '<li class="accessibileLi"><a class="aTagAccessibility" href="#" id="readFontAccessibility">פונט קריא <i class="fas fa-font"></i></a></li>';
allLi += '<li class="accessibileLi"><a class="aTagAccessibility" href="#" id="resetAccessibility">איפוס<i class="fas fa-undo-alt"></i></a></li>'
ul.innerHTML = allLi;

var li = document.getElementsByClassName("accessibileLi");
var aTagClass = document.getElementsByClassName("aTagAccessibility");

// style for li

for (var i = 0; i < li.length; i++) {
    li[i].style.listStyle = "none";
    li[i].style.padding = "5px";
    li[i].style.fontSize = "16px";
    li[i].style.fontFamily = "Arial, Helvetica, sans-serif";
    
}

// style for a tag

for (var i = 0; i < aTagClass.length; i++) {
    aTagClass[i].style.color = "#333";
    aTagClass[i].style.textDecoration = "none";
}

// on click button
var checkSlideDiv = true;

accessibilityBtn.onclick = function () {

    if (checkSlideDiv) {
        div.style.visibility = "visible";
        checkSlideDiv = false;
    } else {
        div.style.visibility = "hidden";
        checkSlideDiv = true;
    }
}

// get all a tag id

var bigFontAccessibility = document.getElementById("bigFontAccessibility");
var smallFontAccessibility = document.getElementById("smallFontAccessibility");
var ContrastAccessibility = document.getElementById("ContrastAccessibility");
var ContrastReverseAccessibility = document.getElementById("ContrastReverseAccessibility");
var whitBackroundAccessibility = document.getElementById("whitBackroundAccessibility");
var boltLinkAccessibility = document.getElementById("boltLinkAccessibility");
var readFontAccessibility = document.getElementById("readFontAccessibility");
var resetAccessibility = document.getElementById("resetAccessibility");


// stat to function eath a tag


bodyFontSize = parseFloat(body.style.fontSize);  // parseFloat take of the px from the font-size
console.log(bodyFontSize);


// plus font size

bigFontAccessibility.onclick = function () {
    if (bodyFontSize <= 38) {
        bodyFontSize += 2;
        body.style.fontSize = bodyFontSize + "px"
        console.log(bodyFontSize);
    }
}

// minus font size

smallFontAccessibility.onclick = function () {
    if (bodyFontSize >= 12) {
        bodyFontSize -= 2;
        body.style.fontSize = bodyFontSize + "px"
        console.log(bodyFontSize);
    }
}

//  Contrast Accessibility - ניגודיות הפוכה

var checkContrastAccessibility = true;


ContrastAccessibility.onclick = function () {
    if (checkContrastAccessibility) {

        checkContrastAccessibility = false;
        body.classList.add("bodyColor-Contrast");

        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.add("bodyColor-Contrast");
        }

        for (var i = 0; i < paraTag.length; i++) {
            paraTag[i].classList.add("bodyColor-Contrast");
        }

        for (var i = 0; i < buttonTag.length; i++) {
            buttonTag[i].classList.add("button-Contrast");
        }


    } else {
        checkContrastAccessibility = true;

        body.classList.remove("bodyColor-Contrast");

        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.remove("bodyColor-Contrast");
        }

        for (var i = 0; i < paraTag.length; i++) {
            paraTag[i].classList.remove("bodyColor-Contrast");
        }


        for (var i = 0; i < buttonTag.length; i++) {
            buttonTag[i].classList.remove("button-Contrast");
        }

    }
}

var checkContrastReverseAccessibility = true;

// Contrast Accessibility reverse

ContrastReverseAccessibility.onclick = function () {
    if (checkContrastReverseAccessibility) {

        checkContrastReverseAccessibility = false;
        body.classList.add("bodyColor-Contrast-reverse");

        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.add("bodyColor-Contrast-reverse");
            aTag[i].style.color = "#f1e100";
        }

        for (var i = 0; i < paraTag.length; i++) {
            paraTag[i].classList.add("bodyColor-Contrast-reverse");
        }

        for (var i = 0; i < buttonTag.length; i++) {
            buttonTag[i].classList.add("button-bodyColor-Contrast-reverse");
        }


    } else {
        checkContrastReverseAccessibility = true;

        body.classList.remove("bodyColor-Contrast-reverse");

        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.remove("bodyColor-Contrast-reverse");
            aTag[i].style.color = "#333";
        }

        for (var i = 0; i < paraTag.length; i++) {
            paraTag[i].classList.remove("bodyColor-Contrast-reverse");
        }


        for (var i = 0; i < buttonTag.length; i++) {
            buttonTag[i].classList.remove("button-bodyColor-Contrast-reverse");
        }

    }
}



// light backround

var checkwhitBackroundAccessibility = true;


whitBackroundAccessibility.onclick = function () {
    if (checkwhitBackroundAccessibility) {

        checkwhitBackroundAccessibility = false;
        body.classList.add("white-background");

        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.add("white-background");
            
        }

        for (var i = 0; i < paraTag.length; i++) {
            paraTag[i].classList.add("white-background");
        }

        for (var i = 0; i < buttonTag.length; i++) {
            buttonTag[i].classList.add("white-background");
        }

        // all title tag

        for (var i = 0; i < h1.length; i++) {
            h1[i].classList.add("white-background");
        }

        for (var i = 0; i < h2.length; i++) {
            h2[i].classList.add("white-background");
        }

        for (var i = 0; i < h3.length; i++) {
            h3[i].classList.add("white-background");
        }

        for (var i = 0; i < h4.length; i++) {
            h4[i].classList.add("white-background");
        }

        for (var i = 0; i < h5.length; i++) {
            h5[i].classList.add("white-background");
        }

        for (var i = 0; i < h6.length; i++) {
            h6[i].classList.add("white-background");
        }




    } else {
        checkwhitBackroundAccessibility = true;

        body.classList.remove("white-background");

        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.remove("white-background");
            aTag[i].style.color = "#333";
        }

        for (var i = 0; i < paraTag.length; i++) {
            paraTag[i].classList.remove("white-background");
        }


        for (var i = 0; i < buttonTag.length; i++) {
            buttonTag[i].classList.remove("white-background");
        }

        // all title tag

        for (var i = 0; i < h1.length; i++) {
            h1[i].classList.remove("white-background");
        }

        for (var i = 0; i < h2.length; i++) {
            h2[i].classList.remove("white-background");
        }

        for (var i = 0; i < h3.length; i++) {
            h3[i].classList.remove("white-background");
        }

        for (var i = 0; i < h4.length; i++) {
            h4[i].classList.remove("white-background");
        }

        for (var i = 0; i < h5.length; i++) {
            h5[i].classList.remove("white-background");
        }

        for (var i = 0; i < h6.length; i++) {
            h6[i].classList.remove("white-background");
        }


    }
}

//  bolt link


var checkBoltLinkAccessibility = true;

boltLinkAccessibility.onclick = function () {
    if (checkBoltLinkAccessibility) {

        checkBoltLinkAccessibility = false;
        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.add("link-bolt");

        }


    } else {
        checkBoltLinkAccessibility = true;


        for (var i = 0; i < aTag.length; i++) {
            aTag[i].classList.remove("link-bolt");

        }

    }
}


// read font 

var checkReadFontAccessibility = true;

readFontAccessibility.onclick = function () {
    if (checkReadFontAccessibility) {

        checkReadFontAccessibility = false;

        body.classList.add("read-font");

    } else {
        checkReadFontAccessibility = true;

        body.classList.remove("read-font");
    }
}



resetAccessibility.onclick = function () {
    
    
//  Contrast Accessibility - ניגודיות הפוכה

    body.classList.remove("bodyColor-Contrast");

    for (var i = 0; i < aTag.length; i++) {
        aTag[i].classList.remove("bodyColor-Contrast");
    }

    for (var i = 0; i < paraTag.length; i++) {
        paraTag[i].classList.remove("bodyColor-Contrast");
    }


    for (var i = 0; i < buttonTag.length; i++) {
        buttonTag[i].classList.remove("button-Contrast");
    }
    

// Contrast Accessibility reverse


    body.classList.remove("bodyColor-Contrast-reverse");

    for (var i = 0; i < aTag.length; i++) {
        aTag[i].classList.remove("bodyColor-Contrast-reverse");
        aTag[i].style.color = "#333";
    }

    for (var i = 0; i < paraTag.length; i++) {
        paraTag[i].classList.remove("bodyColor-Contrast-reverse");
    }


    for (var i = 0; i < buttonTag.length; i++) {
        buttonTag[i].classList.remove("button-bodyColor-Contrast-reverse");
    }


// light backround

console.log("123123123");

    body.classList.remove("white-background");

    for (var i = 0; i < aTag.length; i++) {
        aTag[i].classList.remove("white-background");
        aTag[i].style.color = "#333";
    }

    for (var i = 0; i < paraTag.length; i++) {
        paraTag[i].classList.remove("white-background");
    }


    for (var i = 0; i < buttonTag.length; i++) {
        buttonTag[i].classList.remove("white-background");
    }

    // all title tag

    for (var i = 0; i < h1.length; i++) {
        h1[i].classList.remove("white-background");
    }

    for (var i = 0; i < h2.length; i++) {
        h2[i].classList.remove("white-background");
    }

    for (var i = 0; i < h3.length; i++) {
        h3[i].classList.remove("white-background");
    }

    for (var i = 0; i < h4.length; i++) {
        h4[i].classList.remove("white-background");
    }

    for (var i = 0; i < h5.length; i++) {
        h5[i].classList.remove("white-background");
    }

    for (var i = 0; i < h6.length; i++) {
        h6[i].classList.remove("white-background");
    }




//  bolt link

    for (var i = 0; i < aTag.length; i++) {
        aTag[i].classList.remove("link-bolt");

    }


//  read font

    body.classList.remove("read-font");
}
