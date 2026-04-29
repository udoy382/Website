// GET THE MODEL
var modal = document.getElementById("modal");

// GET THE IMAGE AND INSERT IT INSIDE THE MODEL
var images = document.getElementsByClassName("gallery-image");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// LOOP THROUGH ALL IMAGES
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt || "";
  };
}

// GET THE <span> ELEMENT THAT CLOSES THE MODAL
var span = document.getElementsByClassName("close")[0];

// WHEN THE USER CLICKS ON <span> (x), CLOSE THE MODAl
span.onclick = function () {
  modal.style.display = "none";
};

// CLOSE MODAL WHEN CLICKING OUTSIDE THE ODAL CONTENT
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
