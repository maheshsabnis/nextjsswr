 async function fetchData(){
    var products = await (await fetch("https://productapiserv.azurewebsites.net/api/ProductsAPI")).json(); 
     console.log('====================================');
     console.log(JSON.stringify(products));
     console.log('====================================');
    
   return products;
  };

  export default async function ProductsPage(){
    const products  = await fetchData();

    return (
           <div>
              {JSON.stringify(products)}
           </div> 

    );
  }