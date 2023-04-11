
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ImageUrls from './data.json';

function App() {
  return (
    <Container>
      <Header title={'Horned Beasts 2: Judgement Day'} />
      <Main heading='What is your opinion?' ImageUrls={ImageUrls} />
      <Footer farewell='Your opinion counts!' />
    </Container>
  );
}



export default App;
