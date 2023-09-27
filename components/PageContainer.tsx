type PageContainerProps = {
    children: React.ReactNode;
  };
  
  const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
      <div className="container">
        {children}
      </div>
    );
  }
  
  export default PageContainer;
