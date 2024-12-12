function initialize() {

  $('#change_lang_en').click(() => {
    setLanguageCookie("en");
    location.reload();
  });

  $('#change_lang_ar').click(() => {
    setLanguageCookie("ar");
    location.reload();
  });

  var preferred_language = frappe.get_cookie("preferred_language");
  if (preferred_language) {
    if (preferred_language == "ar") {
      $(".language-switcher-image").attr("src", "/assets/dox_theme/images/ar.png");
      $('#change_lang_ar').hide();
    }
    else if (preferred_language == "en") {
      $(".language-switcher-image").attr("src", "/assets/dox_theme/images/en.png");
      $('#change_lang_en').hide();
    }
    else {
      $(".language-switcher-image").attr("src", "/assets/dox_theme/images/en.png");
    }
  } else {
    setLanguageCookie("en");
    $(".language-switcher-image").attr("src", "/assets/dox_theme/images/en.png");
    $('#change_lang_en').hide();
  }

}

// Custom function to set the preferred language in a cookie
function setLanguageCookie(language) {
  frappe.local.response.cookies['preferred_language'] = language;
  frappe.local.response.cookies['preferred_language']['max-age'] = 3600 * 24 * 365; // Set cookie to expire in 1 year
}

$(window).ready(initialize);
