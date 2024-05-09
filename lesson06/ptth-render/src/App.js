
import React, { Component } from 'react'
import PtthProductList from './components/PtthProductList';
import PtthProductAdd from './components/PtthProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Phạm Thị Thu Huyền' , id: 2210900030 , status:1},
        {title: ' Cabbage',id: 1, status:1},
        { title: 'Garlic' , id: 2 , status:0},
        { title: 'Apple' , id: 3 , status:0},
        { title: 'Samsung' , id: 4 , status:1},
      ]
      
    }
  }
  ptthHandSubmit= (param)=>{
    console.log("App:",param);
    //thêm vào dữ liệu product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1> Phạm Thị Thu Huyền - Render Data - Event Form</h1>
        <hr/>
        <PtthProductList renderProducts={ this.state.products}/>
        <hr/>
        <PtthProductAdd onSubmit = {this.ptthHandSubmit}/>
      </div>
    )
  }
}
