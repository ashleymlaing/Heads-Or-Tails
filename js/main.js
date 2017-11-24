

//3 event listeners for each button
document.getElementById('heads').onclick = theyChoiceHeads;
document.getElementById('tails').onclick=theyChoiceTails;

//functions
var historyList = [];

var scorePlayerOne = 0;


var scorePlayerTwo = 0;





//var flipHeads = Math.random();
//if(flipHeads < = 0.50) {
//    flipHeads = "win";
//  } else{
//    flipHeads = "lose";
//}
//function for heads beating tails(if heads is clicked)
function theyChoiceHeads () {
//user choice compare to random computer choice
	$('.winner').empty();
	var playerChoice = Math.random();
  	if(playerChoice <= .5){
    playerChoice = "Heads";
		$(".spinning").hide();
		$(".coinHead").show();
		$('.coinTails').hide();
		historyList.push(playerChoice);
		$('section.coin').show();
    $('.winner').append("<p>Heads wins, Tails lost</p>");
		scorePlayerOne = scorePlayerOne + 1;
		document.getElementById('player1').innerHTML = scorePlayerOne;
		setInterval(function(){
			$('.spinning').show();
			$('.coinTails').hide();
			$('.coinHead').hide();
			$("section.coin").hide();
		},4000);

    }
    else{
    playerChoice = "Tails";
		$(".spinning").hide();
		$(".coinTails").show();
		$(".coinHead").hide();
		$('section.coin').show();
    $('.winner').append("<p>Tails wins, Heads lost</p>");
		historyList.push(playerChoice);
		scorePlayerTwo = scorePlayerTwo + 1;
		document.getElementById('player2').innerHTML = scorePlayerTwo;
		setInterval(function(){
			$('.spinning').show();
			$('.coinTails').hide();
			$('.coinHead').hide();
			$("section.coin").hide();
		},4000);



    }
  }

//function for when tails clicked
function theyChoiceTails () {
//user choice compare to random computer choice
	$('.winner').empty();
	var playerChoice = Math.random();
  	if(playerChoice <= .5){
    playerChoice = "Tails";
		$(".spinning").hide();
		$(".coinHead").hide();
		$('.coinTails').show();
		$('section.coin').show();
    $('.winner').append("<p>Tails wins,Heads lose</p>");
		historyList.push(playerChoice);
		scorePlayerOne = scorePlayerOne + 1;
		document.getElementById('player1').innerHTML = scorePlayerOne;
		setInterval(function(){
			$('.spinning').show();
			$('.coinTails').hide();
			$('.coinHead').hide();
			$("section.coin").hide();
		},4000);
    }
    else{
    playerChoice = "Heads";
		$(".spinning").hide();
		$(".coinHead").show();
		$('.coinTails').hide();
		$('section.coin').show();
    $('.winner').append("<p>Heads wins, Tails lose</p>");
		historyList.push(playerChoice);
		scorePlayerTwo = scorePlayerTwo + 1;
		document.getElementById('player2').innerHTML = scorePlayerTwo;
		setInterval(function(){
			$('.spinning').show();
			$('.coinTails').hide();
			$('.coinHead').hide();
			$("section.coin").hide();
		},4000);
    }
  }
//function for when history is clicked

$('#history').on("click",function(){
	$('li').remove()
	$(".spinning").show();
	$(".coinHead").hide();
	$('.coinTails').hide();
	$('ul').show();
	historyList.forEach(function(element){
  $('ul').append("<li>"+element+"</li>");
	setInterval(function(){
		$('ul').hide();
	},5000)
  })
});
