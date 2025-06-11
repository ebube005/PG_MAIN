import Audio from "../assets/Audio.svg";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 shadow z-50">
      <div className="flex items-center gap-3">
        <img src={Audio} alt="Logo" className="w-9 h-9" />
        <span className="text-white text-2xl font-bold">
          Preference Grammar Generator
        </span>
      </div>
    </header>
  );
}
