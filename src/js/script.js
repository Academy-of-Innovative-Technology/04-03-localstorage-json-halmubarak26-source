


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
	let container = document.querySelector("#mutants");
	dataArray.forEach(function(mutant){
		let html = "<div> <h2>${mutant.name}</h2> <h3>${mutant.power}<h3> </div> ";
	
	});
	

	container.insertAdjacentHTML("beforeend",html);
}

loadDataSource();
