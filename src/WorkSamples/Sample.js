import Shot1 from './Image/Screenshot (382).png'
import Shot2 from './Image/Screenshot (383).png'
import Shot3 from './Image/Screenshot (384).png'
import Shot4 from './Image/Screenshot (385).png'
export default function Sample(){
    return(
        <div className='sample'>
            <div className="contaoner">
                <h1 className='text-center '>مجموعه های همکار با سایت </h1>
                <div className="row">
                    <div className="div col-3">
                        <img className='sample-img img-fluid ' src={Shot1} alt="" />
                    </div>
                    <div className="div col-3">
                        <img className='sample-img' src={Shot2} alt="" />
                    </div>
                    <div className="div col-3">
                        <img className='sample-img' src={Shot3} alt="" />
                    </div>
                    <div className="div col-3">
                        <img className='sample-img' src={Shot4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}