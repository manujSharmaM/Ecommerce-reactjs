import React from 'react'
import Heading from '../Reuseable/Heading'
export default function contact() {
    return (
        <section className="py-3" >
           <Heading title ="Contact Us"/>
           <div className="col-10 col-sm-8 mx-auto">
              <form action="" method="POST">
                  <div className="form-group">
                    <input className="form-control  " type="text" name="name" id="name"
                      placeholder="Your Name" />
                  </div> 
              </form>
           </div>

           <div className="col-10 col-sm-8 mx-auto">
              <form action="https://formspree.io/manujsharmadeveloper@gmail.com" method="POST">
                  <div className="form-group">
                    <input className="form-control" type="text" name="email" id="email"
                      placeholder="Your Email" />
                  </div> 
              </form>
           </div>

           <div className="col-10 col-sm-8 mx-auto">
              <form action="" method="POST">
                  <div className="form-group">
                    <input className="form-control"
                     type="text" 
                     name="phone" 
                     id="phone"
                     placeholder="Your Phone Number" />
                  </div> 
              </form>
           </div>

           <div className="col-10 col-sm-8 mx-auto">
           <form action="" method="POST">
               <div className="form-group">
                 <input className="form-control"
                  type="text" 
                  name="description" 
                  id="description"
                  placeholder="Your message" />
               </div> 
           </form>

           <button type="submit" className="btn btn-outline-info btn-block" >Submit </button>
        </div>

        </section>
      
    )
}
