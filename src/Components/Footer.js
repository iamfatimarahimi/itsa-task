export default function Footer(){
return(
    <div className="footer">
        <div className="container">
            <div className="contact-info">      
                <div className="adress">
                    <p>آدرس</p>
                <i class='bx bxs-location-plus'></i>
                </div>
                <div><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Iran%20sefidshahr+(Fatima)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
                <div className="mobile">
                    <p><a href="tel:0993359758"></a>موبایل:09933597589</p>
                <i class='bx bx-mobile' ></i>
                </div>
                <div className="phone">
                    <p>تلفن:000111</p>
                <i class='bx bxs-phone-call' ></i>
                </div>
             </div> 
        <div className="credit">
            Designed for Itsa Company
        </div>
            <hr /> 
        
            <div className="social-network">
                <p>شبکه های اجتماعی ما</p>         
            <a href=""><i class='bx bxl-instagram'></i></a>
            <a href=""><i class='bx bxl-telegram'></i></a>
            <a href=""><i class='bx bxl-whatsapp-square'></i></a>
            </div> 
    
        </div>
    </div>
)
}