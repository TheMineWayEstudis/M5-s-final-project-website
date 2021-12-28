import MainScreenBodyItems from './MainScreenBodyItems';
import MainScreenCarousel from './MainScreenCarousel';
import MainScreenHeader from './MainScreenHeader';

export default function MainScreen() {
    return (
        <>
            <MainScreenCarousel/>
            <br/>
            <MainScreenHeader/>
            <br/>
            <MainScreenBodyItems/>
        </>
    );
}