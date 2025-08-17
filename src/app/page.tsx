import Container from "@/components/container";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen px-1 min-h-screen flex mx-auto justify-center relative">
      <Navbar />
      <div className="md:max-w-3xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 top-14 left-2 md:left-0 w-px bg-line/20 "></div>
        <div className="absolute top-14 md:right-0 inset-y-0 right-2 w-px bg-line/20"></div>
      </div>
      <Container>
        <div className="h-64 flex items-center justify-center w-full relative">
          <div
            className="absolute top-1 inset-0 -z-10"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 0.8px, transparent 0)`,
              backgroundSize: "15px 15px",
              backgroundRepeat: "repeat",
              backgroundPosition: "center", // 👈 centers the grid
            }}
          ></div>
          <svg
            className="w-30 absolute"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 256 128"
          >
            <path
              fill="#fff"
              d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"
            />
          </svg>
        </div>
        <div className=" left-0 right-0 fixed w-sc h-px bg-line/20"></div>
      </Container>
    </div>
  );
}
