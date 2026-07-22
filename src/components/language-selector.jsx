import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Selector = styled.div`
  display: flex;
  gap: 4px;
  font-size: 11px;
  font-family: inherit;
`

const LangButton = styled.button`
  background: none;
  border: 1px solid ${props => props.$active ? 'var(--bodyColor)' : 'transparent'};
  color: ${props => props.$active ? 'var(--bodyColor)' : 'var(--bodyDimmed)'};
  cursor: pointer;
  padding: 2px 6px;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s;

  &:hover {
    color: var(--bodyColor);
  }
`

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'ru', label: 'RU' },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  return (
    <Selector>
      {languages.map(({ code, label }) => (
        <LangButton
          key={code}
          $active={i18n.language === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {label}
        </LangButton>
      ))}
    </Selector>
  )
}

export default LanguageSelector
