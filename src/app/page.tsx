import Container from "@/components/container";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen px-1 min-h-screen flex mx-auto justify-center relative">
      <Navbar />
      <div className="md:max-w-3xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 top-14 left-2 lg:left-0 w-px bg-line/20 "></div>
        <div className="absolute top-14 lg:right-0 inset-y-0 right-2 w-px bg-line/20"></div>
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
        {/* Line */}
        <div className=" left-0 right-0 fixed w-sc h-px bg-line/20"></div>

        <div className="h-41 w-full px-2 relative flex">
          <div className="h-full w-40">
            <div className="w-full h-full items-center justify-center rounded-full flex border border-line/20 relative">
              <Image
                src="/image.png"
                layout="fill"
                className="rounded-full p-[2px]"
                alt="Owner Image"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="h-25 w-full border-l relative border-l-line/20 border-b flex px-5 items-end border-b-line/20">
              <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></div>
              <h1 className="text-line/20 tracking-[1px]">
                text-3xl text-zinc-50 font-medium
              </h1>
            </div>
            <div className="flex-1 w-full border-l border-line/20">
              <h1 className="text-3xl px-5 text-zinc-50 font-medium">
                Subham Mondal
              </h1>
              <div className="h-px w-full bg-line/20"></div>
              <h5 className="text-line/40 px-5">Design Engineer</h5>
            </div>
          </div>
        </div>
        <Selector />
      </Container>
    </div>
  );
}

function Selector() {
  return (
    <div className="fixed inset-x-0 h-9">
      <div className="absolute top-0 h-px inset-x-0 bg-line/20"></div>
      <div className="absolute bottom-0 h-px inset-x-0 bg-line/20"></div>
      <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></div>
    </div>
  );
}
