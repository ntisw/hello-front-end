function changeBG1() {
    $("#title-bg").css('background-image', "url('rough-horn-2146181_1920.jpg')");
    $("#img-show").attr('src','rough-horn-2146181_1920.jpg');
    $("#name").addClass("color-light");
}
function changeBG2() {
    $("#title-bg").css('background-image', "url('dawn-190055_1280.jpg')");
    $("#img-show").attr('src','dawn-190055_1280.jpg');
    $("#name #major").css("color","black");
}
$(function(){
    $("#hello").click(function(){
        console.log("hello");
    });
    $("#set-name").click(function(){
        $("#name").text("Dome");
        console.log("Name was chaged to ",$("#name").text());
    });
    $("#get-name").click(function(){
        var name = $("#name").val();
        console.log("Name :"+name);
    });
    $("#add-hobby").click(function(){
        var hobby = $("#input-hobby").val();
        $("#hobby-list").append(`<li>${hobby}</li>`);
    })
    $("#clear-hobby").click(function(){
        $("#hobby-list").empty();
    });
    $("#toggle-bg").click(function(){
        var index = $("#toggle-bg").val();
        if (index == 0) {
            $("#toggle-bg").val(1);
            changeBG1();
        }
        else {
            $("#toggle-bg").val(0);
            changeBG2();
        }
    });
});



/*
function hello() {
    console.log("Hello JS");
}
function getDOM() {
    var name = document.getElementById('name').innerText;
    console.log("Name:", name, ". get name by js");
}
function setDOM() {
    document.getElementById('name').innerText = "Dome";
}
function addHobby() {
    var hobby = document.getElementById('input-hobby').value
    document.getElementById('hobby-list').innerHTML += `<li>${hobby}</li>`
}
function clearHobbys() {
    document.getElementById('hobby-list').innerHTML = ""
}
*/


