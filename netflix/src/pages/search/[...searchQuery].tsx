import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import App from "../../components/App";
import generateQueryString from "../../helpers/generateQueryString";

const Index = (props: any) => {
  console.log(props);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App films={props} />
      </Provider>
    </React.StrictMode>
  );
};

export async function getServerSideProps(context: any) {
  let res;
  let details;
  const paramsUrl: any = generateQueryString(context.query);
  paramsUrl
    ? (res = await fetch(paramsUrl))
    : (res = await fetch("http://localhost:4000/movies"));
  const { data, totalAmount } = await res.json();
  if (context.query.movieId) {
    details = await fetch(
      `http://localhost:4000/movies/${context.query.movieId}`
    );
    details = await details.json();
    return { props: { data, totalAmount, details } };
  }
  return { props: { data, totalAmount } };
}

export default Index;
