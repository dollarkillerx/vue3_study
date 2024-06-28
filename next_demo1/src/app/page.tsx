import Link from "next/link";
import PostLink, {Post} from "./blog/post_list";



export default function Home() {

    const postData: Post[] = [
        {
            id: "10",
            title: "hello world10",
            body: "hello world10 body"
        },
        {
            id: "11",
            title: "hello world11",
            body: "hello world11 body"
        },
        {
            id: "12",
            title: "hello world12",
            body: "hello world12 body"
        }
    ]

  return (
      <div>
        <h1 className={"text-green-500 text-2xl text-center"}>hello world</h1>
          <Link href={`/dashboard/10`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  To Dashboard
              </button>
          </Link>

          <PostLink posts={postData}/>
      </div>
  );
}
