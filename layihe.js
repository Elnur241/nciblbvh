$(document).ready(function(){

    // $('.owl-carousel').owlCarousel({
    //     // loop:true,
    //     // margin:10,
    //     center:true,
    //     nav:true,
        
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:2
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // });


    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:3 
            }
        }
    });
})