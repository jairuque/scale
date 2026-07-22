import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import LanguageSelector from './language-selector'

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: inherit;
    text-underline-position: under;
    text-decoration-color: var(--bodyDimmed);
  }

  h1 {
    font-size: inherit;
    line-height: inherit;
    font-weight: normal;
    display: inline-block;
  }
`

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`

const Footer = () => {
  const { t } = useTranslation()

  return (
    <FooterSection>
      <FooterLeft>
        <a href='https://hihayk.github.io/scale'><h1>Scale</h1></a>&nbsp; · &nbsp;{t('madeBy')} <a href='http://hihayk.com' target='_blank' rel='noopener noreferrer'>Hayk</a>&nbsp; · &nbsp;<a href='https://github.com/hihayk/scale' target='_blank' rel='noopener noreferrer'>GitHub</a>
        &nbsp; · &nbsp;<Link to="/gallery">{t('gallery')}</Link>
      </FooterLeft>
      <LanguageSelector />
    </FooterSection>
  )
}

export default Footer
