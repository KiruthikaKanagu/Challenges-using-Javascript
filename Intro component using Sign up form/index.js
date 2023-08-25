
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const inputFields = form.querySelectorAll(".name-group input");
    const icons = form.querySelectorAll(".name-group i");
    const errorMessages = form.querySelectorAll(".text-right small");

    form.addEventListener("submit", function (event) {
        let isValid = true;

        inputFields.forEach(function (input, index) {
            if (input.value.trim() === "") {
                isValid = false;
                icons[index].style.visibility = "visible";
                errorMessages[index].style.visibility = "visible";
            } else {
                icons[index].style.visibility = "hidden";
                errorMessages[index].style.visibility = "hidden";
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    });

    inputFields.forEach(function (input, index) {
        input.addEventListener("input", function () {
            if (input.value.trim() === "") {
                icons[index].style.visibility = "visible";
                errorMessages[index].style.visibility = "visible";
            } else {
                icons[index].style.visibility = "hidden";
                errorMessages[index].style.visibility = "hidden";
            }
        });
    });
});











