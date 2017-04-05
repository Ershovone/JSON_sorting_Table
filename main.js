var block = document.getElementById('table');

var data = [];
function getD() {
	var inAr = document.getElementById('inJson').value;
  	if (inAr.length) data = JSON.parse(inAr);
};

var order = {
	field: undefined,
	asc: 1
};

function createTable(data) {
		if (!data.length) return;
		var tableNode = document.getElementById('table');
		while (tableNode.hasChildNodes()) {
		tableNode.removeChild(tableNode.lastChild);
	 	}


	var addTo = function() {
		var ttHead = document.createElement('thead');
		var rowHead = document.createElement('tr');
		rowHead.setAttribute('class', 'rowH');
		var appearencies = {};
		appearencies.choose = 'hi';

		for(var n = 0; n < data.length; n++) {
			for(var key in data[n]){
				appearencies[key] = key;
			}
		}
		for(key in appearencies) {
			var elHead = document.createElement('th');
			elHead.setAttribute('class', 'thElem');
			elHead.setAttribute('onclick', 'sorting(this)');
			elHead.innerHTML = key;
			rowHead.appendChild(elHead);
			ttHead.appendChild(rowHead);
			block.appendChild(ttHead);
		}

		var tBody = document.createElement('tbody');

		for(var i = 0; i < data.length; i++) {	
			var crtBut = document.createElement('input');
			crtBut.setAttribute("value", "Delete");
			crtBut.setAttribute("type", "checkbox");
			crtBut.setAttribute("class", "del");
			var row = document.createElement('tr'); 
			row.setAttribute('class', 'rowClass');

			for(var key in data[i]) {				
				var el = document.createElement('td');
				var inputIn = document.createElement('input');
				inputIn.setAttribute("type","text");
				inputIn.setAttribute("value", data[i][key]);
				inputIn.setAttribute('class', 'inp');
				el.appendChild(inputIn);
				row.appendChild(el);
			}
			row.insertBefore(crtBut, row.childNodes[0]);
			tBody.appendChild(row);
			block.appendChild(tBody);
		}
	}
	addTo();

	var head = Array.prototype.slice.call(document.getElementsByClassName('thElem'));
	head.forEach(function(cell) {
			cell.onclick = function() {
			sorting(cell.innerHTML)
			}
	});

	function sorting(field) {
		var dataForSorting = JSON.parse(beforeGo());
		if (order.field === field) {
			order.asc *= -1;
		} else {
			order.field = field;
			order.asc = 1;
		}
		if(isNaN(dataForSorting[0][field])) {
			dataForSorting.sort(function (a, b) {
				return (a[field].localeCompare(b[field]) || -1) * order.asc;
			});
		} else {
			dataForSorting.sort(function (a, b) {
				return (Number(a[field]) - Number(b[field]) || -1) * order.asc;
			});
		};

		createTable(dataForSorting);
	}
};

var formData = [];
function getFormD() {
	var formInAr = document.getElementById('inJson').value;
  	if (formInAr.length) formData = JSON.parse(formInAr);
};

function formTable(formData) {
	if (!formData.length) return;
	var formDataForTable = JSON.parse(beforeGo());
	formedTbl = document.getElementById('formedTable');
	while (formedTbl.hasChildNodes()) {
		formedTbl.removeChild(formedTbl.lastChild);
 	}	
	var formedHead = document.createElement('thead');
	var formedHeadRow = document.createElement('tr');
	formedHeadRow.setAttribute('class', 'formedRowH');
	var formedObj = {1:"name",2:"group",3:"to",4:"варианты"};
	for(var key in formedObj) {
		var formedElHead = document.createElement('th');
		formedElHead.setAttribute('class', 'thFormElem');
		formedElHead.innerHTML = formedObj[key];
		formedHeadRow.appendChild(formedElHead);
	}
	formedHead.appendChild(formedHeadRow);
	formedTbl.appendChild(formedHead);

	var formedBody = document.createElement('tbody');
  	var groups = formDataForTable;
  	var middleAgeA = 0;
  	var middleAgeB = 0;
  	var middleAgeC = 0;
  	var middleAgeD = 0;
  	groups.forEach(function(group) {
	    var formedBodyRow = document.createElement('tr');
		formedBodyRow.setAttribute('class', 'formedRowB');
	    for(var key in group) {
	    	if(key == 'name') {
	    		var formedElBody = document.createElement('td');
	    		formedElBody.setAttribute('class', 'tdFormElem');
	    		formedElBody.innerHTML = group[key];
	    		formedBodyRow.appendChild(formedElBody);
	    	}
	    	formedBody.appendChild(formedBodyRow);
	    }
	    
	    for(var key in group) {
	    	if(key == 'group') {
	    		var formedElBody = document.createElement('td');
	    		formedElBody.setAttribute('class', 'tdFormElem');
	    		formedElBody.innerHTML = group[key];
	    		formedBodyRow.appendChild(formedElBody);
	    	}
	    	formedBody.appendChild(formedBodyRow);
	    }

	    for(var key in group) {
	    	if(key == 'name') {
	    		var formedElBody = document.createElement('td');
	    		formedElBody.setAttribute('class', 'tdFormElem');
	    		formedElBody.innerHTML = '➞';
	    		formedBodyRow.appendChild(formedElBody);
		    }
		    formedBody.appendChild(formedBodyRow);
	    }


	    /********* варианты *********/


	    for(var keyA in group) {
	    	if(group[keyA] === 'A') {
	    		middleAgeA = (middleAgeA + +group['age']);
	    	}
	    }

	    for(var keyB in group) {
	    	if(group[keyB] === 'B') {
	    		middleAgeB = (middleAgeB + +group['age']);
	    	}
	    }

	    for(var keyC in group) {
	    	if(group[keyC] === 'C') {
	    		middleAgeC = (middleAgeC + +group['age']);
	    	}
	    }

	    for(var keyD in group) {
	    	if(group[keyD] === 'D') {
	    		middleAgeD = (middleAgeD + +group['age']);
	    	}
	    }
	   	return middleAgeA, middleAgeB, middleAgeC, middleAgeD;
  	});
  	var countA = 0;
  	var countB = 0;
  	var countC = 0;
  	var countD = 0;

  	for(var i = 0; i < groups.length; i++){
  		for(var keyA in groups[i]) {
  			if(groups[i][keyA] === 'A') {
  				countA = countA+1;
  			}
  		}
  	}

  	for(var i = 0; i < groups.length; i++){
  		for(var keyB in groups[i]) {
  			if(groups[i][keyB] === 'B') {
  				countB = countB+1;
  			}
  		}
  	}

  	for(var i = 0; i < groups.length; i++){
  		for(var keyC in groups[i]) {
  			if(groups[i][keyC] === 'C') {
  				countC = countC+1;
  			}
  		}
  	}

  	for(var i = 0; i < groups.length; i++){
  		for(var keyD in groups[i]) {
  			if(groups[i][keyD] === 'D') {
  				countD = countD+1;
  			}
  		}
  	}

  	var midCountA = (middleAgeA/countA).toFixed(1);
  	var midCountB = (middleAgeB/countB).toFixed(1);
  	var midCountC = (middleAgeC/countC).toFixed(1);
  	var midCountD = (middleAgeD/countD).toFixed(1);

  	var middlesArr = [];
  	middlesArr.push(midCountA,midCountB,midCountC,midCountD);
  	console.log(middlesArr);

  	for(var i = 0; i < groups.length; i++) {
  		for(var key in groups[i]) {
  			if(+groups[i]['name']) {
  				var mid = document.createElement('td');
  			}
  		}
  	}















  	formedTbl.appendChild(formedBody);

}

function addingRow() {
	if (!data.length) return;
	var newBut = document.createElement('input');
	newBut.setAttribute("value", "Delete");
	newBut.setAttribute("type", "checkbox");
	newBut.setAttribute("class", "del");
	var newRow = document.createElement('tr');
		for(var newKey in data[0]){
			newEl = document.createElement('td');
			newEl.innerHTML = '<input type="text">';
			newRow.appendChild(newEl);
		}
		newRow.insertBefore(newBut, newRow.childNodes[0]);
	block.appendChild(newRow);
};

function delRow() {
	var checkDel = document.getElementsByClassName('del');
	var i = checkDel.length;

	while (i--) {
		var input = checkDel[i];
		if (input.checked == true) {
    		var tr = input.parentNode;
    		block.deleteRow(tr.rowIndex);
		}
	}
};


function checkedSend() {
	
	var tblData = $('input:checked').parent().get().map(function(row) {
		return $(row).find('td').get().map(function(cell) {
		return $(cell).find('input').val();
		});
	});
	var elTitle = document.querySelectorAll('body > table > thead > tr > th');
	var tblArrayofObj = tblData.slice(0, tblData.length).map(function(row) {
		var curObj = {};
		row.forEach(function(value, i) {
			var key = elTitle[i+1].innerHTML;
			curObj[key] = row[i];
		});
		return curObj;
	});
	var currentStr = JSON.stringify(tblArrayofObj);
	document.getElementById('outJson').innerHTML = currentStr;
	return currentStr;

}



function beforeGo() {
	var tblData = $('#table').find('tr').get().map(function(row) {
		return $(row).find('td').get().map(function(cell) {
		return $(cell).find('input').val();
		});
	});
	var elTitle = document.querySelectorAll('body > table > thead > tr > th');
	var tblArrayofObj = tblData.slice(1, tblData.length).map(function(row) {
		var rowObj = {};
		row.forEach(function(value, i) {
			var key = elTitle[i+1].innerHTML;
			rowObj[key] = row[i];
		});
		return rowObj;
	});
	var str = JSON.stringify(tblArrayofObj);
	return str;
};

function go() {
	document.getElementById('outJson').innerHTML = beforeGo();
}