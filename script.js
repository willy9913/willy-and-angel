// Function to get query parameter
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the guest's name from the query parameter
const guestName = getQueryParameter('name');

// Update the guest name in the invitation
const guestNameElement = document.getElementById('guest-name');
if (guestName) {
    guestNameElement.textContent = `${decodeURIComponent(guestName)},`;
}

document.getElementById('open-invitation').addEventListener('click', function() {
    // Hide the first page
    document.getElementById('first-page').style.display = 'none';

    // Show the invitation details
    document.getElementById('second-page').style.display = 'flex';

    // Play the background music
    var audio = document.getElementById('background-music');
    audio.play();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 5 seconds
showSlide(currentSlide); // Show the first slide initially

// Set the target date (June 14, 2025)
const targetDate = new Date('June 14, 2025 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    var timeRemaining = targetDate - now;

    // If the countdown is over, stop it
    if (timeRemaining <= 0) {
        timeRemaining=0;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}, 1000); // Update every second




let submitted = false;

// When the iframe finishes loading (i.e. Google Form redirect), show thank-you
document.getElementById('hidden_iframe').addEventListener('load', function () {
  if (submitted) {
    document.getElementById('thank-you').style.display = 'block';
  }
});

fetch('https://opensheet.elk.sh/1PTq4FavIvAOxEmzK-d-oSrFaQM_1jgC97L5sKYWCeMQ/Form%20Responses%201')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('wishes-list');
      data.forEach(entry => {
        const name = entry["What are the names of people attending?"]; 
        const wish = entry["Wishes"]; 

        if (name && wish) {
          const li = document.createElement('li');
          li.className = 'wish-card';
          li.innerHTML = `
            <div class="wish-name">${name}</div>
            <div class="wish-message">${wish}</div>
          `;
          list.appendChild(li);
        }
      });
    });


let currentSlidingPic = 0;
const slidingPics = document.querySelectorAll('.slidingPic');

function showSlide2(index) {
    slidingPics.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // Disable prev button on first slide
    prevBtn.classList.toggle('disabled', index === 0);
    // Disable next button on last slide
    nextBtn.classList.toggle('disabled', index === slidingPics.length - 1);
}

function changeSlide(direction) {
    const newIndex = currentSlidingPic + direction;

    if (newIndex >= 0 && newIndex < slidingPics.length) {
        currentSlidingPic = newIndex;
        showSlide2(currentSlidingPic);
    }
}


let currentSlidingNews= 0;
const slidingNews = document.querySelectorAll('.slidingNews');
function changeSlideNews(direction) {
  const newIndex = currentSlidingNews + direction;

  if (newIndex >= 0 && newIndex < slidingNews.length) {
    currentSlidingNews = newIndex;
      showSlideNews(currentSlidingNews);
  }
}

function showSlideNews(index) {
  slidingNews.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
  });

  // Disable prev button on first slide
  prevBtn.classList.toggle('disabled', index === 0);
  // Disable next button on last slide
  nextBtn.classList.toggle('disabled', index === slidingNews.length - 1);
}