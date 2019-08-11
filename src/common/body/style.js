import styled from 'styled-components';

export const BodyWarpper = styled.div`
  width: 100%;
  position: absolute;
  top: 60px;
  bottom: 20px;
  background-color: #f3f3f3;
`;

export const Box = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const NavBar = styled.div`
  width: 300px;
  height: 100%;
  background-color: #2d4054;
`;

export const Nav = styled.ul`
  width: 300px;
  position: relative;
  padding-top: 20px;
  padding-bottom: 60%;
`;

export const NavItem = styled.li`
  height: 45px;
  line-height: 45px;
  padding-left: 20px;
  color: #eee;
  &:hover {
    background-color: #435466;
    color: #00b4cf;
  }
`;

export const ItemImg = styled.span.attrs({
  className: 'icon'
})`
  width: 30px;
  height: 30px;
`;

export const NavHistory = styled.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  top: 60%;
`;

export const HistoryTitle = styled.div`
  font-size: 24px;
  color: #ccc;
  margin: 10px 20px; 
`;

export const HistoryNav = styled.ul`
  list-style-type: disc;
`;

export const HistoryNavItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 20px;
  font-size: 12px;
  color: #999;
  list-style-position: inside
  &:hover {
    color: #00b4cf;
    cursor: pointer;
  }
`;
