$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsiveClass: true,
        navText: ['<button class="prev-button"></button>','<button class="next-button"></button>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: true
            },
            1200: {
                items: 3,
                nav: true
            },
            1600: {
                items: 4,
                nav: true,
            }
        }
    });
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -22.9115543, lng: -43.3191242 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}