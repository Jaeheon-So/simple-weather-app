import { useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭하면 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 클릭하면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 가져오는 동안 로딩 스피너가 돈다.

function App() {
  return (
    <>
      <div className="container">
        <WeatherBox />
        <WeatherButton />
      </div>
    </>
  );
}

export default App;
