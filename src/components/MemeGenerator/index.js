import {Component} from 'react'
import {
  FormContainer,
  CustomContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomButton,
  BackgroundImage,
  TextContent,
  Heading,
  FormMainCont,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    topTxtInput: '',
    topTxt: '',
    bottomTxt: '',
    bottomTxtInput: '',
    backgroundImageInput: '',
    bgImage: '',
    fontSizeId: fontSizesOptionsList[0].optionId,
    fontSize: '',
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageInput,
      topTxtInput,
      bottomTxtInput,
      fontSizeId,
    } = this.state
    this.setState({
      bgImage: backgroundImageInput,
      topTxt: topTxtInput,
      bottomTxt: bottomTxtInput,
      fontSize: fontSizeId,
    })
  }

  onImageUrl = event => {
    this.setState({backgroundImageInput: event.target.value})
  }

  onTopText = event => {
    this.setState({topTxtInput: event.target.value})
  }

  onBottomText = event => {
    this.setState({bottomTxtInput: event.target.value})
  }

  onSelectFontSize = event => {
    this.setState({fontSizeId: event.target.value})
  }

  render() {
    const {
      topTxt,
      topTxtInput,
      bottomTxt,
      bottomTxtInput,
      bgImage,
      backgroundImageInput,
      fontSize,
    } = this.state
    return (
      <>
        <Heading>Meme Generator</Heading>

        <CustomContainer>
          <FormMainCont>
            <BackgroundImage data-testid="meme" bgImage={bgImage}>
              <TextContent fontSize={fontSize}>{topTxt}</TextContent>
              <TextContent fontSize={fontSize}>{bottomTxt}</TextContent>
            </BackgroundImage>

            <FormContainer onSubmit={this.onGenerateMeme}>
              <div>
                <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
                <CustomInput
                  type="text"
                  id="imageUrl"
                  onChange={this.onImageUrl}
                  value={backgroundImageInput}
                  //  autoComplete="off"
                />
              </div>

              <div>
                <CustomLabel htmlFor="topTxt">Top Text</CustomLabel>
                <CustomInput
                  type="text"
                  id="topTxt"
                  onChange={this.onTopText}
                  value={topTxtInput}
                  //  autoComplete="off"
                />
              </div>

              <div>
                <CustomLabel htmlFor="bottomTxt">Bottom Text</CustomLabel>
                <CustomInput
                  type="text"
                  id="bottomTxt"
                  onChange={this.onBottomText}
                  value={bottomTxtInput}
                  // autoComplete="off"
                />
              </div>

              <div>
                <CustomLabel htmlFor="select">Font Size</CustomLabel>
                <CustomSelect id="select" onChange={this.onSelectFontSize}>
                  {fontSizesOptionsList.map(options => (
                    <option key={options.optionId}>
                      {options.displayText}
                    </option>
                  ))}
                </CustomSelect>
              </div>

              <CustomButton type="submit">Generate</CustomButton>
            </FormContainer>
          </FormMainCont>
        </CustomContainer>
      </>
    )
  }
}
export default MemeGenerator
