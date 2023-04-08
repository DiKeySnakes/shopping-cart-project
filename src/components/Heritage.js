import styled from 'styled-components';
import Heritage_historic_hagstrom_guitars from '../assets/images/Heritage_historic_hagstrom_guitars.jpg';
import Heritage_Frankfurtmaessan from '../assets/images/Heritage_Frankfurtmaessan.jpg';
import Heritage_butikdrottninggatan from '../assets/images/Heritage_butikdrottninggatan.jpg';
import Heritage_Sven_Ingvars from '../assets/images/Heritage_Sven_Ingvars.jpg';
import Heritage_Hagstrom_58_Adv_ny from '../assets/images/Heritage_Hagstrom_58_Adv_ny.jpg';
import Heritage_History_Super_Swede_book from '../assets/images/Heritage_History_Super_Swede_book.jpg';
import Heritage_History_Super_Swede_book_Karl_Erik_Hagstroem_and_Mikael_Jansson from '../assets/images/Heritage_History_Super_Swede_book_Karl_Erik_Hagstroem_and_Mikael_Jansson.jpg';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroBackground = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${Heritage_historic_hagstrom_guitars});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  @media (max-width: 800px) {
    height: 200px;
  }
`;

const IntroTitle = styled.h1`
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  font-style: italic;
  font-weight: bold;
  font-size: 5vmin;
  line-height: 80%;
  font-family: 'Bitter', serif;
  @media (max-width: 800px) {
    font-size: 7vmin;
  }
  @media (max-width: 350px) {
    font-size: 9vmin;
  }
`;

const MainContentWrapper = styled.div`
  max-width: 1170px;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const FirstHeader = styled.h2`
  max-width: 1140px;
  display: flex;
  flex-direction: row;
  font-size: 3.4vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-bottom: 2rem;
  @media (max-width: 1200px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 800px) {
    font-size: 5vmin;
  }
  @media (max-width: 350px) {
    font-size: 7vmin;
  }
`;

const LeftContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 800px) {
    border: none;
  }
`;

const RightContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 800px) {
    border: none;
  }
`;

const MediaTitle = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 3vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-size: 5vmin;
  }
  @media (max-width: 350px) {
    font-size: 7vmin;
  }
`;

const Paragraph = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  padding: 0 0 2vmin;
  a {
    color: #9b0600;
  }
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 550px) {
    font-size: 4vmin;
  }
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Figcaption = styled.figcaption`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  line-height: 2.2vmin;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-size: 2vmin;
  }
  @media (max-width: 550px) {
    font-size: 2vmin;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: top;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const LogoSpan = styled.span`
  width: 3em;
  height: 3em;
  display: block;
  float: left;
  opacity: 0.3;
`;

const Heritage = () => {
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroTitle>HAGSTROM HISTORY</IntroTitle>
        </IntroBackground>
        <FirstHeader>
          In 1958, Swedish-based Hagstrom started manufacturing electric guitars
          and basses.
        </FirstHeader>
        <MainContentWrapper>
          <LeftContentWrapper>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              Established in the 1925 as a manufacturer of accordions, Hagstrom
              also has a long history of building guitars. Production of
              acoustic steel string and classical guitars dates back as early as
              the 1940‘s. In 1958, the first Hagstrom electric guitars were
              built. Covered in sparkle and pearloid celluloid with stamped
              metal logos, they featured an ingenious use of materials
              previously used in their accordion production. Over time
              Hagstrom’s range of instruments expanded into classic designs such
              as semi-acoustic and jazz models (“Viking®” and “Jimmy”),
              solid-bodies (“Swede” and “Super Swede”), and electric basses. The
              world’s first 8-string bass, the “H8”, was introduced, and became
              an instant success. Hagstrom guitars became known world-wide for
              their professional quality, excellent playability, unique
              features, and great value.{<br />} {''}
              {<br />}We have gone to great lengths to re-create the modern
              Hagstrom range using original designs and production techniques.
              Our manufacturing team searches the world to find the best raw
              materials and hardware, and then supplies our manufacturing
              partners with the detailed specifications and guidance necessary
              to authentically re-create Hagstrom’s classic models. Hagstrom’s
              unique H-Expander™ truss-rod, bridge and tailpiece designs, and
              other cosmetic features such as logos and headstock designs are
              all authentically re-created, and based on original specifications
              and drawings. Our pickups are custom-wound and carefully based
              upon original designs and voicings.
            </Paragraph>
            <MediaTitle>Rich Heritage & Modern Features</MediaTitle>
            <Paragraph>
              Hagstrom’s tradition of innovation continues with careful
              introduction of more modern features and design enhancements,
              without compromise to our traditions. For example, fingerboards
              are now made of our unique Resinator™ wood, with resonance and
              sustain qualities far superior to anything ebony or rosewood can
              offer. Original tuning key designs have been slightly updated to
              make them easier to use, and electronics controls have been
              enhanced where appropriate to appeal to modern playing techniques.
              We’ve also expanded the range by introducing the Ultralux and
              Northen Series to meet the needs of modern players. Every step of
              the way we have strived to deliver the same exceptional
              performance at surprising value, which is the historical
              foundation of Hagstrom’s reputation.
            </Paragraph>
            <Image
              src={Heritage_historic_hagstrom_guitars}
              alt=''
              style={{ marginBottom: '2rem' }}
            />
            <MediaTitle>Playing Comfort and Tonal Versatility</MediaTitle>
            <Paragraph>
              When you purchase a Hagstrom guitar, you can be confident your
              investment will provide you an authentic piece of Hagstrom’s
              history, and will become a life-long musical and artistic
              companion.{<br />} {''} {<br />} The minute you lay your hands on
              a Hagstrom and strum it for the first time, you can instantly feel
              why Hagstrom has legions of devoted fans and why so many pro
              musicians have made it their “number one”. Hagstrom’s unmistakable
              headstock is iconic. Hagstrom guitars are also known for their
              playing comfort and tonal versatility, the result of design
              innovations such as our aerospace engineered H-Expander™ truss
              rod, Resinator™ fingerboard, custom wound pickups, and unique
              hardware. All of these features contribute to Hagstrom’s distinct
              and unmatched sound, which has jumpstarted many careers around the
              world. Now fasten your seatbelts and let us take you on a ride to
              explore the Hagstrom range. You’re about to discover a dazzling
              assortment of electric guitars, electric basses and acoustics that
              will whet your appetite to travel to your nearest dealer and try
              one out today. Enjoy!
            </Paragraph>
            <Image
              src={Heritage_History_Super_Swede_book}
              alt=''
              style={{ marginBottom: '2rem' }}
            />
            <MediaTitle>
              Super Swede DeLuxe: The Hagstrom Guitar History So Far
            </MediaTitle>
            <Paragraph>
              This great book tells the history of Hagstrom electric and
              acoustic guitars, made by a Swedish innovative company founded in
              the 1920s by a young entrepreneur, Albin Hagström (1905–1952),
              first as a maker and distributor of accordions. As musical tastes
              moved from “squeezeboxes” to rock’n’roll guitars, Hagstrom made
              the move along the changes in music. The result is more than a
              quarter of a million guitars made from 1947 to present, used by
              beginners and amateurs as well as renowned professionals in jazz,
              rock, folk, country – all genres you can think of. Among the
              artists playing Hagström guitars are Frank Zappa, David Bowie,
              John Lennon, and Elvis Presley, and groups such as (of course)
              ABBA and Blue Swede, Nirvana, The Eagles, Foo Fighters, and
              Genesis. And in spite of the company’s location in a small village
              near the mountain districts of Sweden, an innovative in-house
              staff built state-of-the-art instruments and invented cutting edge
              novelties such as guitar synthesizers and stereo PA systems.
              {<br />}
              {
                <b>Super Swede DeLuxe: The Hagstrom Guitar History So Far</b>
              }{' '}
              focuses on Hagstrom’s guitar production. 213 pages, richly
              illustrated. Language: English.{<br />} {''} {<br />}{' '}
              {<b>Super Swede DeLuxe: The Hagstrom Guitar History So Far</b>} by
              Swedish author and musician Mikael Jansson can be ordered
              internationally through{' '}
              {
                <a
                  href='https://www.bookdepository.com/Super-Swede-DeLuxe-Hagstr%C3%B6m-Guitar-History-So-Far-Jansson-Mikael/9789188725820?ref=grid-view&qid=1613147656473&sr=1-1'
                  target='_blank'
                  rel='noopener noreferrer'>
                  The Book Depository
                </a>
              }{' '}
              where Swedish visitors can purchase the book through{' '}
              {
                <a
                  href='https://www.bokus.com/bok/9789188725820/super-swede-deluxe-the-hagstrom-guitar-history-so-far/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Bokus
                </a>
              }
              .
            </Paragraph>
            <Figure>
              <Image
                src={
                  Heritage_History_Super_Swede_book_Karl_Erik_Hagstroem_and_Mikael_Jansson
                }
                alt=''
              />
              <Figcaption>
                Karl-Erik Hagström and Mikael Jansson from the book release in
                September 2020
              </Figcaption>
            </Figure>
          </LeftContentWrapper>
          <RightContentWrapper>
            <Figure>
              <Image src={Heritage_Frankfurtmaessan} alt='' />
              <Figcaption>
                Frankfurt Musik Messe, 1961. Karl Erik Hagstrom and head of
                sales Roland Beronius display Hagstrom and Bjärton guitars.
              </Figcaption>
            </Figure>
            <Figure>
              <Image src={Heritage_butikdrottninggatan} alt='' />
              <Figcaption>Hagstrom Store Drottninggatan Stockholm</Figcaption>
            </Figure>
            <Figure>
              <Image src={Heritage_Sven_Ingvars} alt='' />
              <Figcaption>Sven-Ingvars</Figcaption>
            </Figure>
            <Figure>
              <Image src={Heritage_Hagstrom_58_Adv_ny} alt='' />
              <Figcaption>
                Advertising from 1958 with a Hagstrom Deluxe
              </Figcaption>
            </Figure>
          </RightContentWrapper>
        </MainContentWrapper>
      </Wrapper>
    </>
  );
};

export default Heritage;
