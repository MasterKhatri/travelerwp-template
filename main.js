		var myVar;

		function myFunction() {
		  myVar = setTimeout(showPage, 1000);
		}

		function showPage() {
		  document.getElementById("loader").style.display = "none";
		  document.getElementById("body").style.backgroundImage = "none";
		  document.getElementById("myDiv").style.display = "block";
		}


		$(document).ready(function(){
			$('#pills-profile-tab').on('click', function(){
				$('#pills-home-tab').removeClass('active2');
			});
			$('#pills-rental-tab').on('click', function(){
				$('#pills-home-tab').removeClass('active2');
			});
			$('#pills-contact-tab').on('click', function(){
				$('#pills-home-tab').removeClass('active2');
			});
			$('#pills-flight-tab').on('click', function(){
				$('#pills-home-tab').removeClass('active2');
			});

			$('#search').on('click', function(){

				$(this).css('background-color', 'black');

			});
		});

		
