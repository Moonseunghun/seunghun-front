import React from 'react';
import '../Main/main.scss';


function Main(){
  return(
    <>
      
<div className="nav_box">
      <div className="nav_img">
        <img src="./img/instagram (1).png" alt="img" />
        <span className="title">westargram</span>
        <input type="search" placeholder="검색" />
      </div>
      <div className="nav_icon">
        <img src="./img/weta.icon/explore.png" alt="img" />
        <img src="./img/weta.icon/heart.png" alt="img" />
        <img src="./img/weta.icon/profile.png" alt="img" />
      </div>
    </div>

    <div className="main_box">
      <div className="feed_section">
        <div className="main_profile">
          <div className="main_text_profile">
            <img className="josh" src="./img/josh-hild-EX_3pL2sNdY-unsplash (1).jpg" alt="img"/>
            <span>wework_seunghun</span>
        </div>
          
          <div>
            <img className="more" src="./img/weta.icon/more.png" alt="img"/>
          </div>
          

        </div>
        <div className="feed_picture">
          <img src="./img/IMG_8420.jpeg" alt="img" /> 
        </div>
        <div className="feed_icons">
          <div className="feed_icon_heart">
                    
            <img src="./img/weta.icon/heart.png" alt="img"/>
            <img src="./img/weta.icon/send.png" alt="img"/>
            <img src="./img/weta.icon/chat.png" alt="img"/>
          </div>
            <div className="bookmark">
              <img src="./img/weta.icon/bookmark.png" alt="img" width="30px"/>
            </div>
        
        </div>
        <div className="feed_box"></div>
        <div className="main_comment">

        </div>
      </div>
      <div className="right_box">
        <div className="user_info_section">

        </div>
        <div className="story_section">

        </div>
        <div className="recommand_section">

        </div>
      </div>
    </div>
    <div className="user_box">
      <img src="./img/weta.icon/profile.png" alt="img"/>
      <p>moon</p>
    </div>
    </>
    )
}


export default Main;