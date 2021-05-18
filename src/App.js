
import './App.css';
import React from 'react';
import Header from './component/header';
import Main from './component/main';
import Footer from './component/footer';
import data from './component/data.json';
import SelectedBeast from './component/Selected';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     dataArr: data,
     element: {},
     show:false,
    }
  }
  showStuff = (para) => {

    let newElement = data.find((element) => {
      if (element.title === para) {
        return element;
      }
    })
    this.setState({
      element:newElement,
      show:true,
    })
    
  }
  hideStuff=(para)=>{
    this.setState({
      show:false,
    })
  }


  render() {
    return (
      <div>
        <Header />
        <SelectedBeast
        show={this.state.show}
        ajga={this.state.element}
        hideStuff={this.hideStuff}
        />
        <Main
          beastInfo={this.state.dataArr}
          showStuffFromApp={this.showStuff}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
