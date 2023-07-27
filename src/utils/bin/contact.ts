import config from '../../../config.json';

const contact = async (args: string[]): Promise<string> => {
  if (config.ascii === 'funny face') {
    return `
             @@@@@@@@@@@@@
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@        @@@              @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@                                   @@     -----------
@@             .@@@@@@@@@@.          @@      CONTACT
 @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@           @@        @@        @@        <u><a href="https://dblp.org/${config.social.dblp}.html" target="_blank">dblp.org/pid/${config.social.dblp}.html</a></u>
   @@             @@@@@@          @@         <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@
         @|  @@@@@@@@@@@@@@@@   @@
         @|                      @@

`;
  }
  else if (config.ascii === 'clean') {
    return `

-----------
 ABOUT
 ${config.name}
ﰩ ${config.ps1_hostname}
 <u><a href="${config.resume_url}" target="_blank">resume</a></u>
-----------
 CONTACT
 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://dblp.org/${config.social.dblp}.html" target="_blank">dblp.org/pid/${config.social.dblp}.html</a></u>
 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
-----------

`;
  }
  else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄ 
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓                                 ▐▓       -----------
▐▓        > _                      ▐▓        CONTACT
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://dblp.org/${config.social.dblp}.html" target="_blank">dblp.org/pid/${config.social.dblp}.html</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀ 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀ 
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀ 

`;
  }
};
export default contact;
