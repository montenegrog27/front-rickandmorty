import imagen from "../assets/Rick1.png";
import NavBar from "../components/NavBar/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 items-center justify-center h-screen ">
        <h2 className="text-white h-10 -mt-10 text-center text-4xl font-bold mb-4">
          ¡Hola! Soy Germán Montenegro, un desarrollador web Full Stack.
        </h2>
        <p className="text-white -mt-[150px] text-center text-lg">
          Soy apasionado por la creación de aplicaciones web y estoy aquí para
          ayudarte en tu proyecto.
        </p>
        <div className="w-full -mt-[150px] flex justify-center">
          <img className="w-96 " src={imagen} alt="Germán Montenegro" />
        </div>
      </div>
    </>
  );
}

export default About;
