// GET AND SHOW ALL SHOPS

function readShops() {
	// prepare and send request
	const url = "/shops";
	const params = {
		method: "get",
	};

	fetch(url, params)
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw "error in ajax request";
			}
		})
		.then(shops => {
			if (shops.length == 0) { // no shop exists yet
				alert("no shops available");
			} else {
				buildTable(shops);
			}
		})
		.catch(error => {
			alert(error);
		});

	function buildTable(shops) {
		let rows = "";

		shops.forEach(shop => {
			let picturesButton = '<button style="margin-right:60px"' +
				`onclick="location.href='/views/show-pictures.html?shopId=${shop.id}&shopName=${shop.name}'"` +
				' type="button" class="btn btn-info"' + '>&nbsp &nbsp Pictures &nbsp &nbsp</button>';

			let fireButton = '<button ' + `onclick="deletePictures(${shop.id})"` +
				' type="button" class="btn btn-danger btn_delete" data-toggle="modal" data-target="#delete-modal"' +
				'>&#x1f525 &nbsp FIRE &nbsp &#x1f525</button>';

			rows += `<tr>`;
			rows += `<th>${shop.id}</th>`;
			rows += `<td>${shop.name}</td>`;
			rows += `<td>${shop.capacity}</td>`;
			rows += `<td>${picturesButton}${fireButton}</td>`;
			rows += `</tr>`;
		});

		document.getElementById("shops").innerHTML += rows;
	}
}
