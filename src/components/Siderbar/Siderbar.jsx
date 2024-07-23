import React, { useContext, useState } from "react";
import "./Sidebar.css"
import { assets } from "../../assets/assets";
import contextProvider, {Context}  from "../../context/Context"

function Siderbar(){
const [menu,setmenu]  = useState(false)
const{onSent,prevPrompts,setRecentPrompts,newChat} = useContext(Context)

const loadPrompt = async(prompt)=>{
    setRecentPrompts(prompt)
   await onSent(prompt)
}
    const menuClick = ()=>{
        setmenu((prev)=>!prev)
    }
    return(
        <div className="sidebar">
          <div className="top">
            <img onClick={menuClick} className="menu" src={assets.menu_icon} alt=""/>
           <div onClick={()=>newChat()}className="new-chat">
                <img src={assets.plus_icon} alt=""/>
                {menu?<p>New Chat</p>:null}
            </div>
            {menu?<div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0,18)}</p>
                    </div>
                    )
                })}
               
            </div>:null}
          </div>
          <div className="bottom">
            <div className="bottom-irem recent-entry">
                <img src={assets.question_icon} alt="" />
                {menu?<p>Help</p>:null}
            </div>
            <div className="bottom-irem recent-entry">
                <img src={assets.history_icon} alt="" />
                {menu?<p>Activity</p>:null}
            </div>
            <div className="bottom-irem recent-entry">
                <img src={assets.setting_icon} alt="" />
                {menu?<p>Setting</p>:null}
            </div>
          </div>
        </div>
    )
}
export default Siderbar