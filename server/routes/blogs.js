const express = require('express')
const pool = require('../database/db')
const result = require('../utils/result')

const router = express.Router()

router.post('/createblog',(req, res)=>{
  const user_id = req.headers.user_id
  // console.log(user_id)
  const { title , category_id , contents} = req.body
  const sql = `INSERT INTO blogs(title , contents , user_id , category_id) VALUES (?,?,?,?)`
  pool.query(sql ,[title ,  contents , user_id ,category_id], (error,data)=>{
    res.send(result.createResult(error,data))
  })

})

router.put('/editblog/:id',(req,res)=>{
  // console.log("hello")
  const { title , category_id , contents} = req.body
  const user_id = req.headers.user_id
  const blogID = req.params.id
  const sql = `UPDATE  blogs SET title = ? , contents = ? , category_id = ?  WHERE blogID = ? AND user_id = ?`
  pool.query(sql,[title ,  contents, category_id , blogID , user_id] ,(error,data)=>{
    res.send(result.createResult(error,data))
  })


})

router.get('/myblogs', (req,res)=>{
  const user_id = req.headers.user_id
  const sql = `SELECT blogID, blogs.title  as b_title,contents, categories.title as c_title , created_time FROM blogs , categories WHERE  blogs.category_id = categories.category_id AND  user_id = ?`
  pool.query(sql,[user_id],(error,data)=>{
    res.send(result.createResult(error,data))
  })
})

router.get('/allblogs',(req,res)=>{
// const sql = `SELECT * FROM blogs`
const sql = `SELECT blogID, blogs.title  as b_title,contents ,categories.title as c_title , created_time FROM blogs , categories WHERE  blogs.category_id = categories.category_id `
pool.query(sql,(error,data)=>{
  res.send(result.createResult(error,data))
})
})

router.delete('/deleteblog/:id',(req,res)=>{
  const blogID = req.params.id
  // console.log(blogID)
  const sql = `DELETE FROM blogs WHERE blogID = ?`
  pool.query(sql,[blogID],(error, data)=>{
    res.send(result.createResult(error,data))
  })
})

module.exports = router