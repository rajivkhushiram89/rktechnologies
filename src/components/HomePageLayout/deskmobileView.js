import PropTypes from "prop-types";
import React, { Component } from "react";
import { Container, Header, Responsive } from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class HomepageHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));
  render() {
    const { mobile } = this.state;
    return (
      <React.Fragment>
        <Container text>
          <Header
            as="h1"
            gh
            content="Hi, I'm Rajiv, a Full-Stack Developer"
            inverted
            style={{
              fontSize: mobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "3.0em" : "3em"
            }}
          />
          <br></br>

          <br></br>
        </Container>
      </React.Fragment>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <h1>DesktopView</h1>
        <HomepageHeading />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <h1>Mobile View</h1>
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomePageLayout = () => <ResponsiveContainer>
    
</ResponsiveContainer>;

export default HomePageLayout;
