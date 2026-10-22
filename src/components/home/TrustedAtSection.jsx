import Marquee from "../ui/Marquee";
import { trustedAt } from "../../data/projects";

export default function TrustedAtSection() {
  return (
    <section className="border-y border-navy-100">
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <p className="text-center text-xs font-semibold tracking-widest text-navy-500 uppercase">
          Trusted At
        </p>
      </div>
      <div className="mt-4">
        <Marquee items={trustedAt} />
      </div>
    </section>
  );
}
