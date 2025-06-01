import Image from "next/image";
import { Inter } from "next/font/google";
import Mainlayout from "@/layouts/Mainlayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Mainlayout>
        <div class="bg-white text-gray-900 font-sans">
          <main class="flex flex-col items-center justify-center text-center px-4 py-12 md:flex-row md:justify-around">
            <div class="mb-10 md:mb-0">
              <h2 class="text-2xl font-bold mb-2 mt-[30%] text-start">DOWNLOAD NOW</h2>
              <p class="text-sm text-gray-600 text-start mb-[5%]">Download app to get new member rewards</p>
              <div class="flex items-center justify-center gap-4 mb-4">
                <a href="#">
                  <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" height={100} width={100} />
                </a>
                <a href="#">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height={100} width={100} />
                </a>
              </div>
              <div class="flex">
                <Image src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://tomoro-coffee-app" alt="QR Code" width={100} height={100} />
              </div>
              <p class="text-sm mt-2 text-start">Scan QR Code</p>
            </div>

            <div class="relative ms-[-20%] mt-[10%]">
              <Image src="https://i.ibb.co.com/07krqFF/Cuplikan-layar-2025-04-17-204821.png" width={400} height={400} />
            </div>
          </main>
        </div>
      </Mainlayout>
    </>
  );
}
