const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex max-w-3xl min-h-screen w-full mx-auto p-2 h-full">
      {children}
    </div>
  );
};

export default Container;
