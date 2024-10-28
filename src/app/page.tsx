import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import BlogHero from "@/components/ui/BlogHero";
import Navbar from "@/components/ui/Navbar";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `*[_type == 'post']`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: any = await getData();



  return (
    <div className=" w-full pb-10">
      <Navbar />
      <BlogHero />
      <div className="grid grid-cols-1 max-w-[800px] mx-auto   mt-10 md:grid-cols-2  gap-5">
        {data.map((post: any, idx: any) => (
          <Card key={idx} className="relative">
            <Image
              src={urlFor(post.mainImage).url()}
              alt="image"
              width={300}
              height={200}
              className="rounded-t-lg  w-full object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-2 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.slug.current}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
