import Home from "./Components/home/Home";
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Card from "./Components/Card/Card";
import axios from "axios";
import Data from './Components/ViewData/Data';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  const [datas, setDatas] = useState([])
  const [viewData, setViewData] = useState([]);
  const [dataitem, setDataitem] = useState([]);


  useEffect(() => {

    
    async function dataLoad() {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=16parkline=false')
      setDatas(response.data);
    }

    var temp = [];
    viewData.map(item =>
      temp.push(item.name)
    )

    setDataitem(temp);

    dataLoad();
    loadStockData();

  }, [viewData]);


  async function loadStockData() {
    const result = await axios.get('/getStocklist')
    setViewData(result.data);

  }

  function addStock(stockdata) {
    const addStockData = {
      name: stockdata.name,
      symbol: stockdata.symbol,
      market_cap: stockdata.market_cap,
      current_price: stockdata.current_price,
      isPurchased: false
    }
    axios.post('/savestock', addStockData);
  
  }
  
   function removeData(dataitem) {
    const data = {
      _id: dataitem._id
    };
    axios.delete("/removeStock", { data })

  }

  return (
    <>
      <Router>
        <Navbar />
        <div className="container mb-5 pb-5">
          <Card />
          <Switch>
            <Route exact path="/" ><Home datas={datas}  dataitem={dataitem} addStockData={addStock}/></Route> 
            <Route exact path="/home" ><Home datas={datas} dataitem={dataitem}  addStockData={addStock} /></Route> 
            <Route exact path="/view"><Data deletebutton={removeData} viewData={viewData}/></Route>
          </Switch>
        </div>
      </Router>

    </>
  )
}

export default App