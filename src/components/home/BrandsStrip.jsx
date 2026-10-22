import Marquee from "../ui/Marquee";
import { brands } from "../../data/projects";

export default function BrandsStrip() {
  return (
    <section className="bg-navy-900 py-10">
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <p className="text-center text-xs font-semibold tracking-widest text-gold-500 uppercase">
          Brands We Service
        </p>
      </div>
      <Marquee items={brands} variant="dark" />
      <div className="max-w-3xl mx-auto px-4 mt-6 text-center">
        <p className="text-sm text-accent-white/70">
          Don't see your preferred brand? We work with a wide range of
          manufacturers — ask us.
        </p>
        <p className="mt-1 text-sm font-semibold text-accent-white">
          Samsung WiseNET Certified Engineers on our team.
        </p>
      </div>
    </section>
  );
}
