interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className="shadow-lg mx-auto mt-[85px] mb-[25px] grid h-[1130px] w-[1080px] rounded-[20px] bg-[#3C3C3C] p-[30px]">
      {children}
    </div>
  );
};

export { Wrapper };
