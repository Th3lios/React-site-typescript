import React from 'react'
import styled from 'styled-components'

const PurchaseButton = ({title, subtitle}) => {
  return (
    <Wrapper>
      <Title>{ title || 'Get pro access'}</Title>
      <Subtitle>{subtitle || '$19 per month'}</Subtitle>
    </Wrapper>
  )
}

export default PurchaseButton

const Wrapper = styled.div`

`
const Title = styled.p``
  
const Subtitle = styled.p``
