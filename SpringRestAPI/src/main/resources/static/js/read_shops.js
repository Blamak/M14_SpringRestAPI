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

		shops.forEach(shop => {
			let picturesButton = '<button style="margin-right:30px" ' + `onclick="location.href='/views/show-pictures.html?shopId=${shop.id}'"` +
			    ' type="button" class="btn btn-info""' + '>&nbsp &nbsp Pictures &nbsp &nbsp</button>';

			let deleteButton = '<button ' + `onclick="deletePictures(${shop.id})"` +
				' type="button" class="btn btn-danger btn_delete" data-toggle="modal" data-target="#delete-modal"' + '>&#x1f525 &nbsp FIRE &nbsp &#x1f525</button>';
				
				// btn_delete" data-toggle="modal" data-target="#delete-modal"' + '>&times</button>';


			rows += `<tr>`;
			rows += `<th>${shop.id}</td>`;
			rows += `<td>${shop.name}</td>`;
			rows += `<td>${shop.capacity}</td>`;
			rows += `<td>${picturesButton}${deleteButton}</td></td>`;
			//rows += `<td>${deleteButton}</td>`;
			rows += `</tr>`;

		})

		document.getElementById("shops").innerHTML += rows;
	}

}
