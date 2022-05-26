import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main> projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,description,tags,source,visit})=>(
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            {/* The title need to be improved! */}
            <TitleContent> 
              Stack
            </TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>
                  {tag}
                </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {/*Button ugly, need to improved!*/}
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Srouce</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;