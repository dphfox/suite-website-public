for(let gallery of document.querySelectorAll("section.gallery")) {
	gallery.tabIndex = -1;
	for(let image of gallery.querySelectorAll("img")) {
		const doFocus = () => {
			image.scrollIntoView({
				block: "nearest",
				inline: "center"
			});
		};
		image.addEventListener("click", doFocus);
		image.addEventListener("keydown", e => {
			if(e.key == "Enter") {
				e.preventDefault();
				doFocus();
			}
		});
		image.tabIndex = 0;
		image.classList.add("is-clickable");
	}
}