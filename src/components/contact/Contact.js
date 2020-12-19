import './Contact.css';
// import '.../App.js'
import {Component} from 'react';
import axios from 'axios'

import Footer from '../footer/Footer'
class Contact extends Component{
    constructor(){
        super()
        this.state = {
          name:'',
          email:'',
          phone:'',
          desc:''
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeDesc = this.changeDesc.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      changeName(event){
        this.setState({
          name:event.target.value
        })
      }
    
      changeEmail(event){
        this.setState({
          email:event.target.value
        })
      }
      
      changePhone(event){
        this.setState({
          phone:event.target.value
        })
      }
      
      changeDesc(event){
        this.setState({
          desc:event.target.value
        })
      }
    
      onSubmit(event){
        event.preventDefault()
    
        const registered = {
          name:this.state.name,
          email:this.state.email,
          phone:this.state.phone,
          desc:this.state.desc
        }
    
        axios.post("http://localhost:4000/app/contact", registered)
          .then(response => console.log(response.data))
    
        this.setState({  
          name:'',
          email:'',
          phone:'',
          desc:''
        })
      }

    render(){
       return(
            <div>
                <div className="box">
                    <div className="item auto">Contact </div>
                </div>
                <div className="box1">
                    <form className="myForm" onSubmit={this.onSubmit}>
                        <input className="myInput" type="text" name="name" placeholder="Name" onChange={this.changeName} value={this.state.name}/>
                        <input className="myInput" type="email" name="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email}/>
                        <input className="myInput" type="phone" name="phone" placeholder="Phone" onChange={this.changePhone} value={this.state.phone}/>
                        <input className="myInput" type="text" name="desc" placeholder="Type your message here..." onChange={this.changeDesc} value={this.state.desc}/>
                        <button className="btn" type="submit" value="submit">submit</button>
                </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;
