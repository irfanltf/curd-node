const express = require("express");
const app = express();
// const db = require('./config/db');


app.get('/', (req, res) => res.send('Aplikasi Berhasil Berjalan...'));

// app.use(express.urlencoded({extended: true}));

// db.authenticate().then(()=>console.log('Berhasil Connect ke Database'));

// const User = require('./models/user');

// app.post('/crud', async (req, res) => {
//     try{
//         const {username, email, password} = req.body;

//         const newUser = new User({
//             username, email, password
//         })

//         await newUser.save();

//         res.json(newUser);
//     }catch(err){
//         console.error(err.message);
//         res.status(500).send('server error')
//     }
// })


// app.get('/crud', async (req, res) => {
//     try{
//         const gettAllUser = await User.findAll({})
//         res.json(gettAllUser)
//     }catch(err){
//         console.error(err.message);
//         res.status(500).send('server error');
//     }
// })

// app.get('/crud/:id', async (req, res) => {
//     try {
//         const id = req.params.id;

//         const getUser = await User.findOne({
//             where: {id:id}
//         });
//         res.json(getUser);
//     } catch (err) {
//          console.error(err.message);
//         res.status(500).send('server error');
//     }
// })

// app.delete('/crud/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const deleteUser = await User.destroy({
//             where : {id: id}
//         })
//         await deleteUser;
//         res.json('delete has been successfully');
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('server error');
        
//     }
// })

// app.put('/crud/:id', async (req, res) => {
//     try {
//         const {username, email, password} =req.body
//         const id = req.params.id;

//         const updateUser = await User.update({
//             username, email, password
//         }, {where: {id:id}});

//         await updateUser;
//         res.json('has been succesfully updated')
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('server error');
//     }
// })

app.listen(4500, () => console.log("port has running in 4500"));
