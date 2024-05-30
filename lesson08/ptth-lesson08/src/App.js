import logo from './logo.svg';
import './App.css';
import{React , useState} from 'react';
import PtthListProducts from './components/PtthListProduct';
import PtthProductAddOrEdit from './components/PtthProductAddOrEdit';

function App() {
    // mock data
    const ptth_Products= [
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

    // Sử dụng hàm UseState của Hook
    const[ptthListProduct, setPtthListProduct]= useState(ptth_Products)

   const ptthHandleSubmit = (ptthProduct)=>{
      console.log("AddOrEdit:", ptthProduct);
      // Thêm vào ptthListProduct
      setPtthListProduct((ptthPrev) =>{
        return[
          ...ptthPrev,
          ptthProduct
        ]
      })
    }
  return (
    <div className="Container border mt-5 p-3">
        <h1 className="text-center"> Xử lí chức năng CRUD-Hook</h1>     
        <hr/>
        <PtthListProducts renderPtthProducts = {ptthListProduct}/>
        <PtthProductAddOrEdit ptthOnSubmit={ptthHandleSubmit}/>

    </div>
  );
}

export default App;
