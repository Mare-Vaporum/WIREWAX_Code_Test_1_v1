//      INITIAL CODE - DON'T EDIT THIS    //
var myTag = $('#myTag');
var myOverlay = $('#myOverlay');
var tagStartTime = 2000;
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
setTimeout(hideTag, tagStartTime + tagDuration);
setTimeout(animateOutTag, tagStartTime + tagDuration - tagAnimateOutTime);
//     END OF INITIAL CODE      //


//    Write/edit your code here     //

function showTagContent() {
  console.log("showTagContent");
}

function animateOutTagContent() {
  console.log("animateOutTagContent");
}

function hideTagContent() {
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
myTag.css('background', 'green');
myOverlay.css('background', 'white');
