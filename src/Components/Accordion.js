import React, { useState, useEffect } from 'react';

const Accordion = ({ title, content , link }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let autoOpenTimeout;

    autoOpenTimeout = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(autoOpenTimeout);
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? <i class='bx bx-chevron-up' ></i> : <i class='bx bx-chevron-down'></i>}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
          <p>{link}</p>
        </div>
      )}
    </div>
    </div>
  );
};

const App = () => {
  const [accordions] = useState([
    { title: 'چطور می‌توانم سفارشم را پیگیری کنم؟', content: 'وارد سایت شوید. روی گزینه سفارش‌های من کلیک کنید. در این قسمت با کلیک روی جزییات می‌توانید سفارش خود را ببینید. می‌توانید در این قسمت روند آماده‌سازی و مراحل ارسال سفارش خود را پیگیری کنید.', link:<a href='https://www.digikala.com/faq/question/3/'>توضیحات بیشتر</a>, },
    { title: 'چطور میتوانم سفارشم را لغو کنم ؟"', content: 'شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو سفارش به توضیحات تکمیلی مراجعه کنید.', link:<a href='https://www.digikala.com/faq/question/116/'>توضیحات بیشتر</a>, },
    { title: 'میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟', content: '`بله، سایت ما تسهیلاتی را فراهم کرده، شما میتوانید تا سقف 20 میلیون تومان به صورت اقساط  با بازپرداخت  6 ، 9 و 12 ماهه از سایت خرید کنید.', link:<a href='https://www.digikala.com/faq/question/27/'>توضیحات بیشتر</a>, },
  ]);

  return (
    <div>
      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          title={accordion.title}
          content={accordion.content}
          link={accordion.link}
        />
      ))}
    </div>
  );
};

export default App;