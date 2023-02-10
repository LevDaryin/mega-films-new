interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <div className="mb-[35px] text-center text-[20px] font-medium leading-6 text-white after:absolute after:inset-0 after:mx-auto after:mt-[60px] after:h-[3px] after:w-[90%] after:bg-[#364C84] after:content-['']">
      {children}
    </div>
  );
};

export { Title };
