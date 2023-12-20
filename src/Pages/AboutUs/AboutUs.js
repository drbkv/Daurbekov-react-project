  import React, { Component } from 'react';
  import './AboutUs.css';
  import Header from "../../compoments/Header";
  import Footer from "../../compoments/Footer";
  import ContactUs from './ContactUs/ContactUs';

  class AboutUs extends Component {
    render() {
      return (
        <div>
          <Header />
          <div className='presentation2'></div>

          <div className='about-us-container'>
            <div className='company-info'>
              <h2>О нас</h2>
              <p>
              Добро пожаловать в мир элегантных мужских часов, где стиль встречается с точностью!
               Наша компания предлагает уникальный выбор высококачественных часов для настоящих ценителей. 
               Мы гордимся разнообразием научных часов, сочетающих эстетику с передовыми технологиями.
              </p>
              <p>
              Наша миссия — сделать науку доступной каждому. 
              Мы предоставляем стильные и точные часы, выражающие ваш индивидуальный вкус и интерес к научному прогрессу. 
              Наши часы — не просто измерители времени, а символ утонченности и выражение вашего уникального стиля. 
              Позвольте времени стать неотъемлемой частью вашего стиля и качества.

              </p>
            </div>
          </div>

          <ContactUs />
       
          <Footer />
        </div>
      );
    }
  }

  export default AboutUs;
