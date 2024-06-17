import './Contact.css'
import SlideMenu from '../Components/SlideMenu'
export default function Contact(){

    return (
        <>
            <div className="container">
                <SlideMenu />
                <div className="form-wrapper">
                <div className="box">
                    
                    <h1>ارتباط و تماس با ما</h1>
                    <div className="submit-form">
                        <form>
                            <div className="user-name">
                                <div class="input-group mb-3">
                                  <input type="text" class="form-control" placeholder='وارد کردن اسم' aria-label="Username" maxlength="10"/>
                                  <input type="text" class="form-control"  placeholder='وارد کردن فامیلی' maxlength="16"/>
                                </div>    
                                <div class="input-group mb-3">
                                <input type="email" class="form-control email" placeholder='وارد کردن ایمیل' aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                </div>                           
                            </div>
                            <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea" placeholder='وارد کردن پیام'></textarea>
                            </div>
                               <div class="d-grid gap-2">
                                    <button  class="btn" type="button">ثبت</button>
                               </div>
                            
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>ارتباط مستقیم از طریق ایمیل</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h6><a className='Email-link' href="mailto: iamfatimarahimi@gmail.com">iamfatimarahimi@gmail.com</a></h6>
                        </div>
                    </div>
                </div>
                <div className="box-half"> </div>
                </div>
              </div>
            
        </>
    )
}