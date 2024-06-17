import Shot1 from './Image/Screenshot (382).png'
import Shot2 from './Image/Screenshot (383).png'
import Shot3 from './Image/Screenshot (384).png'
import Shot4 from './Image/Screenshot (387).png'
import Shot5 from './Image/Screenshot (388).png'
import Shot6 from './Image/Screenshot (390).png'
import SlideMenu from '../Components/SlideMenu'
import Footer from '../Components/Footer'
export default function Sample(){
    return(
        <div className='sample'>
            <div className="container">
                <SlideMenu />
                <h1 className='text-center '>مجموعه های همکار با سایت </h1>
                <div class="card-group">
                    <div class="card">
                        <img class="card-img-top" src={Shot1} alt="Card image cap" />
                        <div class="card-body ">
                        <h5 class="card-title">DigiKala</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsam numquam veniam vero aliquid non. Dolore autem repudiandae incidunt quisquam, odio, molestias illum, perspiciatis eius ea minus minima voluptates! Possimus!</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Shot2} alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Aparat</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsam numquam veniam vero aliquid non. Dolore autem repudiandae incidunt quisquam, odio, molestias illum, perspiciatis eius ea minus minima voluptates! Possimus!</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Shot3} alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Blog</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsam numquam veniam vero aliquid non. Dolore autem repudiandae incidunt quisquam, odio, molestias illum, perspiciatis eius ea minus minima voluptates! Possimus!</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                {/* row2 */}
                <div class="card-group">
                    <div class="card">
                        <img class="card-img-top" src={Shot4} alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Reddit</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsam numquam veniam vero aliquid non. Dolore autem repudiandae incidunt quisquam, odio, molestias illum, perspiciatis eius ea minus minima voluptates! Possimus!</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Shot5} alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">W3Schools</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsam numquam veniam vero aliquid non. Dolore autem repudiandae incidunt quisquam, odio, molestias illum, perspiciatis eius ea minus minima voluptates! Possimus!</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={Shot6} alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Discord</h5>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsam numquam veniam vero aliquid non. Dolore autem repudiandae incidunt quisquam, odio, molestias illum, perspiciatis eius ea minus minima voluptates! Possimus!</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}