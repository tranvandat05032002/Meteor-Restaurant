import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
      <Link href={'/payment'}> <Button>Payment</Button> </Link>
    </main>
  );
}
