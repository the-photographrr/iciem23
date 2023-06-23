import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './ICIEM23Website.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 2:3 */
export const ICIEM23Website: FC<Props> = memo(function ICIEM23Website(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.flowLines}></div>
      <div className={classes.nsscePhoto}></div>
      <div className={classes.frame1}>
        <div className={classes.about}><a href="#about" >About</a></div>
        <div className={classes.register}><a href="#register" >Register</a></div>
        <div className={classes.event}><a href="event" >Event</a></div>
        <div className={classes.contact}><a href="#contact" >Contact</a></div>
      </div>
      <div className={classes.iNTERNATIONALCONFERENCEONINNOV}>
        <div className={classes.textBlock}>INTERNATIONAL</div>
        <div className={classes.textBlock2}>CONFERENCE ON INNOVATIONS IN ENGINEERING AND MANAGEMENT</div>
      </div>
      <div className={classes.july2122}>July 21 - 22</div>
      <div className={classes.nSSCollegeOfEngineeringAKATHET}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>NSS College of Engineering A</span>
          <span className={classes.label2}>KATHETHARA </span>
          <span className={classes.label3}>, Palakkad</span>
        </p>
      </div>
      <div className={classes.frame2}>
        <div className={classes.nSSCELogo}></div>
        <div className={classes.nBALogo}></div>
      </div>
      <div className={classes.departmentOfMechanicalEngineer}>Department of Mechanical Engineering </div>
      <div className={classes.iciemLogo}></div>
      <div className={classes.iciemLogo2}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.thermalScienceAndDesignEnginee}>Thermal Science and Design Engineering</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.structuralEngineering}>Structural Engineering</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.materialsAndManufacturingEngin}>Materials and Manufacturing Engineering</div>
      <div className={classes.rectangle12}></div>
      <div className={classes.roboticsAndAutomation}>Robotics and Automation</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.controlSystemsAndMechatronics}>Control Systems and Mechatronics</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.greenAndSustainableEngineering}>Green and sustainable Engineering</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.industrialEngineeringAndManage}>Industrial Engineering and Management</div>
      <div className={classes.rectangle9}></div>
      <div className={classes.mechanicalDesignAndAnalysis}>Mechanical Design and Analysis</div>
      <div className={classes.rectangle10}></div>
      <div className={classes.artificialIntelligenceAndMachi}>Artificial Intelligence and Machine Learning</div>
      <div className={classes.rectangle18}></div>
      <div className={classes.dataScience}>Data science</div>
      <div className={classes.rectangle17}></div>
      <div className={classes.biomedicalApplications}>Biomedical Applications</div>
      <div className={classes.rectangle11}></div>
      <div className={classes.automobileEngineering}>Automobile Engineering</div>
      <div className={classes.rectangle19}></div>
      <div className={classes.electronicCooling}>Electronic Cooling</div>
      <div className={classes.scopeOfConference}>Scope of Conference</div>
      <div className={classes.rectangle}></div>
      <div className={classes.flowLines2}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.aboutTheDepartment}>About the Department</div>
      <div className={classes.theDepartmentOfMechanicalEngin}>
        The department of Mechanical engineering was started in 1960 and is the largest department of the institution.
        The department has highly committed faculty comprising of 18 Ph.D. holders from IIT/IISC/NIT/Reputed
        universities. The department is offering UG,PG and Doctoral programmes in mechanical engineering. Well equipped
        laboratories and other infrastructure make the department to be the most sought after one in the state of
        Kerala.
      </div>
      <div className={classes.rectangle13}></div>
      <div className={classes.aboutTheInstitution}  id='about'>About the Institution</div>
      <div className={classes.nSSCollegeOfEngineeringPalakka}>
        NSS College of Engineering, Palakkad, one of the oldest engineering educational institutions in Kerala, India,
        was founded in 1960 by Nair Service Society under the leadership of the late Bharatha Kesari Mannathu
        Padmanabhan, during the second five-year plan with the assistance of the Central and State Governments under the
        Grant-in-Aid Scheme. The college is now affiliated to the APJ Abdul Kalam Technological University, Kerala,
        offering six B.Tech Programs (Civil Engineering, Mechanical Engineering, Electrical and Electronics Engineering,
        Instrumentation and Control Engineering, Electronics and Communication Engineering and Computer Science
        Engineering) and five M. Tech Programs. Campus is located at Akathethara (9km from Palakkad town), spread over
        125 acres. College is well connected by road, rail and air to all national and international destinations.
      </div>
      <div className={classes.rectangle23}></div>
      <div className={classes.nssceLogo}></div>
      <div className={classes.rectangle32}></div>
      <div className={classes.mrDKBanwetFormerProfessorDeptO}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock3}>
              Mr. D.K. Banwet, Former Professor, Dept. of Management Studies, IIT Delhi.
            </div>
          </li>
          <li>
            <div className={classes.textBlock4}>
              Dr. S.R Devadasan, Professor, PSG College of Technology, Coimbatore.
            </div>
          </li>
          <li>
            <div className={classes.textBlock5}>
              Dr. C. Sujatha, Former Professor, Dept. of Mechanical Engineering, IIT Madras.
            </div>
          </li>
          <li>
            <div className={classes.textBlock6}>
              Dr. Jyothi S.N, Principal, Amrita Vishwa Vidyapeetham, Amritapuri Campus.
            </div>
          </li>
          <li>
            <div className={classes.textBlock7}>
              Dr. Shalij P.R, Dean(Research), APJ Abdul Kalam Technological University, Kerala State.
            </div>
          </li>
          <li>
            <div className={classes.textBlock8}>
              Dr. Jagathy Raj V. P, Director, School of Management Studies, Cochin University of Science and Technology,
              Kochi.
            </div>
          </li>
          <li>
            <div className={classes.textBlock9}>
              Mr. K. Abdul Samad, Retired Unit Head, Malabar Cements, Cherthala.{' '}
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.rectangle29}></div>
      <div className={classes.pATRONSriGSukumaranNairChairma}>
        <div className={classes.textBlock10}>PATRON </div>
        <div className={classes.textBlock11}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label4}>Sri, G Sukumaran Nair</span>
          </p>
        </div>
        <div className={classes.textBlock12}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label5}>Chairman, Governing Body</span>
          </p>
        </div>
        <div className={classes.textBlock13}>NSSCE</div>
      </div>
      <div className={classes.oRGANISINGCHAIRMANDrNRajeevHoD}>
        <div className={classes.textBlock14}>ORGANISING CHAIRMAN</div>
        <div className={classes.textBlock15}>
          <p className={classes.labelWrapper4}>
            <span className={classes.label6}>Dr. N Rajeev</span>
          </p>
        </div>
        <div className={classes.textBlock16}>
          <p className={classes.labelWrapper5}>
            <span className={classes.label7}>HoD</span>
          </p>
        </div>
        <div className={classes.textBlock17}>Department of Mechanical Engineering</div>
      </div>
      <div className={classes.cHAIRMANDrPRSureshPrincipalNSS}>
        <div className={classes.textBlock18}>CHAIRMAN</div>
        <div className={classes.textBlock19}>
          <p className={classes.labelWrapper6}>
            <span className={classes.label8}>Dr. P. R Suresh</span>
          </p>
        </div>
        <div className={classes.textBlock20}>
          <p className={classes.labelWrapper7}>
            <span className={classes.label9}>Principal</span>
          </p>
        </div>
        <div className={classes.textBlock21}>NSSCE </div>
      </div>
      <div className={classes.advisoryCommittee}>Advisory Committee</div>
      <div className={classes.invitedTalks}>Invited Talks</div>
      <div className={classes.mrRRadhakrishnanAGMInstrumenta}>
        <ul className={classes.list2}>
          <li>
            <div className={classes.textBlock22}>Mr. R. Radhakrishnan, AGM, Instrumentation Limited, Palakkad.</div>
          </li>
          <li>
            <div className={classes.textBlock23}>Rekha Sharma, Operations Director, GRIP Global.</div>
          </li>
          <li>
            <div className={classes.textBlock24}>
              Dr. V.R. Pramod, Professor, Dept. of Mechanical Engineering, NSS College of Engineering, Palakkad.
            </div>
          </li>
          <li>
            <div className={classes.textBlock25}>
              Dr. Majeed Mohamed, Senior Principal Scientist, National Aerospace Laboratories, Ministry of Science and
              Technology, Govt. of India. 1
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.rectangle33}></div>
      <div className={classes.flowLines3}></div>
      <div className={classes.registrationDetails}  id='register'>Registration Details</div>
      <div className={classes.rectangle20}></div>
      <div className={classes.importantDatesFinalManuscriptS}>
        <div className={classes.textBlock26}>Important Dates</div>
        <div className={classes.textBlock27}>
          <p></p>
        </div>
        <div className={classes.textBlock28}>
          <p className={classes.labelWrapper8}>
            <span className={classes.label10}>Final Manuscript Submission - June 30th</span>
          </p>
        </div>
        <div className={classes.textBlock29}>
          <p className={classes.labelWrapper9}>
            <span className={classes.label11}>Intimation of Acceptance - July 6th</span>
          </p>
        </div>
        <div className={classes.textBlock30}> Final Date for fee Submission - July 8</div>
      </div>
      <div className={classes.atLeastOneAuthorShouldRegister}>
        At least one author should register for the conference and present the paper. Participation certificates and
        conference kit comprising of proceedings will be issued only to the registered delegates.
      </div>
      <div className={classes.PublicationFeesExtraSelectedPa}>
        (Publication Fees Extra) Selected Papers will be published in Scopus Indexed Journal.
      </div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle21}></div>
      <div className={classes.studentsRs1000}>
        <div className={classes.textBlock31}>Students </div>
        <div className={classes.textBlock32}>Rs.1000</div>
      </div>
      <div className={classes.pHDResearchScholarsRs1200}>
        <div className={classes.textBlock33}>PHD Research Scholars </div>
        <div className={classes.textBlock34}>Rs.1200</div>
      </div>
      <div className={classes.industryRs1500}>
        <div className={classes.textBlock35}>Industry</div>
        <div className={classes.textBlock36}>Rs.1500</div>
      </div>
      <div className={classes.coAuthorsRs500}>
        <div className={classes.textBlock37}>Co-Authors </div>
        <div className={classes.textBlock38}>Rs.500</div>
      </div>
      <div className={classes.rectangle24}></div>
      <div className={classes.sai917994722164Sharan917012229}>
        <div className={classes.textBlock39}>Sai : +91-7994722164</div>
        <div className={classes.textBlock40}>Sharan : +91-7012229439 Hari : +91-8848988088</div>
      </div>
      <div className={classes.forAnyQueries}>For any queries :</div>
      <div className={classes.iciem23NssceAcIn}>iciem23@nssce.ac.in</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon2} />
      </div>
      <div className={classes.coordinatorsDrVRPramod91949512}>
        <div className={classes.textBlock41}>Coordinators:</div>
        <div className={classes.textBlock42}>
          <p className={classes.labelWrapper10}>
            <span className={classes.label12}>Dr. V R Pramod : +91- 9495120609</span>
          </p>
        </div>
        <div className={classes.textBlock43}>
          <p className={classes.labelWrapper11}>
            <span className={classes.label13}>Professor, Department of Mechanical Engineering, </span>
          </p>
        </div>
        <div className={classes.textBlock44}>Dr. B Rajesh Menon : +91-9496466899</div>
        <div className={classes.textBlock45}>Associate Professor, Department of Mechanical Engineering, </div>
        <div className={classes.textBlock46}>Dr. K R Kiron : +91- 9496329746</div>
        <div className={classes.textBlock47}>Associate Professor, Department of Mechanical Engineering</div>
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon3} />
      </div>
      <div className={classes.howToReach}  id='contact'>How to Reach?</div>
      <div className={classes.rectangle28}></div>
      <div className={classes.nearestRailwayStationIsPalakka}>
        Nearest railway station is Palakkad Junction (PGT) which is 4 kms away from the campus. Palakkad is well
        connected by buses from all major south Indian cities. Nearest Airport is Coimbatore (55 Kms).Taxi fare from
        Railway station to campus is around 200INR
      </div>
    </div>
  );
});
