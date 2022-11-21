import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Container, HomeLink, HomeTitle } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <section>
      <Container>
        {isLoggedIn ? (
          <HomeTitle>
            Thanks for joining! Now it is time to add new contacts!
          </HomeTitle>
        ) : (
          <HomeTitle>
            Welcome! This is your personal phonebook app! It will help you to
            create and keep your contacts safe. ready to start? Let's get
            started! Please <HomeLink to="register">Sign up</HomeLink> or{' '}
            <HomeLink to="login">Log in</HomeLink>.
          </HomeTitle>
        )}
      </Container>
    </section>
  );
};

export default Home;
