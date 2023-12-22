document.addEventListener("DOMContentLoaded", function () {

    //Por default damos click en la primera casilla
    // Obtener el elemento que deseas hacer clic
    var primeraUnidadSelect = document.getElementById("primeraUnidadSelect");

    // Simular un evento de clic en el primer elemento
    if (primeraUnidadSelect) {
        primeraUnidadSelect.click();
    }

    var selectElement = document.getElementById("unitSelect");
    var swiperSlides = document.querySelectorAll(".swiper-container-father");

    selectElement.addEventListener("change", function () {
        //Elementos seleccionados en el formulario
        var selectedUnits = Array.from(selectElement.selectedOptions).map(option => option.value);
        console.log('selectedUnits: ', selectedUnits);

        swiperSlides.forEach(function (slide) {
            var slideId = slide.getAttribute("identificador_select");
            if (selectedUnits.includes(slideId)) {
                slide.classList.add('hiddenCard');
            } else {
                slide.classList.remove('hiddenCard');
            }
        });
    });
});