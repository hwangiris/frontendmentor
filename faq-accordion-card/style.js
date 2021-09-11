window.addEventListener('DOMContentLoaded', () => {
	const contents = document.querySelectorAll('.accordion-panel');
	Array.prototype.forEach.call(contents, c => {
		c.dataset.height = c.offsetHeight;
		c.setAttribute('style', 'height: 0');
	});
	const titles = document.querySelectorAll('.accordion-head');
	Array.prototype.forEach.call(titles, t => {
		t.addEventListener('click', e => {
			const active = document.querySelectorAll('.active');
			Array.prototype.forEach.call(active, act => {
				act.classList.remove('active');
				act.parentNode.querySelector('.accordion-panel').setAttribute('style', 'height: 0');
			})
			e.target.classList.toggle('active');
			const content = e.target.parentNode.querySelector('.accordion-panel');
			const height = content.dataset.height;
			if (e.target.classList.contains('active')) {
				content.setAttribute('style', 'height: ' + height + 'px');
			} else {
				content.setAttribute('style', 'height: 0');
			}
		});
		if (t.dataset.expanded === 'true') {
			t.click()
		}
	});
});
