import React from "react";

const DataGridComponent=(props)=>{
    console.log('====================================');
    console.log(`The Data ${JSON.stringify(props.dataSource)}`);
    console.log('====================================');
    const rowClick=(rec)=>{
        //alert(JSON.stringify(rec));
        props.selectValue(rec);
    }
    if(props.dataSource === undefined || props.dataSource === null || props.dataSource.length === 0){
        return (
            <div className="alert alert-danger">No Data</div>
        );
    }
    else {

    return (
        <table className="table table-bordered table-striped">
        <thead>
            <tr>
               {
                 Object.keys( props.dataSource[0]).map((header,index)=>(
                    <th key={index}>{header}</th>
                 ))
               }     
            </tr>
        </thead>
        <tbody>
            {
                props.dataSource.map((e,i)=>(
                    <tr key={i} onClick={()=>rowClick(e)}>
                        {
                            Object.keys(e).map((header,index)=>(
                                <td key={index}>{e[header]}</td>
                                
                     ))
                     
               }
                    
                        <td hidden={!props.canDelete}>
                           <button className="btn btn-danger" >Delete</button> 
                        </td>  
                    </tr>
                ))
            }
        </tbody>
     </table>
     
    );
        }
};

export default DataGridComponent;