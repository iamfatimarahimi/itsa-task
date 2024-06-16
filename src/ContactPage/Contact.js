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
                                <input className='user_f' type="text" placeholder='وارد کردن اسم' maxlength="10"/>
                                <input className='user_L' type="text" placeholder='وارد کردن فامیلی' maxlength="16"/> 
                                <br />
                                <input className='email'  type="email"  placeholder='وارد کردن ایمیل'/>
                            </div>
                            <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea" placeholder='وارد کردن پیام'></textarea>
                            </div>
                               <div class="d-grid gap-2">
                                    <button class="btn" type="button">ثبت</button>
                               </div>
                            
                        </form>
                    </div>
                </div>
                <div className="box-half">
                    {/* <div className="row">
                        <div className="col-12">
                            <h1>ارتباط مستقیم از طریق ایمیل</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4><a className='Email-link' href="mailto: iamfatimarahimi@gmail.com">iamfatimarahimi@gmail.com</a></h4>
                        </div>
                    </div> */}
                    
                    
                    </div>
                </div>
              </div>
            
        </>
    )
}