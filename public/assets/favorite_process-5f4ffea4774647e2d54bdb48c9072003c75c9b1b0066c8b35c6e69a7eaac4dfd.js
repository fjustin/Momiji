var $heart = $("#like-button img");
$("#like-button").on("click", function () {
    var $likeSum = $("#like-sum")
    like_function(#{@article.id}, $(this), $heart, $likeSum)
});

function like_function(id, button, heart, sum) {
    if (button.hasClass("decrement")) {
        $.ajax({url: "/likes" + id, type: "delete", data: {article_id: id, dataType: "json"}})
            .done(function (data) {
                button.removeClass("decrement").addClass("increment")
                heart.attr("src", "/assets/images/none.png")
                sum.text(data["count"])
            })
    } else {
        $.ajax({url: "/likes", type: "post", data: {article_id: id, dataType: "json"}})
            .done(function (data) {
                button.removeClass("increment").addClass("decrement")
                heart.attr("src", "/assets/images/heart_red.png")
                sum.text(data["count"])
            })
    }
}
;
