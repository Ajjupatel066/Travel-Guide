import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  AppContainer,
  MainHeading,
  TravelGuideList,
  PackageItem,
  PackageImage,
  PackageName,
  PackageDescription,
} from './styledComponents'

class TravelGuide extends Component {
  state = {
    travelGuideList: [],
  }

  componentDidMount() {
    this.getTravelPackages()
  }

  getTravelPackages = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.packages.map(eachPackage => ({
      id: eachPackage.id,
      name: eachPackage.name,
      imageUrl: eachPackage.image_url,
      description: eachPackage.description,
    }))
    this.setState({travelGuideList: updatedData})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderTravelGuidePackages = () => {
    const {travelGuideList} = this.state

    return (
      <TravelGuideList>
        {travelGuideList.map(eachPackage => {
          const {name, imageUrl, description} = eachPackage

          return (
            <PackageItem key={eachPackage.id}>
              <PackageImage src={imageUrl} alt={name} />
              <PackageName>{name}</PackageName>
              <PackageDescription>{description}</PackageDescription>
            </PackageItem>
          )
        })}
      </TravelGuideList>
    )
  }

  render() {
    const {travelGuideList} = this.state

    return (
      <AppContainer>
        <MainHeading>Travel Guide</MainHeading>
        {travelGuideList.length === 0
          ? this.renderLoader()
          : this.renderTravelGuidePackages()}
      </AppContainer>
    )
  }
}

export default TravelGuide
