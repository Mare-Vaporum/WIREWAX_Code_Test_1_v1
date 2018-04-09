//      INITIAL CODE - DON'T EDIT THIS    //
var myTag = $('#myTag');
var myOverlay = $('#myOverlay');
var tagStartTime = 2000;
var tagStartTime = 1000;

var tagDuration = 5000;
var tagAnimateOutTime = 1000;

function showTag() {
  myTag.addClass('show');
  myTag.show();
  showTagContent();
}

function animateOutTag() {
  myTag.addClass('animate-out');
  animateOutTagContent();
}

function hideTag() {
  myTag.removeClass('show');
  myTag.removeClass('animate-out');
  myTag.hide();
  hideTagContent();
}

function showOverlay() {
  myOverlay.addClass('show');
  myOverlay.show();
  showOverlayContent();
}

function closeOverlay() {
  myOverlay.addClass('animate-out');
  animateOutOverlayContent();
  setTimeout(function() {
    myTag.removeClass('show');
    myTag.removeClass('animate-out');
    myOverlay.hide();
    hideOverlayContent();
  }, 1000);
}

myTag.click(showOverlay);
setTimeout(showTag, tagStartTime);
// setTimeout(hideTag, tagStartTime + tagDuration);
// setTimeout(animateOutTag, tagStartTime + tagDuration - tagAnimateOutTime);
//     END OF INITIAL CODE      //


//    Write/edit your code here     //
var container = document.getElementById("myTag");

var tagHolder = document.createElement("div");
tagHolder.setAttribute("id", "tagHolder");
container.appendChild(tagHolder);

// a div to hold the svg
var SVGHolder = document.createElement("div");
SVGHolder.setAttribute("id", "SVGHolder");
tagHolder.appendChild(SVGHolder);

// this is the svg tag being created
var SVG = document.createElementNS("http://www.w3.org/2000/svg",'svg');
SVG.style.width = "100%";
SVG.style.height = "100%";
SVG.style.fill= "#FFFFFF";
SVG.setAttribute("id", "tagHotspot");
SVG.setAttribute("viewBox", "0 0 100 100");
SVG.setAttribute("preserveAspectRatio", "xMinYMin");
SVGHolder.appendChild(SVG);

// main outline of the svg
var mainSVGOutline = document.createElementNS("http://www.w3.org/2000/svg",'path');
mainSVGOutline.setAttribute("d", "M50,99.5l-1.3-1.8C47.4,95.9,16,53.1,16,34.7C16,15.8,31.2,0.5,50,0.5c18.8,0,34,15.4,34,34.2c0,18.3-31.4,61.2-32.7,63L50,99.5z M50,3.7c-17,0-30.8,13.9-30.8,31C19.2,50,44,85.6,50,94c6-8.4,30.8-44,30.8-59.3,C80.8,17.6,67,3.7,50,3.7z");

// the white circle
var SVGCircleBG = document.createElementNS("http://www.w3.org/2000/svg",'circle');
SVGCircleBG.setAttributeNS(null, 'cx', 50);
SVGCircleBG.setAttributeNS(null, 'cy', 35);
SVGCircleBG.setAttributeNS(null, 'r', 20);
SVGCircleBG.setAttributeNS(null, 'style', 'fill: none; stroke: white; stroke-width: 3px;' );

SVG.appendChild(mainSVGOutline);
SVG.appendChild(SVGCircleBG);

// Text box
var textHolder = document.createElement("div");
textHolder.setAttribute("id", "textHolder");
textHolder.innerHTML += "<span style='display: table; width: 100%; font-size: 1.2vw; font-style: italic'>click to learn about</span><span style='display: table; width: 100%; font-size: 2vw; font-style: italic'>THE LONDON EYE</span>";
tagHolder.appendChild(textHolder);


//initial states


// Functions
function showTagContent() {

  $('#tagHolder').addClass('grow');
  console.log("showTagContent");

}

function animateOutTagContent() {
  console.log("animateOutTagContent");
}

function hideTagContent() {
  $('#tagHolder').removeClass('grow');
  console.log("hideTagContent");
}

function showOverlayContent() {
  console.log("showOverlayContent");
}

function animateOutOverlayContent() {
  console.log("animateOutOverlayContent");
}

function hideOverlayContent() {
  console.log("hideOverlayContent");
}





// This is just here for you to see the tag more easily. You should delete this after starting working.
myOverlay.css('background', 'white');
