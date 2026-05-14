import SideMenu from "./SideMenu";

const SideBar = ({
  categories,
  setSelectedCategories,
  refetch,
  isCategoriesLoading,
}) => {
  return (
    <aside className="fixed left-[2%] top-5 bottom-5 w-[20%] 2xl:w-[18%] aside1 hidden lg:block">
      <div className="h-[10%] px-5 bg-[#ffffff10]  rounded-t-[20px]">
        <div className="h-full flex justify-between items-center text-white">
          <div className="flex justify-start items-center gap-1 md:gap-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
              <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
            </svg>
            <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
              Site Saver
            </h1>
          </div>
        </div>
      </div>
      <SideMenu
        refetch={refetch}
        categories={categories}
        setSelectedCategories={setSelectedCategories}
        isCategoriesLoading={isCategoriesLoading}
      />
    </aside>
  );
};

export default SideBar;
