import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className='bg-[url("/bg2.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
      <div className="container ms-auto px-4">
        <div className="max-w-[450px] text-slate-50 flex flex-col gap-[40px]">
          <div>
            <h1 className="text-5xl">Soy Tarchini Matias</h1>
            <h3 className="text-2xl mt-3">
              <Typewriter
                options={{
                  strings: ["Software Developer", "Back End"],
                  changeDelay: 3,
                  changeDeleteSpeed: 2,
                  autoStart: true,
                  loop: true,
                }}
              />
              <div className='bg-gradient-to-r from-white h-1 w-40-'></div>
              <p className="pt-5">Soy estudiante de programacion y actualmente desarrollo sistemas de manera autonoma.</p>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
