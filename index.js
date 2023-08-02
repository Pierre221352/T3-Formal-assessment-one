$(document).ready(function(){
    console.log("Hello");

    $("#hero-image").animate({top: '-=100px'});
});

$(document).ready(function(){
    console.log("Hello");

    $("#hero-image").animate({top:'-=100px'});
});
    $("#hero-image").animate({top:'-=100px'});

    $("#descriptionText").hide();

    $(".card").click(function(){

        $("#priceText").toggle();
        $("descriptionText").toggle();

        $(".card-img-top").toggleClass("small");
});    


const plants = [
    {
        "name": "Fikus Tree",
        "price": 350,
        "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
        "image": "plant1.png"
    },

    {
        "name": "White Sprite Succulent",
        "price": 200,
        "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
        "image": "plant2.png"
    },

    {
        "name": "Snake Plant",
        "price": 400,
        "description":  "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
        "image": "plant3.png"
    },

    {
        "name": "Parlour Palm",
        "price": 350,
        "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
        "image": "plant4.png"
    },

    {
        "name": "Japanese Maple",
        "price": 1200,
        "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
        "image": "plant5.png"
    },
];

$(document).ready(function(){
    console.log("Hello");

    $("#descriptionText").hide();
    loadPlants();
});

 for(let i = 0; i < plants.length; i++){
    const plant = plants[i];

    console.log(plant);

    $("#plantsContainer").append($("#plantCardTemplate").html());

    let currentChild = $("#plantContainer").children().eq(i+1);

    $(currentChild).find(".card-img-top").attr('src','assets/' + plant.image);
    $(currentChild).find("#nameText").text(plant.name);
    $(currentChild).find("priceText").text('R' + plant.price);
    $(currentChild).find("descriptionText").text(plant.description);

    $(currentChild).find("#descriptionText").hide();
 };

 $("#plantsContainer").on('click', '.card', function(){

    $(".card").click(function() {

        $(this).find("#priceText").toggle();
        $(this).find("#descriptionText").toggle();

        $("#priceText").toggle();
        $("#descriptionText").toggle();

        $(this).find(".card-img-top").toggleClass("small");
        $(".card-img-top").toggleClass("small");
    });
 });

    $(document).ready(function(){
    
        $(".remove-button").click(function() {
            $(this).closest("tr").remove();
        });   
});