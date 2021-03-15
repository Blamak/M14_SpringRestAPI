// GET AND SHOW ALL PICTURES OF A SHOP

function readPictures(shopId) {

	// prepare and send request
	const url = `/shops/${shopId}/pictures`;
	const params = {
		method: 'get',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		}
	}

	fetch(url, params)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw "error in ajax request";
			}
		})
		.then(pictures => {
			if (pictures.length == 0) { // empty shop case
				document.getElementById("tableDiv").innerHTML = `<h2>This shop has currently no pictures.</h2>`;
			} else {
				buildTable(pictures);
			}
		})
		.catch(error => {
			alert(error);
		});
}

function buildTable(pictures) {
	let rows = "";

	pictures.forEach(picture => {
		rows += `<tr>`;
		rows += `<th>${picture.id}</th>`;
		rows += `<td>${picture.title}</td>`;
		rows += `<td>${picture.author}</td>`;
		rows += `</tr>`;
	})

	document.getElementById("pictures").innerHTML += rows;
}