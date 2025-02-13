import Index from "@/components/galleryComp";
import { NavBar } from "@/components/nav-bar";

export default function Gallery() {
  return (
    <>
      <div className="bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#1D283A] via-[#263348] to-secondary/5">
        <div className="relative z-10 mx-auto max-w-7xl md:px-6 h-[10vh] p-6 bg-inherit">
          <NavBar />
        </div>
      </div>
      <Index />
    </>
  );
}
