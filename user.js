const mongoose=require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/test42');

const Chien = mongoose.model('Chien', {name: String, category: String});

const newChien = new Chien({name: "Dogg 5", category: "Germanie"});
console.log(newChien);

Chien.find().then(data => console.log(data));

newChien.save().then(() => console.log('Le chien a ete ajouté'))

