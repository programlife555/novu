import { UTM_CAMPAIGN_QUERY_PARAM } from '@novu/shared';
import { HStack } from '../../styled-system/jsx';

export const RootNavMenuFooter: React.FC = () => {
  return (
    <HStack
      textStyle={'text.secondary'}
      color="typography.text.secondary"
      data-test-id="side-nav-root-footer"
      position="fixed"
      bottom={'100'}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.novu.co"
        data-test-id="side-nav-bottom-link-support"
      >
        Support
      </a>
      <p>
        <b>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</b>
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://docs.novu.co${UTM_CAMPAIGN_QUERY_PARAM}`}
        data-test-id="side-nav-bottom-link-documentation"
      >
        Docs
      </a>
      <p>
        <b>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</b>
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/novuhq/novu/issues/new/choose"
        data-test-id="side-nav-bottom-link-share-feedback"
      >
        Share Feedback
      </a>
    </HStack>
  );
};
