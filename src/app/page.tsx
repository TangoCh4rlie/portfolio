import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-b from-github-b from-100% to-white-c">
      <header className="flex flex-col items-center my-64">
        <p className="text-gray-t">18 ans - développeur</p>
        <h1 className="text-white-c font-ubuntu text-9xl my-6">
          <Typewriter
            words={["TangoCh4rlie", "Elouan Reymond"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={3000}
          />
        </h1>
        <button className="bg-github-v p-3 mt-4 rounded-lg border-black">Contactez-moi</button>
      </header>
    </div>
  );
}
