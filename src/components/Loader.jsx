import { Discuss } from "react-loader-spinner";

export default function Loader() {
    return (
      <div className="row justify-content-center">
    <Discuss
      visible={true}
      height="80"
      width="80"
      ariaLabel="comment-loading"
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    /></div>
  );
}
