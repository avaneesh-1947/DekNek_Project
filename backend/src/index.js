import app from './app.js';
import connect from './config/db.js';

connect();  

app.listen(5000, () => {
    console.log('server is running on port 5000');
});

