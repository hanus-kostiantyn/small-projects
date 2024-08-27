import './App.css';
import Accordian from './components/1-accordian';
import QrCodeGenerator from './components/2-qr-code-generator';

import StarRating from './components/3-star-rating';
import ImageSlider from './components/4-image-slider';
import TreeView from './components/5-tree-view';
import menus from './components/5-tree-view/data'
import LightDarkMode from './components/8-light-dark-mode';
import LoadMoreData from './components/7-load-more-data'
import ScrollIndicator from './components/9-scroll-indicator';
import TabTest from './components/10-custom-tabs/tab-test';
import ModalTest from './components/11-custom-modal-popup/modal-test';
import GitHubProfileFinder from './components/12-github-profile-finder';
import SearchAutocomplete from './components/13-search-autocomplete-with-api';
import TicTacToe from './components/14-tic-tac-toe';
import RandomColor from './components/15-random-color';
import FeatureFlagGlobalState from './components/16-feature-flag/context';
import FeatureFlags from './components/16-feature-flag';

function App() {
  return (
    <div className="App">
        
        {/* <Accordian/> */}

        {/* <RandomColor/> */}

        {/* <StarRating noOfStars={10}/> */}

        {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10}/> */}

        {/* <TreeView menus={menus}/> */}

        {/* <QrCodeGenerator/> */}
        {/* <LightDarkMode/> */}

        {/* <LoadMoreData/> */}

        {/* <CopyPreDefault/> */}

        {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

        {/* <TabTest/>  */}

        {/* <ModalTest/> */}

        {/* <GitHubProfileFinder/> */}

        {/* <SearchAutocomplete/> */}

        {/* <TicTacToe/> */}

        <FeatureFlagGlobalState>
            <FeatureFlags/>
        </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
