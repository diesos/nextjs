import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";

export function ShimmerButtonDemo() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center mb-[-6rem] scale-150">
    <Link href="/notes/addnote">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Start taking notes NOW
        </span>
      </ShimmerButton>
      </Link>
    </div>
  );
}
