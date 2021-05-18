import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import ProductTab from './tabb/ProductTab';
import TransactionReviewTab from './tabb/TransactionReviewTab';
import TransactionListTab from './tabb/TransactionListTab';
import BasketTab from './tabb/BasketTab';
import TenderListTab from './tabb/TenderListTab';
import { Route } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Body = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  text-align: center;
`;

const ActTab = styled.div`
  height: 3vw;
  width: 13vw;
  border: 1px solid black;
  border-bottom: none;
  :hover {
    cursor: pointer;
  }
`;

const Tab = styled.div`
  height: 3vw;
  width: 13vw;
  border: 1px solid #e0e0e0;
  background-color: #f5f5f5;
  color: #bdbdbd;
  border-bottom: 1px solid black;
  :hover {
    cursor: pointer;
    border: 2px solid #e0e0e0;
    border-bottom: 1px solid black;
    font-weight: bolder;
  }
`;

const ProfileTab2 = () => {
  const history = useHistory();
  const clickHandler = (id: string) => {
    history.push(id);
  };
  return (
    <Container>
      <Body>
        {window.location.pathname === '/profile' ? (
          <ActTab onClick={() => clickHandler('/profile')}>
            <p>상품</p>
          </ActTab>
        ) : (
          <Tab style={{}} onClick={() => clickHandler('/profile')}>
            <p>상품</p>
          </Tab>
        )}
        {window.location.pathname === '/profile/transactionreview' ? (
          <ActTab onClick={() => clickHandler('/profile/transactionreview')}>
            <p>거래리뷰</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/transactionreview')}>
            <p>거래 리뷰</p>
          </Tab>
        )}
        {window.location.pathname === '/profile/basket' ? (
          <ActTab onClick={() => clickHandler('/profile/basket')}>
            <p>찜</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/basket')}>
            <p>찜</p>
          </Tab>
        )}
        {window.location.pathname === '/profile/tenderlist' ? (
          <ActTab onClick={() => clickHandler('/profile/tenderlist')}>
            <p>입찰내역</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/tenderlist')}>
            <p>입찰내역</p>
          </Tab>
        )}
        {window.location.pathname === '/profile/transactionlist' ? (
          <ActTab onClick={() => clickHandler('/profile/transactionlist')}>
            <p>거래내역</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/transactionlist')}>
            <p>거래내역</p>
          </Tab>
        )}
      </Body>
      <Route exact path="/profile" component={ProductTab}></Route>
      <Route
        path="/profile/transactionreview"
        component={TransactionReviewTab}
      ></Route>
      <Route path="/profile/basket" component={BasketTab}></Route>
      <Route path="/profile/tenderlist" component={TenderListTab} />
      <Route path="/profile/transactionlist" component={TransactionListTab} />
    </Container>
  );
};

export default ProfileTab2;
