// PERSONAL JS
$(document).ready(function(){
	AOS.init();

	// LAZY IMAGES
		// selecione todas as imagens da página
		const images = document.querySelectorAll('img');
	
		// loop através de todas as imagens e adicione o atributo loading='lazy'
		images.forEach(function(img) {
		img.setAttribute('loading', 'lazy');
		});
	
		// LAZY SECTIONS
		const sections = document.querySelectorAll('section');
		sections.forEach(function(section) {
			section.setAttribute('loading', 'lazy');
		});
		
		  // PROGRESS BAR
progressBar = function(){
	$('#progress-bar').animate({
		width:'89%'
	}, 800);
	}
	setTimeout(progressBar, 300);
});