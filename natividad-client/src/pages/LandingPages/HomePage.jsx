import Button from "../../components/Button";
import banner from "../../assets/img/nu_bulldogex_banner.jpg";
import dailyEssential from "../../assets/img/dailyessen.png";
import schoolAccessories from "../../assets/img/schoolAccessories.png";
import campusApparel from "../../assets/img/campusApparel.png";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="relative min-h-112 overflow-hidden border-y-2 border-zinc-50 bg-zinc-50 px-4 py-10 sm:px-6 lg:px-8">
        <img
          src={banner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-zinc-900/45" />

        <div className="relative z-10 flex min-h-88 items-start justify-end text-right sm:min-h-96">
          <div className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-200 font-text">
              Campus Marketplace
            </p>
            <h1 className="text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl font-head">
              Welcome to The BulldogsX
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-100 sm:text-base font-text">
              Find your uniforms, school gear, and student essentials all in one
              easy place.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3 font-text">
              <Button to="/products">Shop Now</Button>
              <Button to="/about" variant="primary">
                About Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-200 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500 font-text">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 font-head">
            Quick shopping blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 font-text">
              Products
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 font-text">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 font-text">
              Orders
            </p>
          </div>
          <div className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 font-text">
              Pickup Slots
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-200 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500 font-text">
            Shop Sections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 font-head">
            Simple store cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src={dailyEssential}
                alt="Daily Essential"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 font-text">
              Daily Essentials
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 font-text">
              Bags, tumblers, lanyards, and items used every school day.
            </p>
            <Button to="/products" className="mt-4 font-text" variant="primary">
              View Products
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src={schoolAccessories}
                alt="Study Supplies"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 font-text">
              School Acccesories
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 font-text">
              Stickers, keychains and other acccessories for everyday styles.
            </p>
            <Button to="/products" className="mt-4 font-text" variant="primary">
              Shop Accessories
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-200 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img
                src={campusApparel}
                alt="Campus Apparel"
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 font-text">
              Campus Apparel
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 font-text">
              Comfortable pieces for class days, commute days, and weekends.
            </p>
            <Button to="/products" className="mt-4 font-text" variant="primary">
              View Apparel
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
