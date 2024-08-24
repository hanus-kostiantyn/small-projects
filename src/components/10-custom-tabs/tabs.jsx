import { useState } from "react"


export default function Tabs({tabsContent, onChange}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return <div className="wrapper">
        <div className="heading">
            {
                tabsContent.map((tabItem,i) => <div className={`tab-item ${currentTabIndex === i ? 'active' : ''}`} onClick={() => handleOnClick(i)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                </div>)
            }
        </div>

        <div className="content">
            {
                tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
            }
        </div>
    </div>
}