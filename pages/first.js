import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const FirstPage=()=>{
 const router = useRouter();
 const [productId, setProductId] = useState('');   
 useEffect(()=>{
    setProductId(router.query.id);
 });
  return(
    <div>
       <h1>I the the First Page</h1>  
       <table>
        <thead>
          <tr>
              <th>
                <Link href="/">Home</Link>
              </th>
              <th>
                 <Link href="/first">First</Link>
              </th>
              <th>
                 <Link href="/second">Second</Link>
              </th>
          </tr>
        </thead>
      </table> 
      Received ProductId: {productId}
    </div>
  );
};

export default FirstPage;