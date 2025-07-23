import { use } from "react";

export default function Comments({ comments }) {
  const cmnts = use(comments);

  return (
    <>
      <h1>Comments:</h1>

      {cmnts.map((cmnt) => {
        const { postId, id, name, email, body } = cmnt;

        return (
          <div key={id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>Post ID: {postId}</h3>
            <h4>{name} ({email})</h4>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}
