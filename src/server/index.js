import express from 'express';

const app = express();
app.get('*', (req, res) => res.send('Hello World!'));
app.listen(8000, () => console.log('I\'m listening on 8000 port!!!'));
