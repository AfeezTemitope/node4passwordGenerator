import express from 'express'
import cors from 'cors'
import generateRandomPassword from './passwordGenerator'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.get('/', (req, res) => {
    res.send('App is running wild nd out !!!');
});

app.get('/generateRandomPassword', (req, res) => {
    const password = generateRandomPassword
    res.json({password})
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
