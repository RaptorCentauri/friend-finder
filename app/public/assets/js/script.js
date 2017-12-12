$(document).ready(function(){

$("#survey").submit(function(event) {
  event.preventDefault();

	// let newName = {
		// name: $("#survey [name=name]").val().trim(),
		// photoPath: $("#survey [name=photo]").val().trim(),
		// q1: $("#survey [name=q1]:checked").val(),
		// q2: $("#survey [name=q2]:checked").val(),
		// q3: $("#survey [name=q3]:checked").val(),
		// q4: $("#survey [name=q4]:checked").val(),
		// q5: $("#survey [name=q5]:checked").val(),
		// q6: $("#survey [name=q6]:checked").val(),
		// q7: $("#survey [name=q7]:checked").val(),
		// q8: $("#survey [name=q8]:checked").val(),
		// q9: $("#survey [name=q9]:checked").val(),
		// q10: $("#survey [name=q10]:checked").val()
	// };

		let newName = {
			name: $("#survey [name=name]").val().trim(),
			photoPath: $("#survey [name=photo]").val().trim(),
			answer: [$("#survey [name=q1]:checked").val(), $("#survey [name=q2]:checked").val(), $("#survey [name=q3]:checked").val(),
			 				$("#survey [name=q4]:checked").val(),$("#survey [name=q5]:checked").val(), $("#survey [name=q6]:checked").val(),
							$("#survey [name=q7]:checked").val(), $("#survey [name=q8]:checked").val(), $("#survey [name=q9]:checked").val(),
							$("#survey [name=q10]:checked").val()],
			};




// console.log(newName);

$.post( "/api/friends", newName).done(function(data) {
  console.log(`Data Loaded: ${data}`);
});

});
});
