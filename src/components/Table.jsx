export default function Table(props){
  const data = props.data;
  const tickerName = props.tickerName;
  const sourceName = props.sourceName;
  
  if(data.length > 5){
  return(
  <table className="listTable">
    <thead>
    <tr>
      <th>Time</th>
      <th>Price</th>
    </tr>
    </thead>
    <tbody>
      {data.filter((row) => row.stock == tickerName && row.source == sourceName).slice(-5).reverse().map((row,i) => 
      <tr key={i}>
        <td>{row.time}</td>
        <td>{row.price}</td>
      </tr>
      ) 
      }
  </tbody>
  </table>
  )
  }
  else{
    return(
    <table>
    <tbody>
      <tr>
        <th>Time</th>
        <th>Price</th>
      </tr>
        {data.filter((row) => row.stock == tickerName && row.source == sourceName).reverse().map((row,i) => 
        <tr key={i}>
          <td>{row.time}</td>
          <td>{row.price}</td>
        </tr>
        ) 
        }
    </tbody>
    </table>
    )
    }
}