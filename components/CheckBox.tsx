import { useEffect } from "react"
import React from "react"

const CheckBox = () => {

    const refRu = React.createRef<HTMLInputElement>();
    const refEng = React.createRef<HTMLInputElement>();

    useEffect(() => {

        if(window.navigator.language === 'ru-RU' && refRu.current){
            refRu.current.checked = true
        }else{
            if(refEng.current){
                refEng.current.checked = true
            }
        }   
    })

    return (
        <div>
            <div className="form_radio_btn">
                <input type="radio" name="radio" value="1" ref={refEng}/>
                <label>ENG</label>
            </div>
 
            <div className="form_radio_btn">
                <input type="radio" name="radio" value="2" ref={refRu}/>
                <label>РУС</label>
            </div>
        </div>
    )
}

export default CheckBox