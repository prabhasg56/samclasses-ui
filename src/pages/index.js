import { Inter } from "next/font/google";
import LoginBody from "@/components/Login/LoginBody";
import LandingPage from "@/components/LandingPage/LandingPage";
import NavBar from "@/components/LandingPage/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar/>
      <LandingPage/>
      {/* <LoginBody /> */}
    </main>
  );
}
