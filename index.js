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



app.get('/test', async function(req, res) {

    if(req.headers.test){
        res.json({status:true});
        return
    } 
    res.json({status:false});


});


app.listen(port,  function(req, res) {
    console.log('El sitio de APIs inició correctamente en el puerto: ', port);
});
