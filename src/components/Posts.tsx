import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Card } from "./ui/Card";
import { Separator } from "./ui/Separator";

interface Props {
  posts: PostMetadata[];
}

export default function Posts({ posts }: Props) {
  return (
    posts.length > 0 && (
      <Card className="overflow-hidden border border-border/40 bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
        <ul className="flex flex-col">
          {posts.map((post, i) => (
            <li key={i} className="group relative">
              {i !== 0 && i !== posts.length && <Separator />}
              <Link
                href={`/blog/${post.slug}`}
                className="block transition-colors hover:bg-primary/5"
              >
                <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      {post.summary}
                    </p>
                  </div>

                  {post.publishedAt && (
                    <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                      {formatDate(post.publishedAt)}
                    </p>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    )
  );
}
