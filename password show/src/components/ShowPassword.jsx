import {useState} from 'react'

function ShowPassword() {

    const [type, setType] = useState(true);
    
    const [text, setText] = useState("Show");
    

    const handleOnclick=() => {
       if (text=="Show") {
        setText("Hide");
        setType(false)
       } else {
        setText("Show");
        setType(true)
       }
        
    };


  return (
    <div className="mydm">
            <input type={(type)? 'password':'text'} className="form-control" placeholder="Enter your passwrod" />
            <button className="btn btn-primary my-3"onClick={handleOnclick}>{text}</button>
    </div>
  )
}

export default ShowPassword
