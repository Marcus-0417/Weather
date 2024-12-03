import { useEffect } from "react"
import axios from "axios"
import { IoUmbrella } from "react-icons/io5";


function App() {

  useEffect(() => {
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
  }, [])

  return (

    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/* 一列兩欄 */}
        <div className="row">
          {
            location.map((city) => {
              return (
                <div className="col">
                  {/* 卡片樣式 */}
                  <div className="card"></div>
                  {/* 標題 */}
                  <div className="title">{city.locationName}</div>
                  {/* 內容 */}
                  <div className="content">
                    {/* 一列三欄 */}
                    <div className="row2">
                      {/* 第一欄 */}
                      <div className="col2">
                        <p>2日</p>
                        <p>上午6:00<br />~<br />下午6:00</p>
                        {/* <p><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></p> */}
                        <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                        <p>晴時多雲</p>
                        <p><IoUmbrella />10%</p>
                      </div>
                      {/* 第二欄 */}
                      <div className="col2">
                        <p>2日</p>
                        <p>上午6:00<br />~<br />下午6:00</p>
                        <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                        <p>晴時多雲</p>
                        <p><IoUmbrella />10%</p>
                      </div>
                      {/* 第三欄 */}
                      <div className="col2">
                        <p>2日</p>
                        <p>上午6:00<br />~<br />下午6:00</p>
                        <p><img src="./weatherIcon/晴時多雲.svg" alt="" /></p>
                        <p>晴時多雲</p>
                        <p><IoUmbrella />10%</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default App