import './WatchServiceCenter.css';
import Header from '../../compoments/Header';
import Footer from '../../compoments/Footer';
import MapComponent from '../Maps';
const servicesData = [
  {
    id: 1,
    title: 'Регулировка механизма',
    description: 'Профессиональная настройка механизма для точности времени.',
    image: '/img/Регулировка_механизма.png',
  },
  {
    id: 2,
    title: 'Замена батарейки',
    description: 'Быстрая и надежная замена батареек с гарантией.',
    image: '/img/Замена_батарейки.png',
  },
  {
    id: 3,
    title: 'Ремонт браслета',
    description: 'Реставрация и ремонт браслетов для комфортной носки.',
    image: '/img/Ремонт_браслета.png',
  },
  {
    id: 4,
    title: 'Чистка и полировка',
    description: 'Очистка и полировка для поддержания внешнего вида часов.',
    image: '/img/Чистка_полировка.png',
  },
];



function WatchServiceCenter() {
  return (
    <div className="WatchServiceCenter">
      <Header />
      <section className="Services">
        <h2>Наши Услуги</h2>
        <div className="ServicesGrid">
          <div className="ServiceRow">
            {servicesData.slice(0, 2).map((service) => (
              <div key={service.id} className="ServiceBox">
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="ServiceRow">
            {servicesData.slice(2, 4).map((service) => (
              <div key={service.id} className="ServiceBox">
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="About">
        <h2>О Нас</h2>
        <h5>Добро пожаловать в наш сервисный центр!</h5>
        <p>
          Мы — команда профессионалов, специализирующихся на ремонте и обслуживании наручных часов разнообразных марок. 
         С годами опыта мы гарантируем качественный и надежный сервис для всех видов часов. 
         Ваши часы в надежных руках опытных мастеров, готовых восстановить их функциональность с любовью к деталям.
        </p>
      </section>
      <h2>Адрес</h2>
     <MapComponent />
      <Footer />
    </div>
  );
}

export default WatchServiceCenter;
