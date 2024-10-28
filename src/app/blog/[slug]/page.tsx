import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "post" && slug.current == '${slug}'][0]{
      title,
      mainImage,
      body,
      "author": author->{
        name,
        bio,
        image
      }
    }`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: any = await getData(params.slug);


  return (
    <div className="mt-8 w-full max-w-[1024px] mx-auto mb-8">
      <h1 className="mt-10">
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          {data.author.name} - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <div className="w-full relative">
        {" "}
        <Image
          src={urlFor(data.mainImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded-lg w-full mt-8 border object-cover"
        />
      </div>

      <div className="mt-16 prose max-w-none  w-full mb-10  ">
        <PortableText value={data.body} />
      </div>
    </div>
  );
}
