interface Props {
  children: React.ReactNode;
}

const SmTitle = ({ children }: Props) => {
  return (
    <div className="mt-[15px] mb-[10px] text-[16px] font-medium text-white">
      {children}
    </div>
  );
};

export { SmTitle };
