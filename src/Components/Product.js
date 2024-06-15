import icon1 from '../images/icon-1.webp';
import icon2 from '../images/icon-2.webp';
import icon3 from '../images/icon-3.webp';
import icon4 from '../images/icon-4.webp';
import icon5 from '../images/icon-5.webp';
import icon6 from '../images/icon-6.webp';
import icon7 from '../images/icon-7.webp';
import icon8 from '../images/icon-8.webp';
export default function ImageFluid(){
    return(
    <div className="imageFluid">
        <div className="container">
            <h1 className="text-center title-product" >انواع خدمات</h1>
            <div className="row text-center">
                     <div className="col-3 ">        
                            <div className="item-image">
                               <a href=""><img className='icon-image' src={icon1} alt="icon-1"/></a> 
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">تعمیرات</a>
                        </div>

                        <div className="col-3 ">                            
                            <div className="item-image">
                                <a href=""><img className='icon-image' src={icon2} alt="icon-1"/></a>
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">حمل و نقل</a>
                        </div>

                        <div className="col-3 ">                          
                            <div className="item-image">
                               <a href=""><img className='icon-image' src={icon3} alt="icon-1"/></a> 
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">تعمیرات خودرو</a>
                        </div>

                        <div className="col-3 ">                         
                            <div className="item-image">
                              <a href=""><img className='icon-image' src={icon4} alt="icon-1"/></a>  
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">میکاپ و زیبایی</a>
                        </div>

                        <div className="col-3 ">                           
                            <div className="item-image">
                              <a href=""><img className='icon-image' src={icon5} alt="icon-1"/></a>  
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">سازمان ها و <br /> مجمتع ها</a>
                        </div>

                        <div className="col-3 ">                           
                            <div className="item-image">
                               <a href=""><img className='icon-image' src={icon6} alt="icon-1"/></a> 
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">کشکول</a>
                        </div>

                        <div className="col-3 ">                           
                            <div className="item-image">
                               <a href=""><img className='icon-image' src={icon7} alt="icon-1"/></a> 
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">ساختمان</a>
                        </div>

                        <div className="col-3 ">   
                            <div className="item-image">
                              <a href=""><img className='icon-image' src={icon8} alt="icon-1"/></a>  
                            </div>
                            <a className='title-link' href="https://codepen.io/alphardex/pen/jOWMGON">تمیز کاری</a>
                        </div>
                     
            </div>
        </div>
    </div>
    )
}