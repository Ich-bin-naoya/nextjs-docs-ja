import Page from '../../components/page';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Container from '../../components/container';
import { MediaQueryConsumer } from '../../components/media-query';
import withPure from '../../components/hoc/pure';

import Markdown from '../../components/contributions/contributions.mdx';
import { components } from '../../components/docs/documentation';

const Content = withPure(() => <Markdown components={components} />);

export default () => (
  <Page>
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={64 + (isMobile ? 32 : 0)}
          shadow={!isMobile}
          defaultActive
        >
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Container>
      <Content />
    </Container>
  </Page>
);
