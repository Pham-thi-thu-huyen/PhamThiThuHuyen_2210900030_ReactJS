import React , {useContext} from 'react'
import { ThemeContext } from './PtthUseContext'

export default function PtthUseContext2() {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme + 'm-3'}>
        <h2> PtthContext2</h2>
        <p>
            <b> 2210900030</b>
            <b> Phạm Thị Thu Huyền</b>
            <i> K22CNT4</i>
        </p>
    </div>
  )
}
