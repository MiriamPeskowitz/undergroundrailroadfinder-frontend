

document.addEventListener('DOMContentLoaded', () => {
	const app = new App()
	app.attachEventListeners();

	app.adapter.fetchSites()
	.then(app.createSites)
})
