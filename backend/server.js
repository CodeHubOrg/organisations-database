/*** Backend server, currently not in use ***/

import express    from 'express';
import bodyParser from 'body-parser';
import api        from './api';

let app = express();

app.use(bodyParser.json({ limit : '100kb' }));
app.use('/api', api());

let server = app.listen(process.env.PORT || 5050, () => {
    let port = server.address().port;
    console.log('Backend server started on port %s.', port);
});