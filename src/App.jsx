import { useEffect, useState } from "react"
import axios from "axios"
import { IoUmbrella } from "react-icons/io5";


function App() {
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {

    (async () => {
      // 本地端要在web server伺服器上才可執行
      // json的連結必須是公開網址下的來源
      const data = await axios.get('https://marcus-0417.github.io/Weather/json/F-C0032-001.json');
      // console.log(data);
      const { location } = data.data.cwaopendata.dataset;
      console.log(location);
      setWeatherList(location);

      // locationName => 縣市名稱
      // elementName => Wx => 天氣概況
      // elementName => PoP => 降雨機率

    })()
  }, [])


  return (
    <div className="wrap">
      <h2>36小時天氣預報</h2>
      <div className="container">
        {
          weatherList.map((city) => {
            return (
              <div className="item" key={city.locationName}>
                <h3>{city.locationName}</h3>
                <div className="content">
                  {city.weatherElement[0].time.map((time, index) => {
                    return (
                      <div className="item2" key={index}>
                        {/* 日期 */}
                        <p>{new Date(time.startTime).toLocaleString(undefined, { day: "numeric" })}</p>
                        {/* 時間區間 */}
                        <p>
                          {new Date(time.startTime).toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}<br />
                          ~<br />
                          {new Date(time.endTime).toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}
                        </p>
                        {/* 天氣圖示 */}
                        {/* <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p> */}
                        <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>

                        {/* 天氣圖名稱 */}
                        <p>{time.parameter.parameterName}</p>

                        {/* 溫度 */}
                        <p>{city.weatherElement[2].time[index].parameter.parameterName}°C
                          ~
                          {city.weatherElement[1].time[index].parameter.parameterName}°C</p>

                        {/* 天氣概況 */}
                        <p>{city.weatherElement[3].time[index].parameter.parameterName}</p>

                        {/* 降雨機率 */}
                        <p><IoUmbrella size={15} color="blue" />{city.weatherElement[4].time[index].parameter.parameterName}%</p>

                      </div>
                    )
                  })}
                  {/* <div className="item2">
                    <p>{new Date(city.weatherElement[0].time[0].startTime).toLocaleString(undefined)}</p>
                    <p>
                      上午6:00<br />
                      ~<br />
                      下午6:00
                    </p>
                    <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p>
                    <p>陰短暫雨</p>
                    <p><IoUmbrella size={15} color="blue" />30%</p>
                  </div> */}
                </div>
              </div>
            )
          })
        }
      </div >
    </div >
  )
}
export default App