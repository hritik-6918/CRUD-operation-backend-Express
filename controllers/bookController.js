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
const getBooks = (req,res)=>{
    res.json(books);
};


//create
const createBooks = (req,res)=>{
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
};

//update
const updateBooks=(req,res)=>{
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
};

//delete
const deleteBooks =(req,res)=>{
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
};

module.exports = {
    getBooks,
    createBooks,
    updateBooks,
    deleteBooks
}
