const SearchBox = (props) => {  // {keyword, setKeyword}


  const onChange = (e) => {
    props.setKeyword(e.target.value)   // setKeyword(e.target.value)
  }

  return (
    <input value = {props.keyword} onChange = {onChange} /> //<input value = {keyword} onChange = {onChange} />
  )
}

export default SearchBox;