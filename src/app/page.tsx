import Image from "next/image";
import { Button } from "@/components/ui/button"
import envClientConfig from "../../configClient";
console.log(envClientConfig)
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
    </main>
  );
}
