import { useState, useEffect } from "react";
import { UsersList } from "sf-ui-kit";
import { navigate } from "gatsby";

const UserList = ({}: any) => {
  const [state, setState] = useState({
    page: 0,
    query: "",
  });
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const querpage = params.get("page");
    const querysearch = params.get("search");
    setState({
      page: querpage ? parseInt(querpage) : 0,
      query: querysearch ? querysearch : "",
    });
  }, []);

  useEffect(() => {
    if (state.page !== 0 && state.query !== "") {
      navigate(`../?page=${state.page}&search=${state.query}`);
    }
  }, [state]);
  return (
    <UsersList
      currentPage={state.page}
      searchQuery={state.query}
      onchangePage={(value) => setState({ ...state, page: value })}
      onchangeQuery={(value) => setState({ ...state, page: value })}
    />
  );
};

export default UserList;
