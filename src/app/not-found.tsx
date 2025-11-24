import Button from "@/components/ui/Buttons/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[80vh]"
    >
      <h1 className="text-2xl font-bold mb-4">404 – Page Not Found</h1>

      <Link href="/dashboard">
        <Button>Go to implemented page →</Button>
      </Link>
    </div>
  );
}
