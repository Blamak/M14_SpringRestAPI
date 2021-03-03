function readShops() {
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
			if (shops.length == 0) {
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

		// for (i in shops) {
		shops.forEach(shop => {

			let deleteButton = '<button ' + `onclick="deletePictures(${shop.id})"` +
				' type="button" class="btn btn-danger btn_delete" data-toggle="modal" data-target="#delete-modal"' + '>&times</button>';


			// rows += `<tr href='tienda_modificacion.php?idpelota=${shops[i].id}>`;
			rows += `<tr>`;
			// filasTabla += `<td><a href='tienda_modificacion.php?idpelota=${productos[i].idpelota}'></td>`;
			rows += `<td>${shop.id}</td>`;
			rows += `<td>${shop.name}</td>`;
			rows += `<td>${shop.capacity}</td>`;
			rows += `<td>${deleteButton}</td>`;
			// filasTabla += `<td>${productos[i].stock}</td>`;
			rows += `</tr>`;

		})

		// }

		document.getElementById("shops").innerHTML += rows;
	}

}
