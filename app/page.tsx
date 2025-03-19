import { Hero, SearchBar, CustomFilter } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 px-6 sm:px-16 py-4 max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2 text-slate-800">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
          <SearchBar />
          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}

// mt-12 w-full flex-between items-center flex-wrap gap-5
// flex justify-start flex-wrap items-center gap-2
