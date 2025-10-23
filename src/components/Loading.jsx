import { Heart } from "lucide-react";

export default function Loading() {
  return (
     <div className="bg-black text-gray-100 min-h-screen relative flex items-center justify-center text-center overflow-x-hidden">
      <h1 className="text-3xl font-normal animate-pulse inline-flex">
        Grit, code and vibes<Heart className="ml-1 mt-1.5" />
      </h1>
     </div>
  );
}
