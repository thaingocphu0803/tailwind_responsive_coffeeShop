const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon');
const topMenuItem = document.querySelectorAll('.ct-top-menu-item');

document.addEventListener('click', function(e){
	if(toggleTopMenuIcon.contains(e.target)){
		//click to toggle top menu icon
		topMenu.classList.toggle('hidden');
		topMenu.classList.toggle('ct-topmenu-expanded');
	}else{
		//click outsite toggle top menu icon
		if(topMenu.classList.contains('ct-topmenu-expanded')){
			topMenu.classList.remove('ct-topmenu-expanded');
			topMenu.classList.add('hidden');
		}
	}

	topMenuItem.forEach(item => {
		if(item.contains(e.target) || item.contains(e.target.firstChild)){
			item.classList.add('ct-top-menu-item-active');
			localStorage.setItem('activeLink', item.dataset.id);
		}
	});
})

document.addEventListener('DOMContentLoaded', ()=>{
	activeId = localStorage.getItem('activeLink');
	document.querySelector(`[data-id="${activeId}"]`).classList.add('ct-top-menu-item-active');
})