import Image from "next/image";
export default function Video() {
  return (
    <div>
      <center>
        <Image
          style={{ marginBottom: "-150px" }}
          src="/images/rectangle.png"
          width={850}
          height={600}
          alt=""
          priority
        />
        <Image
          style={{ marginTop: "-500px", marginLeft: "-33px" }}
          src="/images/demande d'assistant final avec vocal copy.png"
          width={725}
          height={500}
          alt=""
          priority
        />
      </center>
    </div>
  );
}
