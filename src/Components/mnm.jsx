import img7 from "../img/no1.png";
import img8 from "../img/no2.png";
import img9 from "../img/no3.png";
import img10 from "../img/Line.png";

export default function Mnm(){
    return(
        <>
         <div id="otilo">
          <div id="steps">
            <img src={img7} alt="1" id="num" />
            <img src={img10} alt="line" id="line" />
            <img src={img8} alt="2" id="num" />
            <img src={img10} alt="line" id="line" />
            <img src={img9} alt="3" id="num" />
          </div>
          <div id="qota">
            <span>
              <h3>Get a Quote</h3>
              <p>
                Through true rich attended does no <br />
                end it his mother since real had half <br />
                every
              </p>
            </span>
            <span>
              <h3>Book an Appointment</h3>
              <p>
                Through true rich attended does no <br />
                end it his mother since real had half <br />
                every
              </p>
            </span>
            <span>
              <h3>Get your Service Done</h3>
              <p>
                Through true rich attended does no <br />
                end it his mother since real had half <br />
                every
              </p>
            </span>
          </div>
        </div>
        </>
    );
}