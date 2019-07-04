const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
	res.send('This is the response');
});
app.listen(5000);
console.log('Express Project')