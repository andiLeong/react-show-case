import {useState} from "react";


function useToggle(init = false){

    const [show,setShow] = useState(init);

    function toggle(){
       setShow( pre => !pre)
    }

    return [show,toggle];
};

export default useToggle;