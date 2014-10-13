
/*
 * GET users listing.
 */

exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM offering',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('offerings',{page_title:"Offering Listings",data:rows});
         });
         
         //console.log(query.sql);
    });
  
};

exports.add = function(req, res){
  res.render('add_offering',{page_title:"Add Offering"});
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM offering WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_offering',{page_title:"Offering Details",data:rows});
           
         });
         
         //console.log(query.sql);
    }); 
};

/*Save the customer*/
exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name     	: input.name,
            category 	: input.category,
            age      	: input.age,
            start_date 	: input.start_date,
            end_date 	: input.end_date,
            duration 	: input.duration,
            price    	: input.price,
            price_unit  : input.price_unit,
        };

        var query = connection.query("INSERT INTO offering set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/offerings');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {

            name     	: input.name,
            category 	: input.category,
            age      	: input.age,
            start_date 	: input.start_date,
            end_date 	: input.end_date,
            duration 	: input.duration,
            price    	: input.price,
            price_unit  : input.price_unit,
            
        };
        
        connection.query("UPDATE offering set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );

          res.redirect('/offerings');
          
        });
    
    });
};


exports.delete_customer = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM provider  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/customers');
             
        });
        
     });
};


