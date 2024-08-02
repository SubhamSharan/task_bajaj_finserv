const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item)).map(item => item.toUpperCase());
    const highest_alphabet = alphabets.sort().pop();

    res.json({
        is_success: true,
        user_id: "subham_sharan_26112003",
        email: "ss9125@srmist.edu.in",
        roll_number: "RA2111003010511",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highest_alphabet ? [highest_alphabet] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
