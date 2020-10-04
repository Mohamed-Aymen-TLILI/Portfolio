import styled from "styled-components";

export const GridLayout = styled.div`
         display: grid;
         min-height: 100vh;
         grid: "picture header" auto "aside main" 1fr "footer footer" auto / 350px auto;
         @media screen and (max-width: 750px) {
           display: grid;
           grid: "header" auto "main" auto "picture" auto "aside" auto "footer" auto / auto;
         }
       `;

export const Header = styled.section`
         grid-area: header;
         background: linear-gradient(to right, #2071e7, #00c3ff);
         padding: 10rem 5rem;
         text-align: center;
         color: white;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
       
         }
       `;

export const Headerh1 = styled.h1`
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 300;
    letter-spacing: 0.5rem;
`

export const Headerp = styled.p`
         letter-spacing: 0.2rem;
         font-size: 2rem;
       `;
export const headers = styled.span`
display: inline-block;
    animation: bounce 2s;
    `;


export const Picture = styled.div`
         grid-area: picture;
         padding: 6rem;
         background: #fafafa;
         border-right: 1px solid #ddd;
       `;


export const Pictureimg = styled.img`
         width: 100%;
         border-radius: 50%;
       `;

export const AsideLeft = styled.aside`
         grid-area: aside;
         background: #fafafa;
         border-right: 1px solid #ddd;
         padding: 1rem 0rem 0rem 6rem;
       `;

export const AsideBlock = styled.div`
         margin-bottom: 1rem;
       `;
export const AsideBlockh3 = styled.h3`
         margin-bottom: 0;
         font-size: 1.4rem;
       `;
export const AsideBlockh3p = styled.div`
         margin: 14px 0 0rem 0;
         font-style: italic;
       `;
export const AsideBlockbarskill = styled.div`
         height: 5px;
         background: #999;
         position: relative;
       `;
 export const AsideBlockbarskillprogress = styled.div`
          position: absolute;
          height: 5px;
          top: 0;
          left: 0;
          width: 80%;
          background: #00c3ff;
        `;
export const AsideBlockbarskillprogress2 = styled.div`
  position: absolute;
  height: 5px;
  top: 0;
  left: 0;
  width: 60%;
  background: #00c3ff;
`;

export const AsideBlockbarskilldot = styled.div`
         position: absolute;
         height: 10px;
         width: 10px;
         background: #2980b9;
         left: calc(80% - 5px);
         top: -2.5px;
         transform: rotate(45deg);
       `;

export const AsideBlockbarskilldot2 = styled.div`
  position: absolute;
  height: 10px;
  width: 10px;
  background: #2980b9;
  left: calc(60% - 5px);
  top: -2.5px;
  transform: rotate(45deg);
`;
export const AsideBlockstarh3 = styled.div`
  margin: 14px 0 0rem 0;
  font-style: italic;
`;
export const AsideBlockstars = styled.p`
         display: flex;
         margin: 2rem 0 3rem 0;
         color: #999;
       `;

export const AsideBlockstarsi = styled.i`
         font-size: 2rem;
         margin: 0 1rem;
       `;

export const AsideBlocksocial = styled.div`
         display: flex;
         justify-content: start;
         align-items: center;
         padding: 1rem 1rem;
         border-radius: 5px;
         transition: all 0.2s;
         cursor: pointer;

         &:hover {
           background: #ddd;
         }
       `;

export const AsideBlocksociali = styled.i`
         font-size: 2rem;
         flex: 0 0 50px;
         margin-right: 1rem;
         &:hover {
           color: #2071e7;
           transform: scale(1.3);
           transition: all 0.2s;
         }
       `;

export const AsideBlocksocialp = styled.p`
         flex: auto;
         margin: 0;
       `;

export const Main = styled.main`
         grid-area: main;
         padding: 5rem;
       `;
export const Mainh2 = styled.h2`
margin-bottom: 4rem;
`;
       
export const Mainp = styled.div`
         letter-spacing: 0.1rem;
         line-height: 3rem;
       `;

export const Mainexperience = styled.div`
         display: flex;
         margin: 3rem 0;
       `;
export const Mainexperiencetimeline = styled.div`
         text-align: center;
         color: #999;
         padding-right: 2rem;
         border-right: 1px solid #ddd;
       `;

export const Mainexperiencetimelinep = styled.div`
margin: 0; `;
export const Mainexperiencecontent = styled.div`
padding: 0 1rem;`;
export const Mainexperiencecontenth3 = styled.h3`
margin: 0;`;
export const Mainexperiencecontentp = styled.div`
         margin: 0;
       `;
export const Mainexperiencecontentul = styled.ul`
         margin: 2rem 0;
         list-style: circle;
         padding-left: 4rem;
       `;

       export const Footer = styled.footer`
                grid-area: footer;
                display: flex;
                flex-direction: column;
                text-align: center;
                justify-content: center;
                align-items: center;
                color: white;
                padding: 5rem;
                background: #333;
              `;

    export const Footerh2 = styled.h2`
             margin-bottom: 3rem;
           `;