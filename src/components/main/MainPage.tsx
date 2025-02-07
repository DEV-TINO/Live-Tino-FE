import IconArrow from "../../icons/IconArrow";
import useBaseModal from "../../stores/baseModal";

const MainPage = () => {
  const { openModal } = useBaseModal();

  const handleClickJoin = () => {
    openModal("join");
  };

  const handleClickCreate = () => {
    openModal("create");
  };

  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-10 2xl:px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl">
            Live Streaming with Interactive Creativity
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl break-keep">
            화면과 웹캠 위에 실시간으로 그림을 그려 아이디어를 더하세요. 단순한 방송을 넘어 소통과 협업의 새로운 길을 열어드립니다.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleClickCreate} 
              className="inline-flex items-center justify-center w-32 h-12 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Create Live
            </button>
            <button
              type="button"
              onClick={handleClickJoin} 
              className="inline-flex w-32 h-12 items-center justify-center text-base font-medium text-center text-white rounded-md bg-blue-600 hover:bg-blue-800"
            >
              Join Live
              <IconArrow />
            </button>
          </div>
        </div>
        <div className="hidden pl-16 lg:mt-0 lg:col-span-5 lg:flex">
          <img className="h-[300px] xl:h-[350px] w-auto" src="/tino.svg" alt="Tino logo" />
        </div>
      </div>
    </section>
  );
};

export default MainPage;