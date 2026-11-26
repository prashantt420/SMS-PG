
import { manualReviews } from "@/lib/site";

function GoogleMark() {
  return (
    <span className="text-xl font-bold tracking-tight">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-[#faf9f6] px-5 py-20 md:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
            Resident Experiences
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-[#242424] md:text-5xl">
            A place that feels
            <span className="text-orange-600"> like home.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500">
            Discover what residents have to say about their stay at LP Savani PG.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <GoogleMark />
            <span className="text-sm text-gray-500">
              Resident feedback
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {manualReviews.map((review, index) => (
            <article
              key={index}
              className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_5px_25px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <GoogleMark />
                <span className="text-xs text-gray-400">Resident feedback</span>
              </div>

              <div
                className="mb-4 flex gap-1 text-lg text-[#F5A623]"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="flex-1 text-[15px] leading-7 text-gray-600">
                "{review.text}"
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#242424]">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    LP Savani PG Resident
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
