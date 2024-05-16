import React, { createContext, useContext, useState} from 'react'
import PtthUseContext1 from './PtthUseContext1';
export const ThemeContext = createContext('red');// tạo ngữ cảnh để chia sẻ

export default function PtthUseContext() {
//state
const[theme,setTheme] = useState('red');
// Hàm thay đổi theme
const ptthHandleChange = ()=>{
    setTheme(theme==='red'? 'blue' : 'red');

}
  return (
    <ThemeContext.Provider valueS = {theme}>
        <div className='alert'>
            <h2> Demo UseContext </h2>
            <PtthUseContext1/>
            <button onClick={ptthHandleChange}>Change bgcolor</button>
        </div>
    </ThemeContext.Provider>
  )
}
