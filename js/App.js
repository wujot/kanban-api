// Variables
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders =  {
	'Content-Type': 'application/json',
  	'X-Client-Id': '3820',
  	'X-Auth-Token': 'a82b1a3e1000687d38bcc8d12093d0bf'
};

fetch(baseUrl + '/board', {
	method: 'GET',
	headers: myHeaders
})
  .then(function(resp) {
    return resp.json();
  })
  .then(function(resp) {
    setupColumns(resp.columns);
  });

  function setupColumns(columns) {
    columns.forEach(function(column) {
    	var col = new Column(column.id, column.name);
      	board.addColumn(col);
      	setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
	    var cardObj = new Card(card.id, card.name);
	  	col.addCard(cardObj);
	});
}


function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}

