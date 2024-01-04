const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require('./middleware/logger')
const UsersRouter = require('./routes/Users')


app.use(logger)
app.use('/api/users', UsersRouter)

app.get('/user/:id/:token',(req, res)=>{
    console.log('params :- ', req.params);
    res.send('getting params')
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})