import React, {useState} from 'react'

export default function PtthuseState() {
    //Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    // Mảng
    const[list, setList] = useState([1,5]);
    // Hàm xử lí sự kiện "Thêm ngẫu nhiên"
    const ptthHandleList = () => {
      //sinh ngẫu nhiên 1 giá trị 
      let num = parseInt(Math.random()*100);
      // cập nhật lại state:list
      setList([
        ...list,
        num
      ])
      // cách khác 
      //  let lst = list.push(num);
      // setList(lst);
    }
  return (
    <div>
        <p> You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me 
        </button>
        <hr/>

      <h3> List: {list.toString()}</h3>
      <button onClick={ptthHandleList}> Thêm ngẫu nhiên</button>
    </div>
  )
}
