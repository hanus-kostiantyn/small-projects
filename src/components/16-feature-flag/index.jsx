import { useContext } from "react"
import Accordian from "../1-accordian"
import TicTacToe from "../14-tic-tac-toe"
import RandomColor from "../15-random-color"
import TreeView from "../5-tree-view"
import LightDarkMode from "../8-light-dark-mode"
import { FeatureFlagsContext } from "./context"
import menus from "../5-tree-view/data"



export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode/>
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe/>
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor/>
        },
        {
            key: 'showAccordian',
            component: <Accordian/>
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus}/>
        },
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    if (loading) return <h1>Loading...</h1>

    return <div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) 
            ? componentItem.component 
            : null)
        }
    </div>
}