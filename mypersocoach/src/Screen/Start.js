import React, {Component} from 'react';
import IconMain from '../Component/IconMain';
import HeadingText from '../Component/HeadingText'
import DisplayModal from '../Component/DisplayModal'

import '../Component/Problem.css'




class Start extends Component {
  
  state = {
    icon : [],
    headingText1 : []
    
  }

  getHeadingText1 = () => {
      fetch('http://localhost:3004/text_static/1')
        .then(res => res.json())
        .then(data => {
          this.setState({ headingText1 : data[0] })
        })
    }

    getHeader = () => {
      fetch('http://localhost:3004/icon/27')
          .then(res => res.json())
          .then(data => {
              this.setState({ icon : data[0] })
          })
     
      }


  componentDidMount(){
    this.getHeadingText1()
    this.getHeader()
  }
  
  
  
  
  
  render() {
    return (
      <div className="startContainer">
        <IconMain icon={this.state.icon.picture_src} />
        <HeadingText text_static= {this.state.headingText1.all_text} />
        <DisplayModal />
        
      </div>
  )}
}


export default Start;
