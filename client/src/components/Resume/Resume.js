import React from 'react'
import './ResumeStyles.css'
import photo from'../assets/shisui.jpg'

function Resume() {
    return (
        <div className="resume-god" >
            <div className="resume-body">
             <div className="left-side">
                <div className="profile-pic"><img src={photo} alt="profile-pic" /></div>
                <div className="contact-me ">
                    <div className="contact">
                        <b>CONTACT ME</b>
                    </div>
                    <div className="all-icons"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="address">
                        <b>Address</b><br/>
                        asldhfgbsdjhfbsjs<br/>
                        sdkjfhbsdkjfs
                    </div>
                    <div className="all-icons"><i className="fas fa-phone-alt"></i></div>
                    <div className="phone">
                        <b>Phone</b><br/>
                        asldhfgbsdjhfbsjs<br/>
                        sdkjfhbsdkjfs
                    </div>
                    <div className="all-icons"><i className="fas fa-globe"></i></div>
                    <div className="web">
                        <b>Web</b><br/>
                        asldhfgbsdjhfbsjs<br/>
                        sdkjfhbsdkjfs
                    </div>
                </div>

                <div className="pro-skills contact-me ">
                    <div className="pro contact">
                        <b>PRO SKILLS</b>
                    </div>
                    <div className="skill ">
                        SKILL 1
                        <div className="progress-bar">
                            <div className="level1"></div>
                        </div>
                    </div>
                    <div className="skill ">
                        SKILL 2
                        <div className="progress-bar">
                            <div className="level1"></div>
                        </div>
                    </div>
                    <div className="skill ">
                        SKILL 3
                        <div className="progress-bar">
                            <div className="level1"></div>
                        </div>
                    </div>
                    <div className="skill ">
                        SKILL 4
                        <div className="progress-bar">
                            <div className="level1"></div>
                        </div>
                    </div>
                </div>

                <div className="social-media contact-me ">
                    <div className="pro contact">
                        <b>FOLLOW ME</b>
                    </div>
                    <div className="facebook skill ">
                        FACEBOOK<br/>
                        <a href="#">www.chalKaltiHO.com</a>
                    </div>
                    <div className="facebook skill ">
                        INSTAGRAM<br/>
                        <a href="#">www.chupchapSATAK.com</a>
                    </div>
                    <div className="facebook skill ">
                        EMAIL<br/>
                        <a href="#">karnbisht7@gmail.com</a>
                    </div>
                </div>
                    
                </div>

                <div className="right-side">
                    <div className="my-name ">
                        <div className="name">KARNA BISHT</div>
                        <div className="profession">Full Stack Web Developer</div>
                    </div>
                    <div className="my-experience my-name ">
                        <div className="experience ">
                            <i className="fas fa-br/iefcase"></i>        <b>EXPERIENCE</b>
                        </div>
                        <div className="time">
                            <b><p>2015 - 2018<br/>
                                Apple 
                            </p></b>
                        </div>
                        <div className="descript">
                            <h3>CEO</h3>
                            <p>skdjfsdlkjfhsfl;skjhf<br/>
                                sldkjfhsd;flshfs;lfh<br/>
                                fsdfjhsbfdlskjfhsfljkh<br/>
                                sdufhsdflsfh</p>
                        </div>
                        <div className="time">
                            <b><p>2015 - 2018<br/>
                                Samsoong 
                            </p></b>
                        </div>
                        <div className="descript">
                            <h3>Senior Developer</h3>
                            <p>skdjfsdlkjfhsfl;skjhf<br/>
                                sldkjfhsd;flshfs;lfh<br/>
                                fsdfjhsbfdlskjfhsfljkh<br/>
                                sdufhsdflsfh</p>
                        </div>
                        <div className="time">
                            <b><p>2015 - 2018<br/>
                                Microsoft 
                            </p></b>
                        </div>
                        <div className="descript">
                            <h3>Bill Gates ka papa</h3>
                            <p>skdjfsdlkjfhsfl;skjhf<br/>
                                sldkjfhsd;flshfs;lfh<br/>
                                fsdfjhsbfdlskjfhsfljkh<br/>
                                sdufhsdflsfh</p>
                        </div>
                    </div>


                    <div className="my-experience my-name ">
                        <div className="experience ">
                            <i className="fas fa-graduation-cap"></i>   <b>EDUCATION</b>
                        </div>
                        <div className="time">
                            <b><p>2015 - 2018<br/>
                                Apple 
                            </p></b>
                        </div>
                        <div className="descript">
                            <h3>CEO</h3>
                            <p>skdjfsdlkjfhsfl;skjhf<br/>
                                sldkjfhsd;flshfs;lfh<br/>
                                fsdfjhsbfdlskjfhsfljkh<br/>
                                sdufhsdflsfh</p>
                        </div>
                        <div className="time">
                            <b><p>2015 - 2018<br/>
                                Apple 
                            </p></b>
                        </div>
                        <div className="descript">
                            <h3>CEO</h3>
                            <p>skdjfsdlkjfhsfl;skjhf<br/>
                                sldkjfhsd;flshfs;lfh<br/>
                                fsdfjhsbfdlskjfhsfljkh<br/>
                                sdufhsdflsfh</p>
                        </div>
                        <div className="time">
                            <b><p>2015 - 2018<br/>
                                Apple 
                            </p></b>
                        </div>
                        <div className="descript">
                            <h3>CEO</h3>
                            <p>skdjfsdlkjfhsfl;skjhf<br/>
                                sldkjfhsd;flshfs;lfh<br/>
                                fsdfjhsbfdlskjfhsfljkh<br/>
                                sdufhsdflsfh</p>
                        </div>
                    </div>


                    <div className="my-reference my-experience my-name ">
                        <div className="experience ">
                            <i className="fas fa-clipboard-check"></i>    <b>REFERENCES</b>
                        </div>
                        <div className="time">
                            <b><p>TIM COOK<br/>
                                MARK ZUCKERBERG 
                            </p></b>
                        </div>
                        <div className="descript">
                            <h3>CEO</h3>
                            <p>skdjfsdlkjfhsfl;skjhf<br/>
                                sldkjfhsd;flshfs;lfh<br/>
                                fsdfjhsbfdlskjfhsfljkh<br/>
                                sdufhsdflsfh</p>
                        </div>
                    </div>
                   

                    
                </div>

               
            </div>
        </div>
    )
}

export default Resume
