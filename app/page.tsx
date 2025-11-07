import Header from "@/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" container  mx-auto flex justify-center ">
      <Header />

      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white  sm:items-start">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
      </main> */}
    </div>
  );
}
