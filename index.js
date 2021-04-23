const csp = require('content-security-policy');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const port = process.env.SERVERPORT || 8080


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let data = [
    {
        "SAT_MA_ID_SERVICIO": "2020E000001",
        "EFFDT": "2020-06-26T16:54:15.000Z",
        "SAT_MA_TIPOSERV_X": "CURP",
        "SAT_MA_NOMSERVIC": "Consulta de Declaraciones y Pagos Web",
        "SAT_MA_STATUS_X": "A",
        "DESCR254": "CUN-WEB 2",
        "BGN_DT": "2008-01-01T06:00:00.000Z",
        "END_DT": null
    },
    {
        "SAT_MA_ID_SERVICIO": "2020E000001",
        "EFFDT": "2020-06-26T16:54:15.000Z",
        "SAT_MA_TIPOSERV_X": "CURP",
        "SAT_MA_NOMSERVIC": "Consulta de Declaraciones y Pagos Web",
        "SAT_MA_STATUS_X": "A",
        "DESCR254": "CUN-WEB 2",
        "BGN_DT": "2008-01-01T06:00:00.000Z",
        "END_DT": null
    },
    {
        "SAT_MA_ID_SERVICIO": "2020E000001",
        "EFFDT": "2020-06-26T16:54:15.000Z",
        "SAT_MA_TIPOSERV_X": "CURP",
        "SAT_MA_NOMSERVIC": "Consulta de Declaraciones y Pagos Web",
        "SAT_MA_STATUS_X": "A",
        "DESCR254": "CUN-WEB 2",
        "BGN_DT": "2008-01-01T06:00:00.000Z",
        "END_DT": null
    }
]



app.get('/', (req, res) => {
    res.json({
        status: "200"
    })
})



app.post('/cncatalogos', async function(req, res) {

    res.json(data);


});


app.listen(port,  function(req, res) {
    console.log('El sitio de APIs inició correctamente en el puerto: ', port);
    res;
});