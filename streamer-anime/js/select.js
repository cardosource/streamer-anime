let itemsVisible = false;

$(".selected").click(() => {
    if (!itemsVisible) {
        $(".items").show(200);
        itemsVisible = true;
    } else {
        $(".items").hide(200);
        itemsVisible = false;
    }
});
