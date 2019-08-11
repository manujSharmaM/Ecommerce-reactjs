import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function infolock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
          <div className="container">
             <Heading title={heading} />
             <div className="col-10 col-sm-8 mx-auto text-center">
                  <p className="lead text-white mb-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. At um quod vel aliquam doloremque ratione sed eligendi? Ipsam blanditiis vero enim, modi incidunt alias voluptas, tenetur consequatur labore doloribus est accusamus, sed rem! Atque, deserunt quae temporibus sint voluptates ratione omnis similique. Ipsam voluptas laboriosam eveniet! Repudiandae dolore hic dolores earum illum impedit harum quisquam, libero sit. Exercitationem, ipsam doloremque?
                  </p>
                  <Link to="/about/">
                      <button className="btn btn-warning btn-lg">{heading}
                      </button>
                  </Link>
             </div>
          </div>
            
        </section>
    )
}
