
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Something&apos;s missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>

            <Link
              href="/"
              className="my-4 inline-flex rounded-lg bg-blue-600 px-5 py-4 text-center text-sm font-medium text-white hover:bg-blue-400"
            >
              Back to Homepage
            </Link>
        </div>
      </div>
    </section>
  );
}
