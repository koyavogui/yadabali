var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');
var  session  = require('express-session');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'..','vue_app','dist','index.html'))
  //res.render('index', { title: 'Yadabali', maitre : 'form_maitre' });
});
 /*
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'..','vue_app','dist','index.html'))
    //res.render('index', { title: 'Yadabali', maitre : 'form_maitre' });
    });
   
    router.get('/form', function(requ, res, next) {
      res.render('form', { title: 'Yadabali', maitre : 'form_maitre' });
    });
    //Requette d'ajout enregistrement Maitre Cuisinier
 
    router.post('/query', async (requ, res, next) => {

      const maitredb = requ.app.get('maitredb');
      maitredb.count({ user : requ.body.user }, function (err, docs) {
        if (docs > 0) {
          res.render('form', { title: 'Yadabali', maitre : 'form' });
        }else
        {
          console.log(docs.nom);
          console.log(requ.body.nom);
          res.render('maitre', { title: 'Yadabali', maitre : 'form', nom : requ.body.nom });    
        }
        
      });
         })
 
    // requete d'ajout de marchand

    router.post('/query_mhd', async (requ, res, next) => {
    //telechargement d'image
      var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
          var oldpath = requ.body.photo_mhd;
          var newpath = '/image' + requ.body.photo_mhd;
          fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            console.log('File uploaded and moved!');
            res.end();
          });
        })
      var  enregistrement  = {  
                    nom  : requ.body.nom
                  ,  prenom : requ.body.prenom
                  ,  contact : requ.body.contact
                  ,  commune : requ.body.commune
                  ,  user : requ.body.user
                  ,  password :   requ.body.password
                  ,  photo : requ.body.photo
                  } ;
                  console.log(enregistrement);
                  
                  
        const marchantdb = requ.app.get('marchantdb');
        let doc = marchantdb.insert ( enregistrement) 
      
        console.log(doc);
        if (doc ) {
          res.render('form_marchand');  
        } else{
          res.render('form_marchand:echec');
        }
    })
    // requete d'ajout d'utilisateur qui est apprenti
    router.post('/query_user', async (requ, res, next) => {

       // Telechargement ded l'image
       var filetoupload = requ.body.photo
       var form = new formidable.IncomingForm();
       form.parse(req, function (err, fields, files) {
         var oldpath = files.filetoupload.path;
         var newpath = '../public/image/' + files.filetoupload.name;
         console.log(oldpath);
         console.log(newpath);
         console.log();
         fs.rename(oldpath, newpath, function (err) {
           if (err) throw err;
           res.write('File uploaded and moved!');
           res.end();
         });
       });
 
      var  enregistrement  = {  
                    nom  : requ.body.nom
                  ,  prenom : requ.body.prenom
                  ,  contact : requ.body.contact
                  ,  commune : requ.body.commune
                  ,  user : requ.body.user
                  ,  password :   requ.body.password
                  ,  photo : requ.body.photo
                  } ;
                  console.log(enregistrement);
                  
                  
        const apprentidb = requ.app.get('apprentidb');
        let doc = await apprentidb.insert ( enregistrement) // Le  rappel est facultatif       
        //  newDoc est le document nouvellement inséré, y compris son _id
        //  newDoc n'a pas de clé appelée notToBeSaved puisque sa valeur était indéfinie
      
      console.log(doc);
      
      res.render('form_utilisateur');
      
})
*/
module.exports = router;