import express from 'express';
const app = express()

app.use(express.json())


app.use(express.static('public'))

//SEREVER
app.listen(3000,() => {
  console.log('server running on port 3000 \n open in the browser at http://localhost:3000')
})

