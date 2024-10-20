import { AnimatedGridPatternDemo } from "./components/AnimPattern";
import { BentoDemo } from "./components/Bento";
import { LetterPullupDemo } from "./components/LetterPullUp";
import { MarqueeDemo } from "./components/Marquee";
import { ShimmerButtonDemo } from "./components/ShimmerButton";
import { TypingAnimationDemo } from "./components/Typed";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-36">
        <div className="break-words mt-6 m-auto w-screen md:w-[90vh]">
          <AnimatedGridPatternDemo />
          </div>
          <div className="mt-6 mb-6">
      <LetterPullupDemo />
      </div>
      <div className="w-screen m-auto items-center md:w-[90vh] md:m-auto">
      <BentoDemo />
      </div>
      <ShimmerButtonDemo />
      </div>
      <div className="">
      <MarqueeDemo />
      </div>
    </div>
  );
}
