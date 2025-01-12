import AddPost from "@/components/home/AddPost";
import Feeds from "@/components/home/Feeds";
import LeftMenu from "@/components/home/LeftMenu";
import RightMenu from "@/components/home/RightMenu";
import Stories from "@/components/home/Stories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">

        {/* Left Side */}
        <div className="">
            <LeftMenu />
        </div>
        {/* Center */}
        <div className="w-[50%]">
          <AddPost />
          <Stories />
          <Feeds />
        </div>
        {/* Right */}
        <div className="">
          <RightMenu />
        </div>
    </div>
  );
}
