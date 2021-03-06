import styled from 'styled-components';
import { media } from '../../bosons/media';

export const ProjectContainer = styled.main`
  display: block;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const ProjectTitle = styled.h1`
  font-family: 'Roboto Slab',sans-serif;
  font-weight: 400;
  font-size: 36px;
  text-align: right;
  margin-top: 0;
  margin-bottom: -70px;
  margin-right: 180px;
  opacity: 0.7;

  ${media.mobile`
    font-size: 40px;
    text-align: center;
    margin-right: 0;
    margin-bottom: 0;
  `}
`;

export const ProjectDesc = styled.div`
  font-family: 'Roboto Slab',sans-serif; 
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 2;
  margin-left: 100px;
  margin-bottom: 0;
  margin-top: 0;
  margin-right: 100px;
  text-align: left;

  ${media.mobile`
    font-size: 16px;
    line-height: 2;
    text-align: left;
    margin: 0 20px;
  `}
`;

export const ProjectImage = styled.img`
  display: block;
  max-width: 100%;
  margin: 10vh auto;
  height: 80vh;

  ${media.mobile`
    margin: 40px auto;
    height: auto;
  `}
`;

export const ProjectVideo = styled.div`
  position: relative;
  margin-top: 90px;
  margin-bottom: 20px;

  iframe{
    position: relative;
    width: 100%;
    height: 67vh;
  }
`;