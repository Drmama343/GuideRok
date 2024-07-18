document.addEventListener('DOMContentLoaded', () => {
	// Fonction pour afficher la popup
	function showPopup(popupId) {
		document.getElementById(popupId).style.display = 'block';
	}

	// Fonction pour masquer la popup
	function hidePopup(popupId) {
		document.getElementById(popupId).style.display = 'none';
	}

	// Fonction pour changer l'image
	function changeImage(imageClass, imageUrl) {
		document.querySelector(`.${imageClass}`).src = imageUrl;
	}

	// Fonction pour configurer les popups
	function setupPopups() {
		document.querySelectorAll('.popup-content ul li').forEach(item => {
			item.addEventListener('click', function() {
				const imageClass = this.getAttribute('data-image-class');
				const imageUrl = this.querySelector('img').src;
				changeImage(imageClass, imageUrl);
				hidePopup(this.closest('.popup').id);
			});
		});
	}

	// Fonction pour ajouter des événements de clic sur les images
	function setupImageClickEvents() {
		document.querySelectorAll('.content img').forEach(img => {
			img.addEventListener('click', function() {
				showPopup(`${this.className}-popup`);
			});
		});
	}

	// Fonction pour fermer la popup en cliquant en dehors
	function setupClickOutsideToClose() {
		document.addEventListener('click', function(event) {
			const target = event.target;
			if (target.classList.contains('popup') && !target.classList.contains('popup-content')) {
				hidePopup(target.id);
			}
		});
	}

	// Initialiser les popups, les événements sur les images et le clic extérieur après chargement du DOM
	setupPopups();
	setupImageClickEvents();
	setupClickOutsideToClose();
});