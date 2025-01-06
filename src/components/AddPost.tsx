// "use client";

import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
// import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
// import { useState } from "react";
import AddPostButton from "./AddPostButton";
import prisma from "@/lib/client";
// import { addPost } from "@/lib/actions";

const AddPost = () => {
  // const { user, isLoaded } = useUser();
  // const [desc, setDesc] = useState("");
  // const [img, setImg] = useState<any>();

  // if (!isLoaded) {
  //   return "Loading...";
  // }

  const {userId} = auth()
  console.log('userId ', userId)

  // // Server Action example :
  // const testAction = async (formData: FormData) => {
  //   "use server"

  //   if (!userId) return;
  //   const desc = formData.get("desc") as string;

  //   try {
  //     const res = await prisma.post.create({
  //       data: {
  //         userId: userId,
  //         desc: desc,
  //       },
  //     })
  //     console.log('res ', res)
  //   } catch (err) {
  //     console.log('err ', err)
  //   }
  // }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <div style={{position: "absolute"}}>AddPost</div>
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        // src={user?.imageUrl || "/noAvatar.png"}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form 
          action=""
          // action={ testAction }
          // action={(formData) => addPost(
          //   formData,img?.secure_url || ""
          // )} 
          className="flex gap-4"
        >
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
            // onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            {/* <AddPostButton /> */}
          </div>
          <button>Send</button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          {/* <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => open()}
          >
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div> */}
          {/* <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImg(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => open()}
                >
                  <Image src="/addimage.png" alt="" width={20} height={20} />
                  Photo
                </div>
              );
            }}
          </CldUploadWidget> */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
