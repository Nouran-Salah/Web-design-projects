var arrowup = document.getElementById('arrowup');
var countersStarted = false; // A flag to ensure counters run only once

window.addEventListener('scroll', function(e) {
    // Toggle the arrow visibility based on scroll position
    (this.document.documentElement.scrollTop > 300) ?
    arrowup.style.display = "block" :
    arrowup.style.display = "none";

    // Start the counters only if the scroll position is greater than 800
    if (this.document.documentElement.scrollTop >1420 && !countersStarted) {
        countersStarted = true; // Set flag to true to prevent counters from running again

        // Counter 1
        var counter1 = document.getElementById('counter1');
        var n1 = 0;
        var set1 = setInterval(() => {
            if (n1 >= 8000 ) clearInterval(set1);
            counter1.innerText = n1;
            n1 += 100;
        }, 12);

        // Counter 2
        var counter2 = document.getElementById('counter2');
        var n2 = 0;
        var set2 = setInterval(() => {
            if (n2 >= 810) clearInterval(set2);
            counter2.innerText = n2;
            n2 += 10;
        }, 12);

        // Counter 3
        var counter3 = document.getElementById('counter3');
        var n3 = 0;
        var set3 = setInterval(() => {
            if (n3 >= 2000) clearInterval(set3);
            counter3.innerText = n3;
            n3 += 50;
        }, 27);

        // Counter 4
        var counter4 = document.getElementById('counter4');
        var n4 = 0;
        var set4 = setInterval(() => {
            if (n4 >= 20) clearInterval(set4);
            counter4.innerText = n4;
            n4 += 1;
        }, 30);
    }
});





$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
       
        margin: 20,
        nav: true,
        loop:true,
        navText: ["<i class='fa-solid fa-left-long bg-primary text-center mx-5 p-2 rounded-start-pill text-white'></i>", '<i class="fa-solid bg-primary me-0 p-2 text-center rounded-end-pill fa-right-long text-white"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
              items : 1
              
    },
            // breakpoint from 480 up
            480: {
              items:2
    },
            // breakpoint from 768 up
            768: {
               items: 2
    }
        }
    });
});

