
import React, { Component, useState } from "react";
import '../styles/App.css';


// function LI(props) {
//   return <li key={"location"+ props.keys}>{props.city}</li>
// }


class App extends Component {
  
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ];
    
    // this.valid=this.valid.bind(this);

  }

  valid(){
    let a=[];
    let j=1;
    for(let i=0;i<this.cityList.length;i++){
      if(this.cityList[i].country==="India"){
        a.push(<li key={"location"+j}>{this.cityList[i].name}</li>);
        if(j==3)break;
        j++;
        
      }
      
    }
    return <ol>{a}</ol>;
  }
  

  render() {
    // let [j,setJ]=useState(0);
    
    return (
      <div id="main">
        {/* Do not remove the main div */}
        {this.valid()}
        
        
      </div>
    )
  }
}


export default App;
