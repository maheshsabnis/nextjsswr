import {posts} from "@/database/posts";

export default function handler(req, res) {
    const requestMethod = req.method;

    
   
    res.status(200).json(posts);
     
  }