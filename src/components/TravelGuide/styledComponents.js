import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #eef4f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 25px;
  color: #334155;
  padding-bottom: 8px;
  border-bottom: 3px solid #52bbf0;
`
export const TravelGuideList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
  list-style-type: none;
`
export const PackageItem = styled.li`
  background-color: #ffff;
  width: 40%;
  margin: 20px;
`

export const PackageImage = styled.img`
  width: 100%;
`
export const PackageName = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #334155;
  padding: 10px 10px;
`
export const PackageDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  padding: 10px 10px;
`
