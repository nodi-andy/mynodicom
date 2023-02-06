import express from 'express';
import vhost from 'vhost';

var app = express();

app.use("/", express.static("./public"));
app.use(vhost('factory.mynodi.com/', express.static('./public/browser-factory')))
app.use(vhost('*.noditron.com/', express.static('./public/browser-factory')))

app.listen(8080)