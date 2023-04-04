import { useMemo } from "react";
import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBox = () => {
  // {keyword, setKeyword}
  const location = useLocation();
  const navigate = useNavigate();

  const keyword = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.has("keyword") ? searchParams.get("keyword") : "";
  }, [location]);

  const onSearch = (e) => {
    const value = e.target.value;
    navigate(`${location.pathname}?keyword=${value}`);
  };

  return <Input.Search onChange={onSearch} />;
};

export default SearchBox;
