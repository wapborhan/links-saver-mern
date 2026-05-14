import { useEffect, useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import HeadNav from "../../components/HeadNav";
import LinksCard from "../../components/LinksCard";
import LoaderWebsite from "../../components/shared/loaderWebsite";
import useFetchCategories from "../../hooks/useFetchCategories";
import useFetchWebsite from "../../hooks/useFetchWebsite";

const HomePage = () => {
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [categories, isCategoriesLoading, catRefetch] = useFetchCategories();

  const [websites, isWebsitesLoading, webRefetch] =
    useFetchWebsite(selectedCategories);

  useEffect(() => {
    webRefetch();
  }, [selectedCategories, webRefetch]);

  return (
    <section className="hidden lg:block h-full w-full relative">
      <SideBar
        refetch={catRefetch}
        categories={categories}
        setSelectedCategories={setSelectedCategories}
        isCategoriesLoading={isCategoriesLoading}
      />

      <aside className="hidden lg:block h-full  fixed left-[24%] 2xl:left-[22%] top-5 bottom-5 w-[74%] 2xl:w-[77%]  aside2">
        <section className="h-full w-full rounded-[24px]">
          <HeadNav
            selectedCategories={selectedCategories}
            refetch={webRefetch}
          />
          <section
            id="scrollBar"
            className="h-[90%] w-full mb-3 overflow-y-auto rounded-b-[24px] bg-[#bfbfbf1c]"
          >
            <section className="h-full">
              {isWebsitesLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 py-4 px-4">
                  <LoaderWebsite />
                  <LoaderWebsite />
                  <LoaderWebsite />
                  <LoaderWebsite />
                  <LoaderWebsite />
                </div>
              ) : (
                <>
                  {websites && websites.length > 0 ? (
                    <section className="h-full">
                      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 py-4 px-4">
                        {websites?.map((item) => {
                          return (
                            <LinksCard
                              key={item._id}
                              item={item}
                              webRefetch={webRefetch}
                            />
                          );
                        })}
                      </section>
                    </section>
                  ) : (
                    <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl">
                      <h1>No websites found!</h1>
                    </section>
                  )}
                </>
              )}
            </section>
          </section>
        </section>
      </aside>
    </section>
  );
};

export default HomePage;
