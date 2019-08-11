import React from 'react'
import Heading from "./Heading"
import { Link} from "gatsby"

export default function DualInfoBlock({heading,img}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <div className="container">
           <Heading title={heading} />
           <div className="row">
              <div className="col-8 mx-auto">
                <p className="lead text-white mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae, unde dolorem rem exercitationem dolores necessitatibus, nostrum ad odit atque blanditiis ducimus asperiores nihil? Voluptas eum perspiciatis aperiam maiores adipisci. Inventore numquam animi quasi sit hic cupiditate temporibus neque doloremque quaerat incidunt, corporis fuga quos dolore vero accusamus officiis nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sunt veniam expedita blanditiis numquam impedit fugiat inventore, veritatis magnam, quasi labore! Dolorum recusandae eligendi numquam ullam praesentium rerum quod voluptate, optio ab unde, natus quasi laborum nisi est excepturi laboriosam distinctio, repellendus modi eveniet! Voluptatum voluptatibus soluta maiores quibusdam recusandae magnam praesentium totam tempore iste, quod corporis culpa accusamus quam voluptate? Ducimus voluptatum delectus est laboriosam. Libero, earum fugit? Laudantium consequuntur dolore omnis error veritatis veniam doloribus illum esse ratione, labore 
                
                </p>
              </div>
              <div className="col-4">
              <div className="card bg-dark" >
              <img src={img} className="card-img-top" alt="Image Goes Here"/>
              <div className="card-body">
                <h5 className="card-title text-success">Just Click Photos </h5>
                <p className="card-text text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, distinctio molestiae magni placeat voluptatum inventore. Aut itaque, deleniti rem porro nesciunt ea vitae ipsa facere ab. Libero error illo est!
                </p>
                <a href="#" className="btn btn-warning btn-block">
                {heading}
                </a>
              </div>
            </div>
              </div>

           </div>
        </div>
        </section>
    )
}
