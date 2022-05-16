import * as S from './MainTopic.style'
import topic1 from 'public/topic1.jpg'
import topic2 from 'public/topic2.jpg'
import topic3 from 'public/topic3.jpg'

function MainTopic() {
  return (
    <S.MainTopic>
      <S.TitleContainer>
        <S.Title>
          <S.Title1>Dive into innovation</S.Title1>
          <br />
          <S.Title2>and Growth</S.Title2>
        </S.Title>
        <S.Desc>
          FlowBay Financial Holdings (FFH) is an international investment firm
          which based in Bahrain, with a diversified financial services to
          supporting technology innovation and economic growth. Our approach is
          identify unique investment opportunities with deep fundamental
          approach and technology solution.
        </S.Desc>
      </S.TitleContainer>
      <S.TopicContainer>
        <S.Topic1>
          <S.TopicImgContainer>
            <S.TopicImg src={topic1} layout="responsive" />
          </S.TopicImgContainer>
          <S.TopicInfo>
            <S.TopicTitle>Art & Antique</S.TopicTitle>
            <S.TopicDesc>
              The format and business model of art and antique is in a
              revolution of tomorrow. FlowBay targeted most valuable artworks
              and antiques to build diversified asset management strategies
              through active management approach, co-investment structures or
              tech-solution. We aim to provide vigorous investment vehicle for
              investor to preserving and enhancing wealth, also have channel to
              acquire ownership or exposure of art.
            </S.TopicDesc>
          </S.TopicInfo>
        </S.Topic1>
        <S.Topic2>
          <S.TopicImgContainer>
            <S.TopicImg src={topic2} layout="responsive" />
          </S.TopicImgContainer>
          <S.TopicInfo>
            <S.TopicTitle TopicTitle>Blockchain & Cryptocurrency</S.TopicTitle>
            <S.TopicDesc>
              FlowBay has firmly convinced blockchain technology and
              cryptocurrency application is the third era of internet, the Web
              3.0, which unlock advanced, decentralized and modern functionality
              of financial use cases and scenarios, and more than that. We aim
              to support crypto-project and Web 3.0 development from the
              financial (funding, business integration, investment strategy) to
              operational (recruiting, regulatory strategy), and more.
            </S.TopicDesc>
          </S.TopicInfo>
        </S.Topic2>
        <S.Topic3>
          <S.TopicImgContainer>
            <S.TopicImg src={topic3} layout="responsive" />
          </S.TopicImgContainer>
          <S.TopicInfo>
            <S.TopicTitle TopicTitle>Real Estate</S.TopicTitle>
            <S.TopicDesc>
              Real Estate posses strong fundamental to growth in the future.
              FlowBay has team of expertises which specialized in Real Estate
              industry, also we collaborated with different Real Estate Group
              for investment and building new business model. We planned to
              launch first property project in Bahrain and eyes on wider MENA
              region and Asia.
            </S.TopicDesc>
          </S.TopicInfo>
        </S.Topic3>
      </S.TopicContainer>
    </S.MainTopic>
  )
}

export default MainTopic
