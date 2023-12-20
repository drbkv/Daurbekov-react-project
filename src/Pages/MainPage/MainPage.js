import React from "react";
import Header from "../../compoments/Header";
import Footer from "../../compoments/Footer";
import Items from "../../compoments/Items";
import Categories from "../../compoments/Categories";
import ShowFullItem from "../../compoments/ShowFullItem";
import './MainPage.css';

class MainPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Rolex Cosmograph Daytona',
          img: 'ролекс1.png',
          desc: 'Часы Rolex Cosmograph Daytona 40mm Everose Gold Rainbow Тюнинг',
          category: 'Rolex',
          price: '56600'
        },

        {
          id: 2,
          title: 'Rolex Yacht-Maste',
          img: 'ролекс 2.png',
          desc: 'Часы Rolex Yacht-Master 40mm Oystersteel and Platinum',
          category: 'Rolex',
          price: '16850'
        },

        {
          id: 3,
          title: 'Rolex Datejust ',
          img: 'ролекс3.png',
          desc: 'Часы Rolex Datejust 36mm Steel and Yellow Gold',
          category: 'Rolex',
          price: '27500'
        },

        {
          id: 4,
          title: 'Rolex Yacht-Master',
          img: 'ролекс4.png',
          desc: 'Часы Rolex Yacht-Master 42mm Yellow Gold ',
          category: 'Rolex',
          price: '28500'
        },

        {
          id: 5,
          title: 'Rolex Cosmograph Daytona',
          img: 'ролекс5.png',
          desc: 'Часы Rolex COSMOGRAPH DAYTONA 40MM PLATINUM',
          category: 'Rolex',
          price: '23500'
        },

        {
          id: 6,
          title: 'Hublot Classic Fusion Ceramic King Gold',
          img: 'hublot1.png',
          desc: 'Часы Hublot Classic Fusion Ceramic King Gold 42 мм',
          category: 'Hublot',
          price: '18200'
        },

        {
          id: 7,
          title: 'Hublot Black Magic Bracelet',
          img: 'hublot2.png',
          desc: 'Часы Hublot Classic Fusion Black Magic Bracelet',
          category: 'Hublot',
          price: '8300'
        },

        {
          id: 8,
          title: 'Hublot Classic Fusion',
          img: 'hublot3.png',
          desc: 'Часы Hublot НОВИНКА CLASSIC FUSION TITANIUM GREEN 45 mm',
          category: 'Hublot',
          price: '23500'
        },

        {
          id: 9,
          title: 'Hublot Big Bang',
          img: 'hublot4.png',
          desc: 'Часы Hublot Big Bang Split-Second Ice Bang',
          category: 'Hublot',
          price: '9200'
        },

        {
          id: 10,
          title: 'Hublot Big Bang Jeans Carbon',
          img: 'hublot5.png',
          desc: 'Часы Hublot Big Bang Jeans Carbon',
          category: 'Hublot',
          price: '15300'
        },

        {
          id: 11,
          title: 'Cartier de Pasha',
          img: 'cartier1.png',
          desc: 'Часы Cartier de Pasha',
          category: 'Cartier',
          price: '3700'
        },

        {
          id: 12,
          title: 'Cartier Pasha Tourbillon',
          img: 'cartier2.png',
          desc: 'Часы Cartier Pasha Tourbillon Collection Privee Paris',
          category: 'Cartier',
          price: '27000'
        },

        {
          id: 13,
          title: 'Cartier Santos',
          img: 'cartier3.png',
          desc: 'Часы Cartier Santos 100 Ref 2881',
          category: 'Cartier',
          price: '12500'
        },

        {
          id: 14,
          title: 'Cartier Tank Americaine ',
          img: 'cartier4.png',
          desc: 'Часы Cartier Tank Americaine Large ',
          category: 'Cartier',
          price: '4700'
        },

        {
          id: 15,
          title: 'Cartier Tank Divan ',
          img: 'cartier5.png',
          desc: 'Часы Cartier Tank Divan PM White Gold Diamonds',
          category: 'Cartier',
          price: '7000'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems= this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
} 
render(){
  return(
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <div className='presentation'></div>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  )
}

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category==='all'){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}


deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item){
  let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
})
if(!isInArray)
this.setState({orders: [...this.state.orders,item]})
  }
}

export default MainPage;
