interface Props {
  selectedCategory: string;
  loader: boolean;
  errorFetchingData: boolean;
}

const Header = ({ selectedCategory, loader, errorFetchingData }: Props) => {
  return (
    <>
      {!loader ||
        (errorFetchingData && (
          <div className="mt-4 d-flex justify-content-center text-center">
            <h3 className="header-category">
              <span className="mx-2">Selected Category:</span>
              {Object.values(selectedCategory)}
            </h3>
          </div>
        ))}
    </>
  );
};

export default Header;
