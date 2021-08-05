import './App.css';
import Addkeyword from './components/addKeywords';
import SideNavbar from './components/sideNav';
import TopNav from './components/topNav';


function App() {
  return (
    <div className="App">

      <SideNavbar />
      <div className="content_area">
        <TopNav />
        <Addkeyword />
      </div>
    </div>
  );
}

export default App;
