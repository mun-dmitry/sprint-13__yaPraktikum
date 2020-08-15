const express = require('express');
const path = require('path');
const { PORT = 3000 } = process.env;
const router = require('./routes/router.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
console.log(`server running on port ${PORT}`);

mongoose.connect('mongodb://localhost:27017/mestodb', {
	useNewUrlParser: true,
  useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use((req, res, next) => {
	req.user = {
			_id: '5f364f7677896926601f203e'
	};

	next();
});
app.use('/', router);

app.listen(PORT);