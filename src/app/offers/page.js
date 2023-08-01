import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Offers = () => {
  return (
    <>
    <section className="offers">
      <h2>What we Offer?</h2>
      <h3>
        We take pride in offering exceptional services With a focus on
        delivering <br></br> quality and exceeding customer expectations.
      </h3>

      <div class="rowoff">
        <div class="col">
          <FontAwesomeIcon
            icon={faComments}
            style={{
              height: "40px",
              width: "40px",
              color: "#BAAFD9",
              background: "#EAECFB",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <h4>Community Support</h4>
          <p>
            Refers to the assistance and services provided to help meet the
            needs of its members.
          </p>
        </div>

        <div class="col">
          <FontAwesomeIcon
            icon={faShield}
            style={{
              height: "40px",
              width: "40px",
              color: "#BAAFD9",
              background: "#EAECFB",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <h4>Security First</h4>
          <p>
            Refers to the assistance and services provided to help meet the
            needs of its members.
          </p>
        </div>

        <div class="col">
          <FontAwesomeIcon
            icon={faHeadphones}
            style={{
              height: "40px",
              width: "40px",
              color: "#BAAFD9",
              background: "#EAECFB",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />

          <h4>24/7 Admin Support</h4>
          <p>
            Refers to the assistance and services provided to help meet the
            needs of its members.
          </p>
        </div>
      </div>
      <div class="rowoff">
        <div class="col">
          <FontAwesomeIcon
            icon={faPaintRoller}
            style={{
              height: "40px",
              width: "40px",
              color: "#BAAFD9",
              background: "#EAECFB",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <h4>100+ Themes</h4>
          <p>
            Refers to the assistance and services provided to help meet the
            needs of its members.
          </p>
        </div>
        <div class="col">
          <FontAwesomeIcon
            icon={faGlobe}
            style={{
              height: "40px",
              width: "40px",
              color: "#BAAFD9",
              background: "#EAECFB",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <h4>Fully Integrated</h4>
          <p>
            Refers to the assistance and services provided to help meet the
            needs of its members.
          </p>
        </div>
        <div class="col">
          <FontAwesomeIcon
            icon={faPenToSquare}
            style={{
              height: "40px",
              width: "40px",
              color: "#BAAFD9",
              background: "#EAECFB",
              margin: "20px",
              padding: "10px",
              borderRadius: "10px",
            }}
          />
          <h4>Mounthly update</h4>
          <p>
            Refers to the assistance and services provided to help meet the
            needs of its members.
          </p>
        </div>
      </div><br></br>
      </section>
      </>
  );
};
export default Offers;
