import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

const catImage = 'https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg'
const leonImage = 'https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467_960_720.jpg'
const goatImage = 'https://cdn.pixabay.com/photo/2016/08/16/01/19/goat-1596880_960_720.jpg'
function App() {

  return (
    <div className='conteiner'>
      <Header title="Galeria de imagenes con react" />
      
      <div className='cards'>
        <Card img={catImage} subtitle="Gato" description="Omnivero" alt="gato" />
        <Card img={leonImage} subtitle="Leon" description="Carnivoro" alt="leon"/>
        <Card img={goatImage} subtitle="Cabra" description="Herviboro" alt="cabra"/>
      </div>

      <Footer text="Todos los derechos reservados"/>
    </div>
  );
}

export default App;
