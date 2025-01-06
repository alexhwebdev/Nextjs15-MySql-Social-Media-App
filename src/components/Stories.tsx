// import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import StoryList from "./StoryList";

const Stories = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  // const stories = await prisma.story.findMany({
  //   where: {
  //     expiresAt: {
  //       gt: new Date(),
  //     },
  //     OR: [
  //       {
  //         user: {
  //           followers: {
  //             some: {
  //               followerId: currentUserId,
  //             },
  //           },
  //         },
  //       },
  //       {
  //         userId: currentUserId,
  //       },
  //     ],
  //   },
  //   include: {
  //     user: true,
  //   },
  // });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      Stories
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
          <Image
            // src={img?.secure_url || user?.imageUrl || "/noAvatar.png"}
            src="https://images.pexels.com/photos/29476570/pexels-photo-29476570/free-photo-of-vibrant-birdhouses-in-swedish-birch-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
        </div>
        {/* <StoryList 
          stories={stories} 
          userId={currentUserId}
        /> */}
      </div>
    </div>
  );
};

export default Stories;
