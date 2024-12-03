import { useEffect } from "react"
import axios from "axios"
import { IoUmbrella } from "react-icons/io5";
import { ShowCity } from "./Components/ShowCity"


function App() {

  (async () => {
    // 本地端要在web server伺服器上才可執行
    // json的連結必須是公開網址下的來源
    const data = await axios.get('https://marcus-0417.github.io/Weather/json/F-C0032-001.json');
    // console.log(data);
    const { location } = data.data.cwaopendata.dataset;
    console.log(location);

    // locationName => 縣市名稱
    // elementName => Wx => 天氣概況
    // elementName => PoP => 降雨機率

  })()


  return (

    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        <ShowCity />
      </div>
    </>
  )
}
export default App