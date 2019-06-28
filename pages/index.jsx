import Wrapper from '../components/Wrapper';
import Header from '../components/Header/Header';
import BodyDecoration from '../components/Wrapper/BodyDecoration';
import Footer from '../components/Footer';
import Main from '../components/Main';
export default function Index() {
	return (
		  <Wrapper>
			  <BodyDecoration />
			  <Header />
			  <Main />
			  <div className="flex-grow-1"/>
			  <Footer />
		  </Wrapper>
	);
}
