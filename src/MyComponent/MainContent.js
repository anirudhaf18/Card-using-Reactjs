import Header from './/Header';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';

export default function MainContent() {
    return (
        <div className="little-box">
            
            <Header />
            <About />
            <Interest />
            <Footer />
            
        </div>
    );
}