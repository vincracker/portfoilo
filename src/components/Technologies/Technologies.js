import React from 'react';
import { DiFirebase, DiReact, DiSass,DiGo, DiRust,DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main> Technologies </SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web3.0 development world
      Blockchain based Decentralized Application
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js, Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGo size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Golang, Node.js, AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Smart Contract</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Solidity and Rust
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
