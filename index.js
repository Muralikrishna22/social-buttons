const Button = (props) => {
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading"> Social Buttons </h1>
    <div className="btn-container">
      <Button name="Like" className="like-btn" />
      <Button name="Comment" className="comment-btn" />
      <Button name="Share" className="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
