const express = require('express');
const app = express()
const port = 3000

require('dotenv').config();

console.log(process.env.DB_ENGINE);


app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();  // 현재 시간 추가
    const message = `
        <h1>Hello World!</h1>
        <p>DB Engine is ${process.env.DB_ENGINE} ! </p>
        <p>This is the third commit. Jenkins automation is finally working!</p>
        <p>I chane the trigger to  Poll SCM H 20 * * * which means 8:30 PM Coordinated Universal Time</p>
        <p>Good Luck</p>
        <p>Current Server Time: ${currentTime}</p>
    `;
    
    res.send(message);  // HTML 형식으로 메시지 반환
});


app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})

