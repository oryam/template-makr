/** service mocker */

const mockyeah = require('mockyeah');

mockyeah.get('/hello-world', {
	text : 'Hello World',
});
mockyeah.get('/service/api/sample', {
	json : [ {
		id : 1,
		name : 'One',
		value : 1.2345,
	}, {
		id : 2,
		name : 'Two',
		value : 98.765,
	} ]
});
