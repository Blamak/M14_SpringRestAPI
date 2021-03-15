// DELETE ALL PICTURES FROM A SHOP

function deletePictures(shopId) {

	// add modal's main text message
	const text = document.getElementsByClassName("modal-body");
	text[0].innerText = "Delete all pictures from Shop with id = " + shopId + " ?";

	// set original modal-footer buttons settings every time "FIRE" is clicked  	
	document.getElementById('model-delete-btn').style.display = "inline";
	document.getElementById('model-cancel-btn').textContent = "Cancel";

	// delete request after button "Delete" is clicked
	document.getElementById('model-delete-btn').onclick = () => {
		const url = `/shops/${shopId}/pictures`;
		const params = {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}

		fetch(url, params)
			.then(response => {
				if (response.status == 200) { // success message
					text[0].innerText = `Delete successfully all pictures from shop with id ${shopId}`;

					// change modal-footer buttons settings
					document.getElementById('model-delete-btn').style.display = "none";
					document.getElementById('model-cancel-btn').textContent = "Close";

				} else if (response.status == 400) { // empty shop case
					text[0].innerHTML = '<p class="font-weight-bold">' + `Shop with id number ${shopId} currently has no pictures` + '</p>';

					// change modal-footer buttons settings
					document.getElementById('model-delete-btn').style.display = "none";
					document.getElementById('model-cancel-btn').textContent = "Close";
				}
			})
			.catch(function(error) {
				alert(error)
			})
	}
}