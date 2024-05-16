import React, {useEffect,useState} from 'react'

export default function PtthUseEffect() {
    // state: count 
    const [count, setCount] = useState(0);

    // hàm xử lí sự kiện click me 
    const ptthHandleClick = () => {
        setCount(prev => prev + 1);
    }
    // Sử dụng hàm useEffect để cập nhật lại title; có một tham số 
    useEffect(()=>{
        document.title += 'Phạm Thị Thu Huyền:You clicked ${count} times';
        console.log('You clicked ${count} times');
    });
    //useEffect : tham số thứ 2 là mảng rộng
    useEffect(() =>{
        console.log("Chạy lần đầu tiên- một lần");
    },[])
    // [deps]
    useEffect(() =>{
        console.log('useEffect count click: ', count)
    },[count]);
  return (
    <div>
        <h2> Demo - useEffect: You Clicked {count} times</h2>
        <button onClick={ ptthHandleClick}>
            Click me
        </button>
    </div>
  )
}
