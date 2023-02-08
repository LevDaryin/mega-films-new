interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className="mx-auto mt-[85px] mb-[25px] h-[1070px] w-[1080px] rounded-[20px] bg-[#3C3C3C] p-[30px] shadow-lg">
      {children}
    </div>
  );
};

export { Wrapper };
