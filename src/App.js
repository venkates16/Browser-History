import './App.css'
import History from './Component/BrowserHistory'
// These are the list used in the application. You can move them to any component needed.

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
import {Component} from 'react'

class App extends Component {
  state = {
    searchItem: '',
    userDetailes: initialHistoryList,
  }

  searchFilter = event => {
    console.log(event.target.value)
    this.setState({searchItem: event.target.value})
  }

  click = props => {
    let {userDetailes} = this.state
    let addTOList = userDetailes.filter(each => {
      return each.id !== props
    })
    this.setState({
      userDetailes: addTOList,
    })
  }

  render() {
    let {searchItem, userDetailes} = this.state

    let searchedItems = userDetailes.filter(each => {
      return each.title
        .toLocaleLowerCase()
        .includes(searchItem.toLocaleLowerCase())
    })
    console.log(searchedItems)
    console.log(userDetailes.length)

    let select = () => {
      if (userDetailes.length > 0) {
        // console.log('hii')
        return searchedItems.map(each => {
          return <History obj={each} key={each.id} click={this.click} />
        })
      } else {
        return (
          <div className="empty">
            <p className="sizePara">There is no history to show</p>
          </div>
        )
      }
    }

    return (
      <div className="container">
        <h1 className="brs">Browser history</h1>
        <div className="headerBar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <div className="search_card">
            <button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </button>

            <input
              type="search"
              placeholder="Search history"
              onChange={this.searchFilter}
            />
          </div>
        </div>
        <div className="history">
          <ul>{select()}</ul>
        </div>
      </div>
    )
  }
}

export default App
