import './index.css'

let History = props => {
  let {obj, click} = props
  let {id, timeAccessed, logoUrl, title, domainUrl} = obj

  let deleteItem = () => {
    click(id)
  }

  return (
    <li className="list">
      <p>{timeAccessed}</p>
      <div className="card">
        <div className="domain">
          <img src={logoUrl} alt="domain logo" className="img" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <div>
          <button data-testid="delete" onClick={deleteItem}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default History
