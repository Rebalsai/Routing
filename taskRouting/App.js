import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter,Route,Switch,Routes } from "react-router-dom";
import Crud from './react/task.js/crudForm';
import NavigationRouting from './taskRouting/navrouting';
import Nestead from './taskRouting/screen1';
import Nestead2 from './taskRouting/screen2';
import Parameter from './taskRouting/screen3';
import Nestead3 from './taskRouting/screen4';
import App1 from './taskRouting/screen5';
function App(props) {
  return (
    <>
      <BrowserRouter>
        <NavigationRouting/>
        <Routes>
        <Route path="home" exact element={<Nestead/>}/>
        <Route path="screen2" exact element={<Nestead2/>}/>
        <Route path="screen3/:id" exact element={<Parameter/>}/>
        <Route path="screen4" exact element={<Nestead3/>}/>
        <Route path="screen4/form" exact element={<Form/>}/>
        <Route path="screen4/grid" exact element={<Crud/>}/>
        {/* </Route> */}
        <Route path="screen5/:id" exact element={<App1/>}/>
        <Route path=''/>
      </Routes>
      </BrowserRouter>
        
        </>

  );
}

export default App;
