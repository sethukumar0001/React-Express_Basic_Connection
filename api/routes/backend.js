var express = require('express');
var router = express.Router();
var con = require(__dirname + '/../bin/db.js');

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

router.post('/add', (req, res) => {
    fname = req.body.data.firstname;
    lname = req.body.data.lastname;
    email = req.body.data.email;
    psd = req.body.data.password;

    data = {first_name:fname,last_name:lname,email:email,password:psd}

    console.log(data);
    con.query("INSERT INTO users SET ? ", data, function (err, rows) {
      if (!err) 
        res.status(200).json([{
          status: 'success',
          insertID: rows.insertId
        }])   
      else
        res.status(502).json([{
          status: 'failed',
          errMsg: 'Error while inserting data.'
        }])
    })
  })

/* GET users listing. */
router.get('/userlist', function (req, res, next) {

    con.query('SELECT * from users ', function (err, rows, fields) {
      if (!err)
        res.json({
          status: 'success',
          data: rows,
        })
        
      else
        res.json([{
          status: 'failed',
          errMsg: 'Error while performing query.'
        }])
    });
  
  });

  module.exports = router;
  
// /* GET users listing. */
// router.get('/', function (req, res, next) {

//     konek.query('SELECT * from tbl_mhs ', function (err, rows, fields) {
//       if (!err)
//         res.json({
//           status: 'success',
//           data: rows
//         })
//       else
//         res.json([{
//           status: 'failed',
//           errMsg: 'Error while performing query.'
//         }])
//     });
  
//   });
  
//   /* GET users by id. */
//   router.get('/id/:id', function (req, res, next) {
//     konek.query('SELECT * from tbl_mhs where id_mhs = ? ', req.params.id, function (err, rows, fields) {
//       if (!err)
//         res.status(200).json({
//           status: 'success',
//           data: rows[0]
//         })
//       else
//         res.status(502).json([{
//           status: 'failed',
//           errMsg: 'Error while performing query.'
//         }])
//     });
  
//   });
  
//   router.post('/add', (req, res) => {
//     data = req.body
//     konek.query("INSERT INTO tbl_mhs set ? ", data, function (err, rows) {
//       if (!err) 
//         res.status(200).json([{
//           status: 'success',
//           insertID: rows.insertId
//         }])   
//       else
//         res.status(502).json([{
//           status: 'failed',
//           errMsg: 'Error while inserting data.'
//         }])
//     })
//   })
  
//   router.put('/edit', (req, res) => {
//     data = req.body
//     id = data.id
  
//     delete data.id
//     // console.log(id)
//     // res.sendStatus(200)
//     konek.query("UPDATE tbl_mhs set ? where id_mhs = ? ", [data,id], function (err, rows) {
//       if (!err)
//         res.status(200).json([{
//           status: 'success',
//         }])
//       else
//         res.status(502).json([{
//           status: 'failed',
//           errMsg: 'Error while updating data.'
//         }])
//     })
//   })
  
//   router.delete('/delete', (req, res) => {
//     // console.log(id)
//     // res.sendStatus(200)
//     konek.query("DELETE FROM tbl_mhs where id_mhs = ? ", req.body.id, function (err, rows) {
//       if (!err)
//         res.status(200).json([{
//           status: 'success',
//         }])
//       else
//         res.status(502).json([{
//           status: 'failed',
//           errMsg: 'Error while deleting data.'
//         }])
//     })
//   })
  
  
//   module.exports = router;
  