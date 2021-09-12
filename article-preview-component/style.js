var share = document.querySelector(".share-block"),
	button = document.querySelector(".icon-share");

button.addEventListener('click', e => {
	button.classList.toggle('active');
	if (share.classList.contains('show')) {
		share.classList.add('fadeOut')
		share.classList.remove('fadeIn')
		setTimeout(function(){
			share.classList.remove('show')
			share.classList.remove('fadeOut')
		}, 310)
	} else {
		share.classList.add('show')
		setTimeout(function(){
			share.classList.add('fadeIn')
		}, 5)
	}
});
