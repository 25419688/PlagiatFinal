import SocialMedia from "./socialMedia/page";
import Offers from "./offers/page";
import Footer from "./footer/page";
import About from "./about/page";
import PlagiatDetectorParent from "./detector/page";
import Register from "./register/page";
import Log from "./home/page";
import Work from "./work/page";
import Video from "./video/page";
export default function Home() {
  return (
    <html>
      <head>
        <title>PlagPrevent</title>
      </head>
      <body>
        <Log />
        <PlagiatDetectorParent />
        <div id="register-section">
        <Register />
        </div>
        <Work />
        <About />
        <Video />
        <Offers />
        <SocialMedia />
        <Footer />
        
      </body>
    </html>
  );
}
