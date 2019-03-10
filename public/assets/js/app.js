$(function () {
    console.log("app.js running");
    $(".sampledBtn").click(function () {
        var buttonID = parseInt($(this).attr("id"));

        console.log(`button ID: ${buttonID}`);
        
        $.ajax(`/api/whiskey/${buttonID}`, {
            type: "PUT",
            id: buttonID
        }).then(() => {
            console.log(`changed sampled value of id: ${buttonID} to true`);
            location.reload();
        });
    });
});
