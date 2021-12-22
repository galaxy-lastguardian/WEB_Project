class LastInfoPerson {
    constructor(na, ph, em) {
        this.na = na;
        this.ph = ph;
        this.em = em;
    }
}

$(document).ready(function () {
    if (localStorage.getItem("lastInfoPerson") != null) {
        let data = localStorage.getItem("lastInfoPerson");
        let info = JSON.parse(data);

        document.form.name.value = info.na;
        document.form.phone.value = info.ph;
        document.form.email.value = info.em;

    }
});

$(function() {
    $(".ajaxForm").submit(function (e) {
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function (response) {
                if (response.status === "success") {
                    alert("Мы приняли вашу заявку, спасибо!");
                } else {
                    alert("Произошла ошибка: " + response.message);
                }
            }
        });
        // -------LOCALSTORAGE------- //

        let fNa = document.form.name.value;
        let fPh = document.form.phone.value;
        let fEm = document.form.email.value;

        let lip = new LastInfoPerson(fNa, fPh, fEm);

        localStorage.setItem("lastInfoPerson", JSON.stringify(lip));

        document.form.comment.value = "";
        document.form.checkbox.value = false;
        // -------____________------- //
    });
});