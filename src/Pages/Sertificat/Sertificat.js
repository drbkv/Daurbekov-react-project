import React from "react";
import Header from "../../compoments/Header"
import Footer from "../../compoments/Footer"
import Items from "../../compoments/Items"
import ShowFullItem from "../../compoments/ShowFullItem"

class Sertificat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [

        {
          id: 1,
          title: 'Сертификат',
          img: '10.jpeg',
          desc: 'Подарочный сертификат 10000',
          price: '10000'
        },

        {
          id: 2,
          title: 'Сертификат',
          img: '15.jpeg',
          desc: 'Подарочный сертификат 15000',
          price: '15000'
        },

        {
          id: 3,
          title: 'Сертификат',
          img: '25.jpeg',
          desc: 'Подарочный сертификат 25000',
          price: '25000'
        },

        {
          id: 5,
          title: 'Сертификат',
          img: '50.jpeg',
          desc: 'Подарочный сертификат 50000',
          price: '50000'
        },
        {
          id: 5,
          title: 'Сертификат',
          img: '100.jpeg',
          desc: 'Подарочный сертификат 100000',
          price: '100000'
        }

      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems= this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
} 
render(){
  return(
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
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

export default Sertificat;
