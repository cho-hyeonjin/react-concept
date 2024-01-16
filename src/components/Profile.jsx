export default function Profile(props) {
  return (
    <>
      <div className="profile">
        <img src={props.image} alt="avatar" className="photo" />
        {props.isNew && <span className="new">New</span>}
        <h1>{props.name}</h1>
        <p>{props.title}</p>
      </div>
    </>
  );
}
