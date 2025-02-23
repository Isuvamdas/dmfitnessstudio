document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const sections = document.querySelectorAll('.animate__animated');

const animateOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8; // Trigger animation when 80% of the section is visible

    if (sectionTop < triggerPoint) {
      section.classList.add('animate__fadeInUp'); // Add animation
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Trigger on page load
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate form submission
  alert('Thank you for your message! We will get back to you soon.');
  document.getElementById('contactForm').reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous error messages
  clearErrors();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate inputs
  let isValid = true;

  if (!name) {
    showError('nameError', 'Name is required.');
    isValid = false;
  }

  if (!email) {
    showError('emailError', 'Email is required.');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }

  if (!message) {
    showError('messageError', 'Message is required.');
    isValid = false;
  }

  // If form is valid, simulate submission
  if (isValid) {
    simulateSubmission();
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => {
    error.textContent = '';
    error.style.display = 'none';
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function simulateSubmission() {
  // Simulate a delay for submission (e.g., API call)
  setTimeout(() => {
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    successMessage.style.display = 'block';

    // Reset the form
    document.getElementById('contactForm').reset();
  }, 1000);
}
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous error messages
  clearErrors();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate inputs
  let isValid = true;

  if (!name) {
    showError('nameError', 'Name is required.');
    isValid = false;
  }

  if (!email) {
    showError('emailError', 'Email is required.');
    isValid = false;
  } else if (!validateEmail(email)) {
    showError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }

  if (!message) {
    showError('messageError', 'Message is required.');
    isValid = false;
  }

  // If form is valid, simulate submission
  if (isValid) {
    simulateSubmission();
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => {
    error.textContent = '';
    error.style.display = 'none';
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function simulateSubmission() {
  // Simulate a delay for submission (e.g., API call)
  setTimeout(() => {
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    successMessage.style.display = 'block';

    // Reset the form
    document.getElementById('contactForm').reset();
  }, 1000);
}
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const errorMessages = document.querySelectorAll('.error-message');
  const successMessage = document.querySelector('.success-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    errorMessages.forEach((error) => (error.style.display = 'none'));

    // Validate form fields
    let isValid = true;

    // Validate Name
    const nameInput = form.querySelector('input[name="name"]');
    if (!nameInput.value.trim()) {
      const nameError = form.querySelector('.name-error');
      nameError.style.display = 'block';
      isValid = false;
    }

    // Validate Email
    const emailInput = form.querySelector('input[name="email"]');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
      const emailError = form.querySelector('.email-error');
      emailError.style.display = 'block';
      isValid = false;
    }

    // Validate Message
    const messageInput = form.querySelector('textarea[name="message"]');
    if (!messageInput.value.trim()) {
      const messageError = form.querySelector('.message-error');
      messageError.style.display = 'block';
      isValid = false;
    }

    // If form is valid, show success message
    if (isValid) {
      successMessage.style.display = 'block';
      form.reset(); // Clear the form

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }
  });
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send data to SheetDB API
  fetch('https://sheetdb.io/api/v1/5wqywpsyap3pi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      // Handle success
      document.getElementById('successMessage').innerHTML = 'Thank you! Your message has been sent.';
      document.getElementById('successMessage').style.color = 'green';
      document.getElementById('contactForm').reset(); // Clear the form
    })
    .catch((error) => {
      // Handle error
      document.getElementById('successMessage').innerHTML = 'Oops! Something went wrong. Please try again.';
      document.getElementById('successMessage').style.color = 'red';
      console.error('Error:', error);
    });
});