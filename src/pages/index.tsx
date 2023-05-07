import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// components
import Counter from "@/components/counter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>MAIN</main>
      <Counter />
    </>
  );
}
