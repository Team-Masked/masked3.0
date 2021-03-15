import React from "react";
import "./Awareness.css";
import right from "./images/lady-mask.jpg";
import left from "./images/women.jpg";

function Awareness() {
  return (
    <div className="container">
      <div className="wrap">
        <header>AWARENESS PAGE</header>
        <img className="lady" src={right} />
        <div className="container">
          <p className="text">
            {" "}
            As a matter of fact various civil and criminal law remedies are
            available under the Indian legal system to help one remove the
            sexually explicit content shared without their consent.
          </p>
          <p className="des">
            {" "}
            Legal provisions which may help you protect your privacy :
          </p>
          <p className="box1" style={{ fontSize: 20 }}>
            Section 67 and 67A of the IT act prohibit the publication and
            distribution of obscene and sexually explicit material respectively,
            while 67B forbids all publication, distribution, facilitation and
            consumption in any manner of child pornography. Section 66E of the
            same act deal with punishment for violation of privacy, and
            explicitly forbids capturing, publishing or transmitting ‘the image
            of a private area of any person without his or her consent.
          </p>
          <p className="box2">
            {" "}
            In cases where the victim’s nude or obscene photos are uploaded
            without consent, the accused is booked under different sections of
            the IT act and the Indian Penal Code(IPC). Also the subject can book
            cases of defamation under section 500 and 506 of IPC and section 66e
            and 67a under the IT act also provide legal remedies under which one
            can charge the accused.
          </p>
          <p>
            To know more click on the link
            <a href="https://legodesk.com/" target="_blank">
              Visit Legodesk!
            </a>
          </p>
          <img className="women" src={left} />
          <div className="ngos">
            <p style={{ fontSize: 20 }}>
              NGOs helping people in getting justice-
            </p>
            <ul>
              <li>
                <a href="http://sakhyawgc.org/" target="_blank">
                  Sakhya Women's Guidance Cell
                </a>
              </li>
              <li>
                <a href="http://www.guriaindia.org/" target="_blank">
                  Guria India’s
                </a>
              </li>
              <li>
                <a href="https://www.actionaidindia.org/" target="_blank">
                  ActionAid India
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="ethical">
            <p>
              A lot of issues with mainstream porn could be resolved by choosing
              ethical pornography as ethical porn validates the
              needs,boundaries,and curosities of the performers.It is 100%
              inclusive and consensual.
            </p>
            <p>Places To Watch Ethical Porn.</p>
            <ul>
              <a href="https://pinklabel.tv/" target="_blank">
                PinkLabelTV
              </a>
            </ul>
            <ul>
              <a href="https://www.bellesa.co/" target="_blank">
                Bellesa
              </a>
            </ul>
            <ul>
              <a href="https://makelovenotporn.tv/" target="_blank">
                Make Love Not Porn
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awareness;
