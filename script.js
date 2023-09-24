const app = document.getElementById('app');
const contentDiv = document.getElementById('content');
const homeTemplate = document.getElementById('home-template').content.cloneNode(true);
const aboutTemplate = document.getElementById('about-template').content.cloneNode(true);
const contactTemplate = document.getElementById('contact-template').content.cloneNode(true);

function showHomePage() {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(homeTemplate);
}

function showAboutPage() {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(aboutTemplate);
}

function showContactPage() {
  contentDiv.innerHTML = '';
  contentDiv.appendChild(contactTemplate);
}

function navigateTo(page) {
  if (page === 'home') {
    showHomePage();
  } else if (page === 'about') {
    showAboutPage();
  } else if (page === 'contact') {
    showContactPage();
  }
}

// Initially show the Home page
showHomePage();

// Event listener for navigation clicks
app.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const pageId = event.target.getAttribute('href').substring(1);
    navigateTo(pageId);
  }
});
