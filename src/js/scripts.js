function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
    );
}

$(document).ready(function () {
    $("#hide").click(function () {
        $("#google_translate_element").hide();
        $("#hide").hide();
        $("#show").show();
    });
    $("#show").click(function () {
        $("#google_translate_element").show();
        $("#hide").show();
        $("#show").hide();
    });
});






