import styled from "styled-components";
import logoImage from "../img/logo.png";

export const TopContainer = styled.div`
  display: flex;
  background-color: #FFE5A4;
  width: 100%;
  height: 95px;
  flex-directon: row;
`
export const Logo = styled.div`
  height: 55px;
  width: 167px;
  background-image: url(${logoImage});
  background-size: cover;
  margin: 13px;
`