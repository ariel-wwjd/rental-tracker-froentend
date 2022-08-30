import styled from 'styled-components';

interface PropsPaymentsInfo {
  showMore: boolean;
}

const StyledCard = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  margin-top: 12px;
  border-bottom: ${({ theme }) => (`2px solid ${theme.CLIENT_CARD_BORDER_BOTTOM_COLOR}`)};
`;

const StyledClientInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledAvatarContainer = styled.div`
  display: flex;
`;

const StyledName = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => (theme.CLIENT_CARD_NAME_TEXT_COLOR)};
`;

const StyledEmail = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => (theme.CLIENT_CARD_EMAIL_TEXT_COLOR)};
`;

const StyledAmount = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => (theme.CLIENT_CARD_AMOUNT_TEXT_COLOR)};
`;

const StyledRequest = styled.div`
  font-size: 14px;
  color: ${({ theme }) => (theme.CLIENT_CARD_REQUEST_TEXT_COLOR)};
`;

const StyledSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledPaymentsInfo = styled.div<PropsPaymentsInfo>(
  ({ showMore }) => `
    display: ${showMore ? 'block' : 'none'};
  `,
);

export {
  StyledCard,
  StyledClientInfo,
  StyledPaymentsInfo,
  StyledAvatarContainer,
  StyledSummaryContainer,
  StyledName,
  StyledEmail,
  StyledAmount,
  StyledRequest,
};
