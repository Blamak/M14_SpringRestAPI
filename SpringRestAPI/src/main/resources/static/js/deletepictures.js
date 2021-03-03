function deletePictures(id) {

	let text = document.getElementsByClassName("modal-body");
	text[0].innerText = "Delete all pictures from Shop with id = " + id + " ?";

	document.getElementById('model-delete-btn').onclick = () => {
		const url = `/shops/${id}/pictures`;
		const params = {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}
		}

		fetch(url, params)
			.then(response => {
				// hide delete button and change cancel button text
				document.getElementById('model-delete-btn').style.display = "none";
				document.getElementById('model-cancel-btn').textContent = "Close";
				
				if(response.status == 200) { // success message
					text[0].innerText = `Delete successfully all pictures from shop with id ${id}`;
				} else if (response.status == 400) { // empty shop case
					text[0].innerText = `Shop with id number ${id} has currently no pictures`;
				}
			})
			.catch(function(error) {
				alert(error)
			})
	}
}