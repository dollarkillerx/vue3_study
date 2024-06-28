'use client'; // 在 Next.js 中，usePathname 是一个客户端钩子，因此你需要将组件标记为客户端组件。


import Link from "next/link";
import {usePathname} from "next/navigation";

export interface Post {
    id: string
    title: string
    body: string
}

export default function PostLink({posts: posts}: {posts: Post[]}) {
    const pathname = usePathname();

    return (
        <ul>
            {posts.map((post) => {
                const isActive = pathname.startsWith(`/blog/${post.id}`)
                return (
                    <div>
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`} className={isActive ? 'text-blue-500' : 'text-black-500'}>
                                {post.title}
                            </Link>
                        </li>
                        <br/>
                    </div>
                )
            })}
        </ul>
    );
}