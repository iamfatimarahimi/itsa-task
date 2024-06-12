import image3 from './images/image 3.jpg';
export default function productIntrodus(){
    return(
        <div className="productIntrodus">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={image3} alt="" />
                    </div>
                    <div className="col-6 ">
                        <h1>مراقبت پوستی و زیبایی</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias unde impedit in vel dolores quo numquam eos. Cumque dolor, placeat perspiciatis repellendus doloremque assumenda tempora unde ut voluptates. Magni?</p>
                    </div>
                    {/* 2 */}
                    
                    <div className="col-6">
                        <h1>مراقبت پوستی و زیبایی</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias unde impedit in vel dolores quo numquam eos. Cumque dolor, placeat perspiciatis repellendus doloremque assumenda tempora unde ut voluptates. Magni?</p>
                    </div>
                    <div className="col-6">
                        <img src={image3} alt="" />
                    </div>
                    {/* 3 */}
                    <div className="col-6">
                        <img src={image3} alt="" />
                    </div>
                    <div className="col-6">
                        <h1>مراقبت پوستی و زیبایی</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestias unde impedit in vel dolores quo numquam eos. Cumque dolor, placeat perspiciatis repellendus doloremque assumenda tempora unde ut voluptates. Magni?</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}