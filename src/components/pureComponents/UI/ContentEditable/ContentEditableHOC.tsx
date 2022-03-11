import React, {useState} from 'react'
import ContentEditable from 'react-contenteditable'

import s from './ContentEditable.module.scss'

const ContentEditableHOC:React.FC = () => {

    const [html, setHtml] = useState<string>('простой текст <b>текст bold</b> и снова простой текст и <b>не очень</b>')

   const handlerOnChange = (e:any) => {
        setHtml(e.target.value)
    }
    //const htmlDGR = {__html: 'простой текст <h1> hhhhhh 1</h1> <h2> hhhhhh 2</h2> <b>текст bold</b> и снова простой текст и <b>не очень</b>'}

    return (
       /* <div
            className={s.contEdit}
            contentEditable={true}
            dangerouslySetInnerHTML={htmlDGR}
        />*/
        /*<input
            className={s.contEdit}
            contentEditable={true}
            //dangerouslySetInnerHTML={htmlDGR}
            onChange={handlerOnChange}
            value={html}
        />*/
        <ContentEditable
            className={s.contEdit}
            html={html} // innerHTML of the editable div
            disabled={false} // use true to disable edition
            onChange={handlerOnChange} // handle innerHTML change
        />
    )
}

export default ContentEditableHOC
