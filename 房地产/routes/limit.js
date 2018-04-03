const express=require('express');
const mysql=require('mysql');
const static=require('static');
const pool = mysql.createPool({
	host:"localhost",	
	user:'root',
	password:'123456',
	database:'home',
	port:3306 
});

var router = express.Router();
router.post('/',(req,res)=>{
	console.log(111)
	res.setHeader('Access-Control-Allow-Origin','*');
	var json=req.body.status
	pool.getConnection(function(err,connection){
		if(err){ 
			console.log(err)
			return
		}
		var sql="select * from floor where status=?"
		connection.query(sql,[json],function(err,data){
			console.log(data)
			res.send(data)
			connection.end()
		})
	})
})

module.exports=router;