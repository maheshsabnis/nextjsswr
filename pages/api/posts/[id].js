import {posts} from "@/database/posts";
export default function handler(req, res) {
    const requestMethod = req.method;
    console.log('sss');
    const query = req.query;
    const { id } = query;
    console.log(id);
    let post = posts.filter((p,i)=>{
        return p.id === parseInt(id);
    })
    res.status(200).json(post[0]);
     
  }