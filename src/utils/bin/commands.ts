// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import axios from 'axios';
import contact from './contact';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome, visitor! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'contact' to contact details.
`;
};

// About
export const about = contact;

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const dblp = async (args: string[]): Promise<string> => {
  window.open(`https://dblp.org/pid/${config.social.dblp}.html`);

  return 'Opening DBLP...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  const json = await axios.get('https://api.ipify.org?format=json');
  return `Permission denied\n\nDear ` + json.data.ip + `,\n with little power comes... no responsibility?`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
                      Dimitar Garkov
                      ==============

          University of Konstanz
          Department of Computer and Information Science
          Room: PZ 1005 | Phone: +49 (0)7531 88 4657
          Mail: dimitar.garkov@uni-konstanz.de


          Research Interests
          ------------------
          - Immersive Analytics
          - Collaboration in Immersive Environments
          - Research Data Management and Curation
          - Visualisation and Quantification of Brain Structure
          - Network Visualisation and Analysis

          Teaching and Responsibilities
          -----------------------------
          WT 23/24    Unity Crash Course
          ST 23       Analysis and Exploration of Metabolic Networks (Tutorial)
          ST 23       Realization of an Exhibition
          ST 23       Interactive Media Development for Exhibitions
          ST 23       Seminar Life Science Informatics
          WT 22/23    Unity Crash Course
          WT 22/23    Petri Nets and Applications in the Life Sciences (Exercises)
             21/22    Doctoral co-speaker of SFB/Transregio 161
          WT 21/22    Petri Nets (Exercises)
          WT 20/21    Immersive Analytics (Exercises)
          WT 20/21    Network Visualisation (Exercises)
          ST 20       Petri Nets (Exercises)
          WT 19/20    Network Visualisation (Exercises)

          Selected Publications
          ---------------------
          D. Garkov, C. Müller, M. Braun, D. Weiskopf, F. Schreiber:
          "<a href="https://doi.org/10.1109/BELIV57783.2022.00011"><u>Research Data Curation in Visualization : Position Paper</u></a>", BELIV, 2022. [<a href="https://doi.org/10.18419/darus-3144"><u>Data</u></a>]

          D. Bienroth, H. Nim, D.Garkov, K. Klein, S. Jaeger-Honz, M. Ramialison, F. Schreiber:
          "<a href="https://doi.org/10.1186/s42492-021-00098-6"><u>Spatially resolved Transcriptomics in Immersive Environments</u></a>", Vis. Comput. Ind. Biomed., 2022.

          K. Klein, D. Garkov, S. Rütschlin, T. Böttcher, F. Schreiber:
          "<a href="https://doi.org/10.1093/database/baab058"><u>QSDB - a graphical Quorum Sensing Database</u></a>", Database, 2021. [<a href="https://doi.org/10.18419/darus-3242"><u>Data</u></a>]

          D. Garkov, E. Lein, C. Dullin, K. Klein, A. Jordan, F. Schreiber, B. Sommer:
          "Towards an Immersive Analytics Application for Anatomical Fish Brain Data", BioVis, 2020 (poster).

          D. Garkov, K. Klein, C. Klukas, F. Schreiber:
          "<a href="https://doi.org/10.1515/jib-2019-0026"><u>Mental-Map Preserving Visualisation of Partitioned Networks in Vanted</u></a>", J. Integr. Bioinform., 2019.


Type 'help' to list available commands.
`;
};
