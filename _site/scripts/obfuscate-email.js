(function obfuscateEmail() {
  const link = document.querySelector('.email-link');
  if (link && link.getAttribute('data-contact')) {
    const email = atob(link.getAttribute('data-contact'));
    link.href = 'mailto:' + email;
    link.innerText = email;
  }
})();

// easter egg 🥚