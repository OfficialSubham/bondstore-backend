const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-3xl w-full mx-auto p-5 h-full">{children}</div>
  );
};

export default Container;
