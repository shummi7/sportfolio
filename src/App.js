import React from 'react';
// header
import Header from './Header';
import Sidebar from './Sidebar';
//Home
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';


import bg1 from './svgfiles/bg1.svg';
import bg3 from './svgfiles/bg3.svg';
import bg4 from './svgfiles/bg4.svg';
import bg5 from './svgfiles/bg5.svg';
import bg55 from './svgfiles/bg55.svg';
import bg6 from './svgfiles/bg6.svg';
import bg7 from './svgfiles/bg7.svg';



import './reset.min.css';
import './App.css';


class App extends React.Component{

  constructor(){
    super();
    this.state={
      // header//////
      headerScroll:false,
      hamsactive:false,
      sidebarStatus:'close'
    }
  }

  // Header//////

  componentDidMount(){
    document.addEventListener('scroll',()=>{
      if(window.scrollY>60){
        this.setState({headerScroll:true});
      }
      else{
        this.setState({headerScroll:false});
      }
    })
  }
  onHamButtonClick=()=>{
    if(this.state.sidebarStatus==='close'){
      this.setState({sidebarStatus:'open'});
      this.setState({hamsactive:true});
    }
    else{
      this.setState({sidebarStatus:'close'});
      this.setState({hamsactive:false});
    }
  }

  onAClick=()=>{
    this.setState({sidebarStatus:'close'});
    this.setState({hamsactive:false});
  }

  render(){
    return(
      <div>
        <div className='main'>
        <img className='img_bg1' src={bg1} alt='img1'/>
        <img className='img_bg2' src={bg3} alt='img2'/>
        <img className='img_bg3' src={bg4} alt='img3'/>
        <img className='img_bg4' src={bg5} alt='img4'/>
        <img className='img_bg44' src={bg55} alt='img5'/>
        <img className='img_bg5' src={bg6} alt='img6'/>
        <img className='img_bg6' src={bg7} alt='img7'/>

        {/* Header */}
        <Header 
          headerScroll={this.state.headerScroll}
          onHamButtonClick={this.onHamButtonClick}
          hamsactive={this.state.hamsactive}
        />
        <Sidebar 
          sidebarStatus={this.state.sidebarStatus}
          onAClick={this.onAClick}
          />


       {/* Home */}
       
        <Home/>
        <About/>
        {/* <Skills/> */}
        
        <Project/>
        <Contact/>
        </div>
        <Footer/>

      </div>
    )
  }
}
















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
