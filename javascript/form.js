$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    alert("Мы приняли вашу заявку, спасибо!");
                }else{
                    alert("Произошла ошибка: " + response.message);
                }
            }
        });
        // -----LOCALSTORAGE-----
        let fNa = document.getElementById("form-name").value;
        let fPh = document.getElementById("form-phone").value;
        let fEm = document.getElementById("form-email").value;

        const LastInfoPerson = {
            name: fNa,
            phone: fPh,
            email: fEm
        }

        localStorage.setItem('lastInfoPerson', JSON.stringify(LastInfoPerson));
        console.log(localStorage.getItem('lastInfoPerson'));
        // -----___________-----
    });
});