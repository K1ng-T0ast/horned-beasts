
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ImageUrls from './data.json';

function App() {
  return (
    <Container>
      <Header title={<><span>Horned Beasts 4: </span><span style={{ fontStyle: 'italic', fontWeight: 'bolder' }}>Drill Down</span></>} />
      <Main heading='Click to Favorite or Search Below' ImageUrls={ImageUrls} />
      <Footer farewell='Which one was your favorite?' />
    </Container>
  );
}



export default App;
