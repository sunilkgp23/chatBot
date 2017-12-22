var count=0;
var botURL="";

function sendMsg() {
	var msgInput=$("#inputMsg").val();
	$("#inputMsg").val("");
	if(msgInput!=""){
		count++;
		$('#displayMsg').append(
			$('<div/>').attr("id", "newDiv" + count)
			.addClass("userBox")
			.append("<p/>")
			.text(msgInput)
		);
		$("#displayMsg").scrollTop(function() { return this.scrollHeight; });
		var chatContent = document.getElementById("displayMsg").innerHTML;
		localStorage.setItem("chatContent", chatContent);
		botURL="https://www.personalityforge.com/api/chat/?apiKey=6nt5d1nJHkqbkphe&message="+msgInput+"&chatBotID=63906&externalID=chirag1";
		

		$.ajax({
			url: botURL,
			method: 'GET',
			async: true,
			dataType: "json"
		}).then(function (botData) {
			console.log(botData.message.message);
			count++;
			$('#displayMsg').append(
				$('<div/>').attr("id", "newDiv" + count)
				.addClass("botBox")
				.append("<p/>")
				.text(botData.message.message)
			);
			$("#displayMsg").scrollTop(function() { return this.scrollHeight; });
			var chatContent = document.getElementById("displayMsg").innerHTML;
			localStorage.setItem("chatContent", chatContent);
		});
	}	
}
 
$(window).load(function () {
	 document.getElementById("displayMsg").innerHTML = localStorage.getItem("chatContent");
	 $('#inputMsg').keypress(function (e) {
	 var key = e.which;
	 if(key == 13) 
	  {
		sendMsg();
		 $(this).val('').focus(); 
		 return false;
	  }
	});
});

