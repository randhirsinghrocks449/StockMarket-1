import React, {useCallback, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Pagination from '../pagination/Pagination';
import { NavLink } from 'react-router-dom';


const Home = (props) => {

  const { datas, dataitem,addStockData } = props;
  const userPerPage = 5;
  const [search, setSearch] = useState("")
 
  const [pagination, setPagination] = useState({
    start: 0,
    end: userPerPage
  })

  const onPaginationChange=useCallback((pagesVisited, adduserpagesvisted)=> {
    setPagination({ start: pagesVisited, end: adduserpagesvisted })
  },[])


  return <div className="table_styling container ">


    <div className="d-flex py-4">
      <h3 className="mx-5 my-2">Stock Details Table</h3>
      <div className="input_styling">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input className="mx-2 my-2" type="text" placeholder="search..." onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
    <table className="table">

      <thead className="thead-light text-center">
        <tr>
          <th scope="col">Company Name</th>
          <th scope="col">Symbol</th>
          <th scope="col">Market Cap</th>
          <th scope="col"></th>

          <th scope="col">Current price</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {datas.slice(pagination.start, pagination.end).filter((value) => {
          if (search === "") {
            return value;
          }
          else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
          else{
            return "";
          }
        }).map((stockdata, index) => {
          return <tr key={index}>
            <td className="pt-2">{stockdata.name}</td>
            <td><li className="list_styling">{stockdata.symbol}</li></td>
            <td>{stockdata.market_cap}</td>

            {
              <td>{dataitem.includes(stockdata.name) ? <NavLink to="/view">
                <button className="btntextchange view_styling w-50" >VIEW</button>
              </NavLink> :
                <button className="btntextchange  btn-primary w-75 " onClick={() => {addStockData(stockdata) }}>Save Data</button>}</td>
            }

            <td>{stockdata.current_price}</td>
          </tr>

        })
        }
      </tbody>
    </table>
    <Pagination userPerPage={userPerPage} onPaginationChange={onPaginationChange} total={datas.length} />
  </div>
}

export default Home