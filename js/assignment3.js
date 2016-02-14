/**
 * Created by lutay.d on 13.02.2016.
 */
var smileCount = 5;
var smileMultiplayer = 1.2;
var leftSideDiv;
var rightSideDiv;
var theBody;
var topPoint;
var leftPoint;

function start_game(){
    leftSideDiv = document.getElementById("leftSide");
    rightSideDiv = document.getElementById("rightSide");
    theBody = document.getElementsByTagName("body")[0];
    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        leftSideDiv.lastChild.onclick = null;
    };
    gen_left_side(smileCount);
}

//Generates left side smiles
function gen_left_side(smileCount){
    var smileCounter = 0;
    var topArray = [];
    var leftArray = [];
    while(smileCounter < smileCount){
        var smileImg = document.createElement("img");
        //smileImg.setAttribute("id", "lSmile" + smileCounter);
        smileImg.setAttribute("src", "img/smile.png");
        topPoint = genNumberExcludedInArray(topArray);
        topArray.push(topPoint);
        leftPoint = genNumberExcludedInArray(leftArray);
        leftArray.push(leftPoint);
        smileImg.style.top = topPoint + "px";
        smileImg.style.left = leftPoint + "px";
        leftSideDiv.appendChild(smileImg);
        console.log("Added smile [" + topPoint + ", " + leftPoint + "]");
        smileCounter++;
    }
    leftSideDiv.lastChild.onclick = function generateNewStage(event){
        event.stopPropagation();
        smileCount = Math.floor(smileCount * smileMultiplayer);
        console.log("New smile count = " + smileCount);
        deleteNodes(leftSideDiv);
        deleteNodes(rightSideDiv);
        gen_left_side(smileCount);
    };

    make_right_side();
}

function make_right_side(){
    var leftSideDivTmp = leftSideDiv.cloneNode(true);
    leftSideDivTmp.removeAttribute("id");
    leftSideDivTmp.removeChild(leftSideDivTmp.lastChild);
    rightSideDiv.appendChild(leftSideDivTmp);
}

function genNumberExcludedInArray(arrayOfNumber){
    var number = Math.floor(Math.random() * 400);
    while(arrayOfNumber.indexOf(number) != -1){
        number = Math.floor(Math.random() * 400);
    }
    return number;
}

function deleteNodes(parentElm){
    while (parentElm.firstChild != null){
        parentElm.removeChild(parentElm.firstChild);
    }
}