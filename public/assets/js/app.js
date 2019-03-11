$(function () {
    console.log("app.js running");
    $(".sampledBtn").click(function () {
        var id = parseInt($(this).attr("id"));
        var newSampled = { sampled: true };
        console.log(newSampled);


        console.log(`button ID: ${id}`);
        
        $.ajax(`/api/whiskey/${id}`, {
            type: "PUT",
            data: newSampled
        }).then(() => {
            console.log(`changed sampled to `, newSampled);
            location.reload();
        });
    });
});
