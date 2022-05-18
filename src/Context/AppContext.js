import React,{useState,createContext} from 'react'
export const AppContext = createContext();

export const Provider = (props) => {
    const [blog,setBlog] = useState([]);
    const [myblogs,setMyblogs] = useState([]);


    const globalStateObject ={

        value1:[blog,setBlog],
        value2:[myblogs,setMyblogs],
    }

    return (
    <AppContext.Provider value={globalStateObject}>
        {props.children}
      </AppContext.Provider>
    )
}

export default AppContext;