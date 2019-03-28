var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', async (req, res, next) => {
  let db = req.app.get("userdb");
  //const db = new Datastore({filenam : 'users.db', autoload : true})
  //console.log(req.body, typeof(req.query.id));
  
  try {
    db.insert({nom:'nom1',prenom:'prénom1'},(error,doc)=> {
      console.log(error, doc);    
    })  
  } catch (error) {
    console.log(error);
    
  }
  
  /*
  db.find({},(error,doc) => {console.log(error,doc);
  })
  */
  
  
  res.json({});
});

router.post('/', async (req, res, next) => {
  let db = req.app.get("userdb");
  db.insert(req.body)
  res.json({})
});

router.put('/',  async (req, res, next) => {
  let db = req.app.get("userdb");

  res.json({})
});

router.delete('/', async (req, res, next) => {
  let db = req.app.get("userdb");

  res.json({})
});

module.exports = router;
