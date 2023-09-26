import Homepage from '../components/homepage/homepage';
import Ourproduct from '../components/ourproduct/ourproduct';
import Aboutus from '../components/aboutus/aboutus';

function Home() {
  return (
    <div className="App">
        <Homepage/>     
        <Ourproduct/>
        <Aboutus/>
    </div>
  );
}

export default Home;