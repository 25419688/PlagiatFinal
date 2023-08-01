import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <section class="socialMedia">
      <h1>
        Social Media Its Ways<br></br>Of Our Excellence.
      </h1>
      <form style={{ justifyContent: "center", display: "flex" }}>
        <input
          placeholder="Enter your Email"
          type="email"
          className="inputSocial"
        ></input>
        <button type="submit" class="button">
          Get started
        </button>
        <button
          style={{
            background: "#87BDEB",
            color: "white",
            height: "45px",
            width: "40px",
            borderRadius: "2px",
            padding: "12px",
            marginTop: "7.5px",
            marginLeft: "-43px",
          }}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ height: "14px", width: "14px" }}
          />
        </button>
      </form>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "650px" }}
      >
        <div>
          <a
            href="http://technix-technology.com"
            style={{
              display: "flex",
              textDecoration: "underline",
              color: "#373f98",
            }}
          >
            <Image
              src="/images/technix.png"
              alt="My Image"
              width={100}
              height={100}
            />
            <h3
              style={{
                fontSize: "18px",
                color: "#373f98",
                fontWeight: "medium",
                marginLeft: "20px",
                textAlign: "center",
              }}
            >
              Our<br></br> Website
            </h3>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ marginLeft: "250px" }}>
            <Image
              src="/images/decorator.png"
              alt="My Image"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <div class="SocialMenu">
        <ul>
          <li>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/plag prevent with blue .png"
                alt="My Image"
                width={70}
                height={70}
              />
              <span style={{ marginLeft: "150px" }}>
                <a href="/home">Home </a>
              </span>
              <span style={{ marginLeft: "60px" }}>
                <a href="/about">About Us</a>
              </span>
              <span style={{ marginLeft: "60px" }}>
                <a href="/offers">Services</a>
              </span>
              <span style={{ marginLeft: "60px" }}>
                <a href="/socialMedia">Contact Us</a>
              </span>
              <span>
                <a href="https://www.facebook.com/TechnixInfo">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{
                      height: "20px",
                      width: "20px",
                      marginLeft: "200px",
                    }}
                  />
                </a>
              </span>{" "}
              <span>
                <a href="https://instagram.com/technix_technology?igshid=MzRlODBiNWFlZA==">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{
                      height: "20px",
                      width: "20px",
                      marginLeft: "30px",
                    }}
                  />
                </a>
              </span>
              <span>
                <a href="https://www.google.com/maps/place/Technix/@37.1942205,10.1702756,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd3397e6620fc3:0x695b91288d6b656!8m2!3d37.1942205!4d10.1728505!16s%2Fg%2F11sb0gyvfm?entry=ttu">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    style={{
                      height: "20px",
                      width: "20px",
                      marginLeft: "30px",
                    }}
                  />
                </a>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <hr
          style={{
            width: "1000px",
            margin: "auto",
            border: "7px medium",
            marginBottom: "20px",
          }}
        ></hr>
        <p style={{ textAlign: "center", fontSize: "10px", color: "#3a3a53" }}>
          COPYRIGHT 2023 Technix,All rights reserved
        </p>
      </div>
    </section>
  );
};
export default SocialMedia;
