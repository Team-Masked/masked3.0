import React from "react";
import "./Guide.css";
import img0 from "./images/0img.jpeg";
import image3 from "./images/image3.jpeg";
import image2 from "./images/image2.jpeg";
import image1 from "./images/image1.jpeg";
import image0 from "./images/image0.jpeg";

function Guide() {
    return (
        <div>
            {/* <div class="header">
  <h3>REPORTER'S GUIDE</h3>
    </div> */}
            <div className="cont_main">
                <div className="container1">
                    <div className="box-container">
                        <div className="box1">
                            <h3>STEP 1</h3>
                        </div>
                        <div className="box2">
                            <p>
                                Firstly, do not panic. Our website will help
                                you. Copy the link to the video which you wish
                                to report.
                                <br />
                                Go to our 'Home Page' and access the 'Report
                                Form' from there.
                            </p>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={img0} alt="homepage" />
                    </div>
                </div>
                <div className="container2">
                    <div className="box-container">
                        <div className="box1">
                            <h3>STEP 2</h3>
                        </div>
                        <div className="box2">
                            <p>
                                Fill in your details. Paste the link to the
                                video in the 'Link' section. At 'Masked' you are
                                safe and secure in your anonymity. No need to
                                enter your name at any point.
                            </p>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={image3} alt="link pasted" />
                    </div>
                </div>
                <div className="container3">
                    <div className="box-container">
                        <div className="box1">
                            <h3>STEP 3</h3>
                        </div>
                        <div className="box2">
                            <p>
                                In the story section type in and describe the
                                reason behind reporting it at length. This will
                                help the viewers to know why the video has been
                                flagged for them and it will be stored in our
                                database as well.
                            </p>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={image2} alt="filling in the story" />
                    </div>
                </div>
                <div className="container4">
                    <div className="box-container">
                        <div className="box1">
                            <h3>STEP 4</h3>
                        </div>
                        <div className="box2">
                            <p>
                                Select the most appropriate description for your
                                reason to report the video.&lt; If it does not
                                match any given category, do not panic, simply
                                click on 'other'.
                                <br /> You can elaborate later.
                            </p>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={image1} alt="dropdown selection" />
                    </div>
                </div>
                <div className="container5">
                    <div className="box-container">
                        <div className="box1">
                            <h3>STEP 5</h3>
                        </div>
                        <div className="box2">
                            <p>
                                Once you submit the form, the linked video will
                                be flagged for anyone who has installed our
                                chrome extension and who goes to watch it, they
                                will be told that the content is 'unethical' and
                                to know why they can click on link to read the
                                story you have written.
                            </p>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={image0} alt="pop up via extension" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;
