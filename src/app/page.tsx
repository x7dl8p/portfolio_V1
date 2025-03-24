import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import ResumeButton from "@/components/ResumeButton";
import Socials from "@/components/Socials";
import { getPosts } from "@/lib/posts";
import {
  ArrowDownRight,
  ArrowRightIcon,
} from "lucide-react";
import LoadingImage from "@/components/LoadingImage";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const TED_BIRTH_YEAR = 2004;
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-5 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex flex-col items-center gap-4">
            {/* Glowing Effect - Positioned Behind */}
            <div className="absolute inset-0 rounded-lg blur-2xl opacity-50"
              style={{
                background: `url('/ted.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(30px) brightness(1.8)',
                transform: 'translate(20px, -10px)',
              }}>
            </div>

            {/* Main Image */}
            <LoadingImage
              src="/ted.jpg"
              alt="Photo of Ted"
              width={175}
              height={175}
              className="rounded-lg relative"
              threshold={3000}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <h1 className="title text-4xl">Hi Ted here</h1>
            <div className="px-2"></div>
            <h1 className="text-3xl"><span className="wave">👋</span></h1>
          </div>
          <p className="mt-4 font-light">
            {/* Update my age */}
            {new Date().getFullYear() - TED_BIRTH_YEAR}
            -year-old <s>Frontend</s> Full-Stack developer from Earth.
          </p>
          <p className="mt-1 font-light">
            Perfection belongs to the God, for a human I am, I can only make the code{" "}
            <Link
              href="https://stackoverflow.com/"
              target="_blank"
              className="link font-semibold"
            >
              Work.
            </Link>
          </p>
          <div className="mt-4 flex items-center gap-8">
            <ResumeButton />
            <Socials />
          </div>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
