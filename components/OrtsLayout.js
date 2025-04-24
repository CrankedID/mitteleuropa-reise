export default function OrtsLayout({ title, children }) {
  return (
    <main className="p-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-md rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-rose-600 mb-6 text-center">{title}</h1>
        {children}
      </div>
    </main>
  );
}
