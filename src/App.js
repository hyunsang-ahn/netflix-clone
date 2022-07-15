import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      {/* NAV */}
      <Nav />
      {/* BANNER */}
      <Banner />
      <Row title="넷플릭스 오리자널" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="현재 트랜드" fetchUrl={requests.fetchTrending} />
      <Row title="최고 인기" fetchUrl={requests.fetchTopRated} />
      <Row title="액션 영화" fetchUrl={requests.fetchActionMovies} />
      <Row title="코메디 영화" fetchUrl={requests.fetchComedyMovies} />
      <Row title="호러 영화" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="로맨스 영화" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="다큐멘터리 영화" fetchUrl={requests.fetchDocumantaries} />

    </div>
  );
}

export default App;
