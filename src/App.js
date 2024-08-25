import Accordian from './components/accordian';
import './App.css';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/4-image-slider';
import TreeView from './components/5-tree-view';
import menus from './components/5-tree-view/data'
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/8-light-dark-mode';
import LoadMoreData from './components/7-load-more-data'
import CopyPreDefault from './components/9-copyof8'
import ScrollIndicator from './components/9-scroll-indicator';
import TabTest from './components/10-custom-tabs/tab-test';
import ModalTest from './components/11-custom-modal-popup/modal-test';
import GitHubProfileFinder from './components/12-github-profile-finder';

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

        <GitHubProfileFinder/>

    </div>
  );
}

export default App;
