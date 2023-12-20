import React from 'react';
import './PartnerPage.css'; 
import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';
import ContactUs from '../AboutUs/ContactUs/ContactUs';



const PartnersPage = () => {

  const partners = [
    {
      name: 'Rolex',
      image: '/img/Rolex_logo.svg.png',
      history: 'Rolex, швейцарская компания по производству часов, была основана в Женеве в 1905 году Гансом Вильдорфом. Название Rolex было зарегистрировано в 1915 году, и с тех пор бренд стал символом превосходства и статуса. Rolex известен своей инновационной технологией и выдающимися часовыми механизмами.',
      innovations: "Rolex был первым, кто создал водонепроницаемые часы, и первым, кто предложил механизм с автоматическим заводом. Бренд также славится своим уникальным подходом к дизайну и использованием только высококачественных материалов.",
    },
    {
      name: 'Hublot',
      image: 'img/hublot_logo.png',
      history: 'Hublot - швейцарский бренд, основанный Рикардо Гвадалупе в 1980 году. Он стал известен благодаря своему революционному дизайну, объединяющему традицию и инновацию. Название Hublot переводится с французского как , что символизирует прозрачные циферблаты часов.',
      innovations: "Hublot произвел революцию в часовой индустрии, первым представив часы с резиновым ремешком и корпусом из драгоценных металлов. Они также известны своими арт-часами и использованием уникальных материалов, таких как керамика и титан.",
    },
    {
      name: 'Cartier',
      image: '/img/Cartier-logo.jpg',
      history: 'Cartier, основанный Луи-Франсуа Картье в 1847 году в Париже, стал одним из самых престижных брендов в мире. Бренд славится своими украшениями и часами, которые стали символами роскоши и элегантности.',
      innovations: "Cartier внес огромный вклад в мир часового искусства, создавая первые наручные часы для бразильского авиатора Альберто Сантоса-Дюмонта в 1904 году. Их модели Tank и Ballon Bleu стали классикой дизайна и подчеркнули мастерство бренда.",
    },
  ];

  return (
  
    <div className="partners-container">    
      <Header />
      {partners.map((partner, index) => (
        <div key={index} className="partner-item">
          <img src={partner.image} alt={partner.name} className="partner-image" />
          <div className="partner-info">
            <h2>{partner.name}</h2>
            <h4>{partner.history}</h4>
            <p>{partner.innovations}</p>
          </div>
        </div>
      ))}
      <div className='con'>
        <h2>Для заказа</h2>
        <p>Заполните ниже</p>
        <p>|</p>
        <p>\/</p>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default PartnersPage;
