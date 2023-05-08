/**
 * Mongodb connection
 * _____________________
 * 1.create account
 * 2.create a user with password
 * 3.whitelist ip address
 * 4.database >connect>driver>node>view full code
 * 5.update the password in the uri
 * 
 * 1.create----post
 * 2.app.post('/users',(req,res)=>{})
 * 3.make the function async to use await inside it
 * 4.make sure you  use the express.json() middleware
 * 5.access data from the body=req.body
 * 6.const result = await userCollection.insertOne(doc);
 * 7.res.send(result)
 * 
 * CLIENT
 * ____________________
 * 1.create fetch
 * 2.add second parameter as an object
 * 3.provide method : 'POST'
 * 4.add headers:{'content-type':application/json}
 * 5.add body:JSON.stringify(user)
 * 
 * 
 *----------------------
 *READ-Many
 * ________________
 *
 * 1.create a cursor = userCollection.find()
 * 2.const result = cursor.toArray()
 * 3.res.send(result)
 * 
 *------------------
 *DELETE
 *_____________________________
 *
 * 1.create app.delete('/users/:id' async(req,res)=>{})
 * 2.const id =req.params.id
 * 3.specify unique objectId to delete the right user.
 * 4.const query = { _id: new objectId(id) };
 * 5.const result = await userCollection.deleteOne(query);
 * 
 *
 * ______________
 * CLIENT
 * 
 * 1.create dynamic url with id
 * mention method:'DELETE
 * 
 * 
 * 
 * 
 * 
 * **/