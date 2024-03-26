import express from 'express';
import 'dotenv/config'

const port = process.env.PORT || 4000

const app=express();

app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/api/jokes',(req,res)=>{
    const joke=[{
        id:1,
        title:'joke1',
        joke:'this is joke 1'
    },{
        id:2,
        title:'joke2',
        joke:'this is joke 2'
    },{
        id:3,
        title:'joke3',
        joke:'this is joke 3'
    },]
    res.json(joke)
})

app.listen(port,()=>{
    console.log('server start')
})
