
import './App.css';
// import Right from './ui/components/WritePage/Right/Right';
// import Write from './ui/components/WritePage/Write';
// import LandingPage from './ui/components/LandingPage/LandingPage';
import Middle from './ui/LandingPage/Middle/Middle';
import Sidebar from './ui/LandingPage/Navigation/Sidebar';
import Right from './ui/LandingPage/Right/Right';

function App() {
  return (
    <div className="App">

      {/* <Write />    */}
      {/* <Right />    */}
      {/* <LandingPage /> */}
     <div id="sidebarr"><Sidebar /></div>
     <div id='middlebarr'><Middle /></div>
     <div id='rightbar'><Right /></div>
     
     </div>
  );
}

export default App;
