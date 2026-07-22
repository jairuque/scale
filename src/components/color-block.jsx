import { useState, useEffect } from 'react'
import Color from 'color'
import styled, { keyframes } from 'styled-components'

const ColorBlockWrapper = styled.div`
`

const ColorBlockCode = styled.div`
  position: absolute;
  top: 100%;
  padding-top: 8px;
  padding-bottom: 16px;
  transition: .2s;
`

const ColorBlockContainer = styled.div`
  position: relative;
  height: 72px;
  max-width: ${props => props.$wide ? 192 : 72}px;
  ${props => props.$wide && 'min-width: 192px'};
  width: 100%;
  ${props => !props.$hasValidColor && 'box-shadow: inset 0 0 0 2px #ddd'};
  flex-shrink: 1;
  cursor: pointer;

  &:not(:hover) .ColorBlockCode {
    opacity: 0;
    transition: .6s;
  }

  @media (max-width: 720px) {
    ${props => props.$wide && 'min-width: 96px'};
  }
`

const copyAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  30% {
    opacity: 0.5;
  }
  70% {
    transform: translateY(0);
    opacity: 0.3;
  }
  100% {
    opacity: 0;
  }
`

const CopiedText = styled.div`
  animation: ${copyAnimation} 0.8s;
  opacity: 0;
`

const ColorBlock = ({ wide, hasValidColor, color, style, ...rest }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 800)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const handleCopied = async () => {
    if (hasValidColor && color) {
      try {
        await navigator.clipboard.writeText(Color(color).hex())
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement('textarea')
        textarea.value = Color(color).hex()
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
    }
  }

  return (
    <ColorBlockContainer $wide={wide} $hasValidColor={hasValidColor} style={style} onClick={handleCopied} {...rest}>
      <ColorBlockWrapper />

      <ColorBlockCode className='ColorBlockCode'>
        {hasValidColor ? Color(color).hex() : null}
        {copied && (
          <CopiedText>
            {Color(color).hex()}
          </CopiedText>
        )}
      </ColorBlockCode>
    </ColorBlockContainer>
  )
}

export default ColorBlock
