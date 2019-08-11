import React from 'react'

export default function Servicephotosection() {
    return (
   <div className="row">
   <div className="col-10 col-sm-10 mx-auto">    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://as2.ftcdn.net/jpg/00/62/69/83/500_F_62698315_DBhizCS5J7p9ft1AwZRZv8FZJlQMu9ix.jpg" class="d-block w-100" alt="Image goes Here"/>
          </div>
          <div class="carousel-item">
            <img src="https://as2.ftcdn.net/jpg/00/62/69/83/500_F_62698315_DBhizCS5J7p9ft1AwZRZv8FZJlQMu9ix.jpg" class="d-block w-100" alt="Image goes Here"/>
          </div>
          <div class="carousel-item">
            <img src="https://as1.ftcdn.net/jpg/01/57/81/92/500_F_157819274_D5Fc2fjARNiR70SQv8wK3rBxtNwq1BC5.jpg" class="card-img-top" alt="Image goes Here"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
    </div> 
    </div>    
    )
}
