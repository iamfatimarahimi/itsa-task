import image3 from './images/image 3.jpg';
import image4 from './images/image 4.png';
import image5 from './images/image 5.jpg';
export default function productIntrodus(){
    return(
        <div className="productIntrodus">
            <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid rounded p-2"
            src={image3}
            alt="weather"
          />
        </div>
        <div className="col-6">
          <h2 className="mb-10 text-start">مراقبت پوستی و زیبایی</h2>
          <p className="d-flex text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
          </p>
          <div className="buttons">
             <button id='login'>View More</button>
          </div>
        </div>
      </div>

      <div className="row mt-10">
        <div className="col-6">
          <h2 className="mb-3 text-end">Weather app</h2>
          <p className="text-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
          </p>
          <div className="buttons">
            <button id='login'>View More</button>
         </div>
        </div>
        <div className="col-6">
          <img
            src={image4}
            alt="Weather Project"
            className="img-fluid rounded"
          />
        </div>
      </div>

      <div className="row mt-10">
        <div className="col-6">
          <img
            src={image5}
            alt="yogurt Project"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-6">
          <h2 className="mb-3 text-start">Yogurt app</h2>
          <p className="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
          </p>
          <div className="buttons">
            <button id='login'>View More</button>
         </div>
        </div>
      </div>
    </div>





            {/* <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={image3} alt="" />
                    </div>
                    <div className="col-6 ">
                        <h1>مراقبت پوستی و زیبایی</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias unde impedit in vel dolores quo numquam eos. Cumque dolor, placeat perspiciatis repellendus doloremque assumenda tempora unde ut voluptates. Magni?</p>
                        
                    </div> */}
                    {/* 2 */}
                    
                    {/* <div className="col-6">
                        <h1>مراقبت پوستی و زیبایی</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias unde impedit in vel dolores quo numquam eos. Cumque dolor, placeat perspiciatis repellendus doloremque assumenda tempora unde ut voluptates. Magni?</p>
                        <div className="buttons">
                        <button id='login'>View More</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={image3} alt="" />
                    </div> */}
                    {/* 3 */}
                    {/* <div className="col-6">
                        <img src={image3} alt="" />
                    </div>
                    <div className="col-6">
                        <h1>مراقبت پوستی و زیبایی</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias unde impedit in vel dolores quo numquam eos. Cumque dolor, placeat perspiciatis repellendus doloremque assumenda tempora unde ut voluptates. Magni?</p>
                        <div className="buttons">
                        <button id='login'>View More</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div> 
    )
}