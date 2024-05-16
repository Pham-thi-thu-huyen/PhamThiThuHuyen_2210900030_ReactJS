import React, { Component } from 'react'
import PtthProductList from './component/PtthProductList';
import PtthProductAdd from './component/PtthProductAdd';

export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      ptth_Products: [
        {
          ptth_productId:"2210900030"      
         ,ptth_productName:"Phạm Thị Thu Huyền"      
         ,ptth_quantity:15       
         ,ptth_price:1000
        },
        {
            ptth_productId:"P002"
          , ptth_productName:"IPhone 12"
          , ptth_quantity:20
          , ptth_price:1250
        },
        {
          ptth_productId:"P003"
          , ptth_productName:"IPhone 13"
          ,  ptth_quantity:10
          ,ptth_price:1500
        },
      ]
    }
  }
  ptthHandleSubmit = (param)=>{
    console.log("App:", param);
    // thêm vào mảng dữ liệu products
    let {ptth_Products} = this.state;
    ptth_Products.push(param);
    this.setState({
      ptth_Products:ptth_Products
    })
  }
  render() {
    return (
      <div className='container border mt-5 text-center'>
          <h1>Phạm Thị thu Huyền - 2210900030 - K22CNT4</h1>
          <hr/>
          <PtthProductList renderProducts = {this.state.ptth_Products} />
          <hr/>
          <PtthProductAdd onSubmit = {this.ptthHandleSubmit}/>
      </div>
    )
  }
}
