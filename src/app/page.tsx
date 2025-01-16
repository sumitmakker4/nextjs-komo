import AddPost from "@/components/home/AddPost";
import Feeds from "@/components/home/Feeds";
import LeftMenu from "@/components/home/LeftMenu";
import RightMenu from "@/components/home/RightMenu";
import Stories from "@/components/home/Stories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">

        <LeftMenu />

        <div className="w-[50%]">
          <AddPost />
          <Stories />
          <Feeds />
        </div>
        <RightMenu />
    </div>
  );
}
