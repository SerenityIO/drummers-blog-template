import React, { Component, Fragment } from 'react'

 class Form extends Component {
   render() {
     return(
       <Fragment>
           <p class="contact"><b>Contact</b></p>
           <p class="text"><b>Let's get to know each other beter. I would love to hear from you</b></p>
         <form class="form">
           <input placeholder="Your Name*" type="text" />
           <input class ="margin" placeholder="Your E-mail*"type="text" />
           <input placeholder="Subject" type="text" />
         </form>
         <div class="form_2">
           <p><textarea placeholder="Your Message" rows="10" cols="45" name="text"></textarea></p>
         </div>
         <div class="form_3">
           <input type="button" value="Send"/>
         </div>
         <p class="ask"><b>Ask ole</b></p>
         <p class="text_2"><b>Want to be featured in my podcast? I'll be answering all your questions here. Click the
         button below to record your your question. Please keep it to about a minute long, polite, non-spammy, and
         focused on drumming. I lere are the full submission quidelines.</b></p>
         <div class="form_4">
           <input placeholder="Your Name*" type="text" />
           <input class ="margin" type="button" value="remove"/>
           <input type="button" value="Send"/>
         </div>
         <p class="text_3"><b>If your question appears on Ask Ole, you'll get an email from me within a week asking
         you for your shipping address and t-shirt size. This is my way of thanking you for asking a great question
         and helping to deliver more value to the drummersblog community.</b></p>
         <div class="display">
           <form class="form_5">
             <input placeholder="E-mail*" type="text" />

           </form>
           <form class="form_6">
             <input class = "detalis"placeholder="Additional Details" type="text" />
           </form>
         </div>

       </Fragment>
     )
   }
 }

export default Form
