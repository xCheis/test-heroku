const csp = require('content-security-policy');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const port = process.env.PORT || 8080


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json({
        status: "200"
    })
})



app.post('/cncatalogos', async function(req, res) {

    res.json(req.header);


});


app.listen(port,  function(req, res) {
    console.log('El sitio de APIs inició correctamente en el puerto: ', port);
});
