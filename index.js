const express = require('express');
const app = express();

const bookRoutes = require('./routes/bookRoutes');

/*
let books = [
    {
        id:1,
        Title:'book 1',
        Author: 'Author 1'
    },
    {
        id:2,
        Title:'book 2',
        Author: 'Author 2'
    },
    {
        id:3,
        Title:'book 3',
        Author: 'Author 3'
    }
];

//read
app.get('/',(req,res)=>{
    res.json(books);
})

//middleware
app.use(express.json())

//create
app.post('/books',(req,res)=>{
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
})

//update
app.put('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book =>book.id === id);

    if(index !== -1){
        books[index] = {...books[index],...updatedBook};
        res.json(books[index]);
    }
    else{
        res.json(404).json({error:'book not found'});  
    }
})

//delete
app.delete('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = books.findIndex(book =>book.id === id);

    if(index !== -1){
        const deletedBook = books[index];
        books.slice(index,1);
        res.json(deletedBook);
    }
    else{
      res.json(404).json({error:'book not found'});  
    }
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
*/

app.use(express.json());

app.use('/',bookRoutes);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})