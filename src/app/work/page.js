import Image from "next/image";
export default function Work() {
  return (
        
    <>
    <section className="work">
    <div className="text-work"><h1>How it Works ?</h1>
  <p className="mon-paragraphe"> Resolving neglected sir tolerably but existence conveying for. </p>
  <p className="mon-paragraphe">Day his put off unaffected literature partiality inhabiting. </p>
  </div>
  <div className="work right">
  <div className="texte-centre-marketing">
          <h2> Marketing </h2>
          <br></br>
          <p>Marketing intelligence (MI) is necessary when <br></br> entering a foreign market determines <br></br>the  intelligence needed</p>
      </div>
  </div>
  <div className="work left"> 
      {/* <div className="inner-rectangle"> 
         <div className="side-bar"></div> 
         <div className="side-bar-long"></div>
         <img src="/homme4.jpg" alt="Image" className="image-mini"></img>
         <div className="side-bar-mini"></div>
      </div>
      <div className="inner-rectangle-mini">
         <img src="/check.jpg" alt="Image" className="image-icone"></img>
         <div className="side-bar-icone"></div>
      </div> */}
      <div className="texte-centre-inteligence">
          <h2>Intelligence </h2>
          <br></br>
          <p>Marketing intelligence (MI) is the <br></br> everyday information relevant to a <br></br> company's markets</p>
         
      </div>
  </div>
  <div className="work bottom"> 
      {/* <div className="inner-rectangle"></div> */}
      <div className="texte-centre-external">
          <h2> External data</h2>
          <br></br>
          <p>this allows them to see current <br></br> key performance</p>
      </div>
  </div>
  <div className="imageArrow">
      <img src="/images/arrowInv.png" alt="Image à gauche" />
  </div>
    </section>
        </>
);
}
