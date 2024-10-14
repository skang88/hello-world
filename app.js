const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();  // 현재 시간 추가
    const message = `
        <h1>Hello World!</h1>
        <p>This is the second commit. Jenkins automation is finally working!</p>
        <p>The server is running, and even after the instance stops, it can be restarted smoothly.</p>
        <p>Current Server Time: ${currentTime}</p>
    `;
    
    res.send(message);  // HTML 형식으로 메시지 반환
});


app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})

