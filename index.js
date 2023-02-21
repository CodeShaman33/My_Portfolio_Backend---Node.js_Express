const express = require('express');
//app
const app = express();

app.get('/', (req, res) =>
{
    res.send('Hello World');
});

app.post('/todos', (req, res) =>
{
    console.log('object got');
    res.status(200).end();
    
    
}
)


app.listen(8888, () =>
 {
    console.log('app has started on port 8888');
});