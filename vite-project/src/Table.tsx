export const Table = ({data,struct})=>{
  
    return <div>
         <table>
            <tr>
                {struct.map((node)=>{
                    return <th>{node.fieldname}</th>
                })}
            </tr>
            {data.map((nodes)=>{
                return <tr>{struct.map((node)=>{
                    return <td>{nodes[node.fieldname]}</td>
                })}</tr>
            })}
         </table>
    </div>
}