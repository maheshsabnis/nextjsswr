import useSWR  from "swr";
import axios from "axios";
import DataGridComponent from "./datagridcomponent";

const UseSwrPage=()=>{
    const url = "https://productapiserv.azurewebsites.net/api/ProductsAPI";
    const fetcher = async(addr)=> await axios.get(addr).then((res)=>res.data);
    const {products, error} = useSWR(url, fetcher);
    
    if(error) return <div>Loading Failed.....</div>;
    if(!products) <div>Loading products......</div>

    return (
        <div>
            <DataGridComponent
              dataSource={products}></DataGridComponent>
        </div>
    );
};

export default UseSwrPage;