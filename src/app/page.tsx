import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import image from "../../public/assingmext.jpeg";
import Prisma from "../../public/prisma.png";
import Postgres from "../../public/postgress.png";
import tail from "../../public/tail.png";
import ts from "../../public/ts.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[80vh] items-center flex justify-between max-w-[70%] m-auto ">
        <div className="right w-[70%] ml-3">
          <h1 className="font-bold text-sa leading-4">BiLaL Raza</h1>
          <p className="text-[9px] mb-2">I am a student</p>
          <p className="text-[7px] mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            fugiat aspernatur explicabo nesciunt fugit dolore labore facilis
            quis tempora, temporibus iure magnam atque debitis nemo iste
            molestias! Quod, magnam voluptas!
          </p>

          <div className="box-shadow-lg">
            <p className="text-[9px] font-bold">SKills</p>
            <div className="flex items-center gap-2 max-w-[100%]">
              <Image src={Prisma} alt="imge" className="h-4 w-4" />
              <Image src={Postgres} alt="imge" className="w-4 " />
              <Image src={tail} alt="imge" className="w-14 " />
              <Image src={ts} alt="imge" className="w-6 " />
            </div>
          </div>
        </div>
        <div className="right w-[50%] text-center">
          <Image
            className="rounded-[50%] h-[25vw] text-center "
            src={image}
            alt="image"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
