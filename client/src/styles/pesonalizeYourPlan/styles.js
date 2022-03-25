import styled from 'styled-components'

export const Progress_container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 34px;
  font-size: 13px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #FFE5A4;
  width: 100%;
`
export const ProgressText = styled.div`
  line-height: 32px;
  margin: auto;
  padding-right: 200px;
`
export const TextZ = styled.div`
  display: inline-block;
  margin-left: 3px;
  font-family: 'Quicksand';
  font-weight: 600;
`
export const CurrentStep = styled.div`
  display: inline-block;
  color: #26BF00;
  font-family: 'Quicksand';
  font-weight 600;
`
export const Logo = styled.div`
`
// import { Progress_container, ProgressText, TextZ, CurrentStep, Logo} from '../styles/pesonalizeYourPlan/styles.js';
// {/*##### Top, with the progress bar #####*/}
// <Progress_container>
// <Logo>
//   <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>
//   <img className='logo' src='assets/masthead/Masthead-logo-yellow.png' width='156' height='51'></img>

//   </Link>
// </Logo>
// <ProgressText>
//   <CurrentStep>Select Plan -----</CurrentStep>
//     <TextZ style={{color: '#26BF00'}}>Register -----</TextZ>
//     <TextZ style={{color: '#26BF00'}}>Delivery Info -----</TextZ>
//     <TextZ style={{color: '#26BF00'}}>Payment Info -----</TextZ>
//     <TextZ style={{color: '#26BF00'}}>Select Meals -----</TextZ>
//     <TextZ style={{color: '#26BF00'}}>Review Order -----</TextZ>
//     <TextZ>All Done!</TextZ>
//   </ProgressText>
// </Progress_container>
// {/*##### end of the TOP ##### */}