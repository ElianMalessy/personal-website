import axios from "axios";
import useSWR from "swr";

const wrapper = (Component) => {
  const wrappedComponent = (props) => (
    <>
      <UsersList {...props} />
      <Component {...props} />
    </>
  );

  return wrappedComponent;
};
export const getStaticProps = async () => {
  const fetcher = (url) => axios.get(url).then((r) => r.data);
  const res = useSWR("/api", fetcher);
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default wrapper;
