const LikeButton = (props) => {
  const [liked, setLiked] = React.useState(0);

  return (
    <span>
      <i class={"fas " + (liked ? 'fa-thumbs-down' : 'fa-thumbs-up')} onClick={() => setLiked(!liked)}/>
    </span>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#like'));
root.render(<LikeButton />);