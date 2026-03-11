


var Database = {
	keyName: "Mutant Database",
	data: []
	
};


function loadDataSource() {

	let storedData = localStorage.getItem(Database.keyName);
	let setData = JSON.parse(storedData);
	
	displayData( Database.data );
}



function displayData(dataArray) {
	let container = document.querySelector(".row");
	container.innerHTML = "";
	
	dataArray.forEach(function(mutant){
		let html = "<div class="col"> <div class="card shadow-lg"> <img src="${mutant.image}" class="card-img-top"> <div class="card-body"><h5 class="card-title text-center mb-3">${mutant.name}</h5><p class="card-text text-center text-muted">${mutant.description}</p>";
	
	});
	

	container.insertAdjacentHTML("beforeend",html);
}

loadDataSource();
