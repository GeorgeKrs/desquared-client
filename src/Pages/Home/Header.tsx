interface Props {
  selectedCategory: string;
}

const Header = ({ selectedCategory }: Props) => {
  return (
    <div className="mt-4 d-flex justify-content-center text-center">
      <h3 className="header-category">
        <span className="mx-2">Selected Category:</span>
        {Object.values(selectedCategory)}
      </h3>
    </div>
  );
};

export default Header;
