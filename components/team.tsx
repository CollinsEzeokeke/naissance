import { Professionals } from "./professionals";
import TextGradientScroll from "./ui/scrollGradient";

export default function Team() {
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="w-1/2 h-full flex flex-col justify-end">
        <Professionals />
      </div>
      <div className="w-1/2 p-12 flex flex-col justify-start h-2/3">
        <h2 className="text-5xl font-bold mb-8 text-white"><TextGradientScroll text="The Group" textOpacity="soft" type="letter"/></h2>
        <p className="text-2xl leading-relaxed text-gray-500">
          For a company that wishes to offer the best, we ourselves need to have
          the best team Planet Earth can offer to make our claim possible. We
          have the best engineers, developers, programmers, and other
          professionals who work devotedly and tirelessly to see a happy home
          being created.
        </p>
      </div>
    </div>
  );
}
