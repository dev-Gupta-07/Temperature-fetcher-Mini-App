import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import react from "react";
import { useEffect,useState } from "react";
import './App.css';



function App() {
  const [data,setData]=useState({})
  const apikey="12056b97268d04573c4b3ac8022a147e"
  const [inputcity,setinputcity]=useState({})
  const getdetails=(cityName)=>{
    if(!cityName) return
    const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apikey
    axios.get(apiURL).then((res)=>{
      console.log("response",res.data)

      setData(res.data)
    }).catch((err) =>{
      console.log("err"+err)
    })
  }
  const handlechangeinput =(e) =>{
      setinputcity(e.target.value)
  }
  const handlesearch=()=>{
    getdetails(inputcity)
  }
  useEffect(() =>{
    getdetails("delhi")
  },[])
  return (
    <div className="col-md-12">
      <div className="weatherbg">
        <h1 className="heading">TEMPERATURE FETCHER APP</h1>
        <h3 className="heading2">Search for any city</h3>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            onChange={handlechangeinput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handlesearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="main">
        <div className="col-md-12 text-center mt-5 cont">
          <div className="shadow rounded weatherresult">
            <img
              className="icon"
              src="https://cdn.jim-nielsen.com/ios/1024/weather-2019-02-07.png"
            />
            <h5 className="weathercity">{data?.name}</h5>
            <h6 className="weathertemp">
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
