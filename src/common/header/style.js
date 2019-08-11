import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 40px 0 #eee;
`;

export const HeaderLogo = styled.div`
  height: 60px;
  width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const HeaderImage = styled.img.attrs({
  src: require('../../static/images/logo.svg')
})`
  height: 40px;
  margin: 10px auto;
`;

export const HeaderRegisterImage = styled.img.attrs({
  src: require('../../static/images/avatar.jpg')
})`
  float: right;
  height: 40px;
  border-radius: 20px;
  margin: 10px;
`;
