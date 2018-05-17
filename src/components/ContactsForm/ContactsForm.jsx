import React, { Component, Fragment } from 'react'


import Input from '../../components-lib/Input'
import './ContactsForm.scss'

 class Form extends Component {
   render() {
     return(
       <Fragment>
         <p className="contact"><b>Contact</b></p>
         <p className="text"><b>Let's get to know each other beter. I would love to hear from you.</b></p>
         <div className="container">
           <div className="row center-xs">
             <div className="col-xs-10 col-sm-3">
                <div className="box">
                    <Input placeholder="Your Name*" />
                </div>
             </div>
             <div className="col-xs-10 col-sm-3">
                <div className="box">
                    <Input  placeholder="Your E-mail*" />
                </div>
             </div>
             <div className="col-xs-10 col-sm-3">
                <div className="box">
                    <Input  placeholder="Subject" />
                </div>
             </div>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12">
                  <textarea className="form_2" placeholder="Your Message" rows="10" cols="45" name="text" />
            </div>
            <div className="col-xs-12">
                  <input className="form_3" type="button" value="Send"/>
            </div>
          </div>
       </div>


      </Fragment>
     )
   }
 }

export default Form
