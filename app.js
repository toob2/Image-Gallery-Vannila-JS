const currentImage = document.querySelector('#current');

const imgs = document.querySelectorAll('.imgs img');

const opacity = 0.65;

// set 1st image opacity
imgs[0].style.opacity = 0.65;


//Query selector all returns a node list, which basically works like an array, so we basically need to loop through these images and then add the event listener onto each image. we can use  the higher order method forEach for the node list


// we are gonna use the es6 arrow function as a callback
imgs.forEach(img => img.addEventListener('click', imgClick)
);

function imgClick(e){
  // reset the opacity of all the images, otherwise the clicked images will stay with low opacity
  imgs.forEach(img => img.style.opacity = 1);
  // change current image to src of clicked img
  current.src = e.target.src;
  // add fadeIn class
  current.classList.add('fade-in');
  // remove fadeIn class after 0.3s
  setTimeout(() => current.classList.remove('fade-in'), (300));
  // change the opacity to opacity var
  e.target.style.opacity = opacity;
};




