const Container = ({ children }) => {
  return (
    <div
      style={{ padding: "45px 16px 0", maxWidth: "1240px", margin: "0 auto" }}
    >
      {children}
    </div>
  );
};

export default Container;
