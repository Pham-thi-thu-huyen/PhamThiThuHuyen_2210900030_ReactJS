import React, { Component } from 'react'

export default class PtthProductList extends Component {
  render() {
    let {renderProducts}= this.props;
    console.log("Product:",renderProducts);
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            
            <tr key={index}>
                    <td>{item.ptth_productId}</td>
                    <td>{item.ptth_productName}</td>
                    <td>{item.ptth_quantity}</td>
                    <td> {item.ptth_price}</td>
             </tr>
        )
    })
    return (
      <div>
        <h2> Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID </th>
                    <th>Name </th>
                    <th>quantity </th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {elementProduct}
            </tbody>
            </table>
      </div>
    )
  }
}
