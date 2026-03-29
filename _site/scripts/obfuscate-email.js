(function obfuscateEmails() {
  const links = document.querySelectorAll('.email-link');

  links.forEach(link => {
    const encodedData = link.getAttribute('data-contact');
    
    if (encodedData) {
      // 3. Decode and apply to this specific link
      const email = atob(encodedData);
      link.href = 'mailto:' + email;
      link.innerText = email;
    }
  });
})();

// easter egg 🥚