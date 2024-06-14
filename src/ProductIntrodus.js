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
          <h2 className="mb-10">مراقبت پوستی و زیبایی</h2>
          <p className="d-flex">
            ما با افتخار مجموعه ای از بهترین محصولات پوستی را به شما معرفی می‌کنیم. این محصولات با استفاده از ترکیبات طبیعی و فرمولاسیون کارآمد، به طور عمیق در پوست نفوذ کرده و مشکلات مرتبط با پوست را حل می‌کنند.
            همراه با این مجموعه محصولات پوستی، مشاوران ما نیز آماده پاسخگویی به سوالات شما و ارائه راهنمایی‌های لازم در زمینه مراقبت از پوست هستند.
          </p>
          <div className="buttons">
             <button id='login'>مشاهده بیشتر</button>
          </div>
        </div>
      </div>

      <div className="row mt-10">
        <div className="col-6">
          <h2 className="mb-3">تمیزی خانه را به ما بسپارید</h2>
          <p className="">
            با افتخار سرویس تمیزی خانه را به شما معرفی می‌کنیم. تیم حرفه‌ای ما از نظافتچیان مجرب و با تجربه، آماده است که خانه شما را به نقطه‌ای از پاکی و زیبایی رسانده و شما را از زحمت‌های نظافت خود آزاد کنند.

ما با استفاده از بهترین و موثرترین تجهیزات و مواد نظافتی، همه جزئیات خانه شما را تمیز و براق می‌کنیم. از تمیز کردن اتاق‌ها، سرویس بهداشتی، کف‌پوش‌ها و مبلمان تا شیشه‌ها و وسایل آشپزخانه، هیچ جزئی از خانه شما به فراموشی سپرده نمی‌شود.
          </p>
          <div className="buttons">
            <button id='login'>مشاهده بیشتر</button>
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
          <h2 className="mb-3">چیزی نیست که ما نتوانیم تعمیر کنیم</h2>
          <p>
            با افتخار سرویس تعمیر وسایل را به شما معرفی می‌کنیم. تیم ما از تعمیرکاران ماهر و با تجربه تشکیل شده است که قادرند هر نوع وسیله خراب شده را تعمیر کنند و به عملکرد ایده‌آل بازگردانند.

ما تعمیر وسایلی مانند لوازم خانگی، لپ‌تاپ‌ها، تلفن همراه، تلویزیون، یخچال و فریزر، دستگاه‌های الکترونیکی و بسیاری دیگر را انجام می‌دهیم. با استفاده از تجهیزات حرفه‌ای و قطعات اصلی، ما به سرعت و با دقت مشکلات وسایل شما را تشخیص می‌دهیم و آنها را تعمیر می‌کنیم.
          </p>
          <div className="buttons">
            <button id='login'>مشاهده بیشتر</button>
         </div>
        </div>
      </div>
    </div>
  </div> 
    )
}