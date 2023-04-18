import Link from "next/link";
import DataGridComponent from "./datagridcomponent";
import { useRouter } from "next/router";
// export const getStaticProps= async ()=>{
//    var products = await (await fetch("https://productapiserv.azurewebsites.net/api/ProductsAPI")).json(); 
//     console.log('====================================');
//     console.log(JSON.stringify(products));
//     console.log('====================================');
//    return {
//     props: {
//       products
//     }
//   }
// };

export const getServerSideProps= async ()=>{
  var products = await (await fetch("https://productapiserv.azurewebsites.net/api/ProductsAPI")).json(); 
   console.log('====================================');
   console.log(JSON.stringify(products));
   console.log('====================================');
  return {
   props: {
     products
   }
 }
};
const SecondPage=({products})=>{
  const router = useRouter();
  const receiveValue=(record)=>{
   // alert(`Received Value ${record.ProductId}`);
      router.push({
        pathname:'/first',
        query:{
          id:record.ProductId
        }
      });
  };
  return(
    <div>
       <h1>I the the Second Page</h1>  
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
      <DataGridComponent dataSource={products}
         selectValue={(v)=>receiveValue(v)}></DataGridComponent> 
    </div>
  );
};

export default SecondPage;