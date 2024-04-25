import React from 'react'

export default function PTTH_EventForm2() {
    // Định nghĩa các hàm xử lí sự kiện 
    const evenHandleClick1 = (content)=>{
        console.log('====================================');
        console.log(content);
        console.log('====================================');

    }
  return (
    <div className='alert alert-success'>
        <h2> Event Demo - Function Components</h2>
        <button onClick={evenHandleClick1("Phạm Thị Thu Huyền")}> Gọi hàm khi render</button>
        <button onClick={evenHandleClick1("K22CNT4-ReactJS")}> Gọi hàm khi Click</button>
    </div>
  )
}
