import { howWeWork } from "../../data/projects";

export default function HowWeWork() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
          How We Work
        </h2>
        <p className="mt-2 text-navy-700">
          One team from first visit to long-term maintenance.
        </p>
      </div>

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {howWeWork.map((item, i) => (
          <li
            key={item.step}
            className="rounded-xl border border-navy-100 bg-white p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-900 text-gold-500 font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 font-semibold text-navy-900">{item.step}</p>
            <p className="mt-2 text-sm text-navy-700 leading-relaxed">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
