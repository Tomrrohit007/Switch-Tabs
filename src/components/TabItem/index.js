import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabId, isActiveTab} = props
  const {displayText, tabId} = tabDetails
  const onSelectTab = () => changeTabId(tabId)
  const activeClass = isActiveTab ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClass}`}
        onClick={onSelectTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
