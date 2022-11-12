import './styles.css';
import Navbardemo from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableShow from './components/tableShow';
import Container from 'react-bootstrap/esm/Container';
import { DatePicker } from 'antd';
import ButtonSave from './components/button';
import MyApp from './components/Date';
import Example from './components/Date';
import { Carousel } from 'bootstrap';
import AdditionalContentExample from './components/Alert';
import Tires from './components/Title';
import ButtonAppBar from './components/Navbar';



function App() {
  return (
      <>
      <ButtonAppBar/>
      <br/>
      <Tires/>
      <AdditionalContentExample/>
     
      <container><h2>อัตราแลกเปลี่ยนเงินตราประจำวัน</h2></container>
      <br/>
      <TableShow/>
      
      <MyApp/>
      
      
      </>
      
      
      
    
  );
}

export default App;
