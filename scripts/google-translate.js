function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en', // Default language of your site
    includedLanguages: 'en,es,fr,ro,ja,pt,zh-CN', // Supported languages
    layout: google.translate.TranslateElement.InlineLayout.VERTICAL
  }, 'google_translate_element');
}

