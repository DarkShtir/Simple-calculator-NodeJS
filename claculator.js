const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
	let num1 = Number(req.body.num1);
	let num2 = Number(req.body.num2);
	let result = num1 + num2;
	res.send(`The Result of the calculation is: ${result}`);
});

app.get('/bmicalculator', (req, res) => {
	res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', (req, res) => {
	let weight = parseFloat(req.body.weight);
	let hight = parseFloat(req.body.hight);
	let bmi = weight / (hight * weight);
	res.send(`Your BMI is: ${bmi}`);
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
