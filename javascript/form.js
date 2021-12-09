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
    });
});