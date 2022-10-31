export default function MobileSubNav() {
  const selectedStyle = {
    border: "none",
    outline: "none",
    height: "30px",
    marginTop: "5px",
    borderRadius: "5px",
    width: "90px",
    fontSize: "15px",
    fontWeight:'normal',
    margin: "8px",
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <select id="selected" name="ddProducts" style={selectedStyle}>
          <option>All </option>
          <option>channel</option>
          <option>playlist</option>
          <option>video</option>
        </select>
        <select id="during" name="ddProducts" style={selectedStyle}>
          <option>Any time</option>
          <option>Long</option>
          <option>medium</option>
          <option>short</option>
        </select>
      </div>
      <hr />
    </div>
  );
}
