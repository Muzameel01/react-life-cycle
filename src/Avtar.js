export default  function Avatar({person,size}) {
    // console.log(props);
    return (
      <img
        className="avatar"
        src={`https://i.imgur.com/${person.imageId}.jpg`}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  