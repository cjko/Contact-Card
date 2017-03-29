$(document).ready(function(){
	$('h3').hide()

	var card_handler = function() {
		$(this).children('.name').toggleClass('hidden');
		$(this).children('.click-for').toggleClass('hidden');
		$(this).children('.description').toggleClass('hidden');
	}

	$(document).on('mouseenter','.card', card_handler).on('mouseleave','.card', card_handler)

	$('form').submit(function(){

		var firstName = $("input[name='first_name']").val()
		var lastName = $("input[name='last_name']").val()
		var description = $("input[name='description']").val()

		if (firstName == '' || lastName == '' || description == '') {
			$('h3').toggle(true)
		} else {

			$('h3').toggle(false)



			$("input[name='first_name']").val('')
			$("input[name='last_name']").val('')
			$("input[name='description']").val('')

			$(this).parent().siblings().append('<div class="card"><p class="name">' + firstName + ' ' + lastName + '</p><p class="click-for">Hover for description!</p><p class="description hidden">'+description+'</div>');
			
		}
		return false
	})

})