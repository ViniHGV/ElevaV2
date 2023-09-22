import Image from "next/image";
import { LoginComponent } from "@/components/Login";
export default function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <LoginComponent />
    </main>
  );
}
