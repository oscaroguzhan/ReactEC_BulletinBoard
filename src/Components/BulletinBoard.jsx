import ReactPost from "./ReactPost";

const BulletinBoard = ({ data }) => {
  return (
    <section>
      {data.map((post, i) => (
        <ReactPost key={i} {...post} />
      ))}
    </section>
  );
};

export default BulletinBoard;
