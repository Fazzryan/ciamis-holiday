const navMenuDindaf = document.getElementById("navMenuDindaf");
const navbarUlDindaf = document.querySelector(".navbar-ul-dindaf");
navMenuDindaf.addEventListener("click", function () {
    navMenuDindaf.classList.toggle("aktif")
    if (navbarUlDindaf.style.display == "block") {
        navbarUlDindaf.style.display = "none"
    } else {
        navbarUlDindaf.style.display = "block"
    }
});


$(document).ready(function () {
    $("#kirimUlasanDindaf").click(function () {
        let namaUlasan, ratingUlasan, emailUlasan, pesanUlasan;

        namaUlasan = $("#namaUlasanDindaf").val();
        ratingUlasan = $("#ratingUlasanDindaf").val();
        pesanUlasan = $("#pesanUlasanDindaf").val();

        $("#ulasanDindaf").append("<div>" + "<h3> <br>" + namaUlasan + " </h3> " + "<p> Rating : " + ratingUlasan + "</p>" + "<p> Pesan : " + pesanUlasan + "</p>" + "<br><hr>" + "</div>");

        namaUlasan = $("#namaUlasanDindaf").val("");
        emailUlasan = $("#emailUlasanDindaf").val("");
        pesanUlasan = $("#pesanUlasanDindaf").val("");
    });
});