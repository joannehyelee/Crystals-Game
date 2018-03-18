$(document).ready(function(){
    var $wins = 0;
    var $losses = 0;
    $("#wins").text($wins);
    $("#losses").text($losses);

    var startGame = function(){
        var $matchNum = Math.floor(Math.random() * 102) + 19;

        var $greenCrystal = Math.floor(Math.random() * 12) + 1;
        var $redCrystal = Math.floor(Math.random() * 12) + 1;
        var $yellowCrystal = Math.floor(Math.random() * 12) + 1;
        var $blueCrystal = Math.floor(Math.random() * 12) + 1;

        var $totalScore = 0;

        $("#match-num").text($matchNum);
        $("#score").text($totalScore);

        var $crystalsArr = [$greenCrystal, $redCrystal, $yellowCrystal, $blueCrystal];

        for (var i = 0; i < $crystalsArr.length; i++) {
            var $crystalImage = $("<img>");
            $crystalImage.attr("src", "assets/images/crystal-" + i + ".jpg");
            $crystalImage.attr("class", "crystal-button");
            $crystalImage.attr("data-crystal", $crystalsArr[i]);
            $("#crystals").append($crystalImage);
        }

        $(".crystal-button").on("click", function(){

            $totalScore += parseInt($(this).attr("data-crystal"));
            $("#score").text($totalScore);
    
            if ($totalScore === $matchNum) {
                alert ("YAY you won!");
                $('.crystal-button').remove();
                $wins++;
                $("#wins").text($wins);
                startGame();
            }
            else if ($totalScore > $matchNum) {
                alert("SORRY you lost :(");
                $('.crystal-button').remove();
                $losses++;
                $("#losses").text($losses);
                startGame();
            }
        });
    }
    startGame();

});