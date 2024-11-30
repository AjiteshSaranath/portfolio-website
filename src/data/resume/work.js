/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Infiquity Auto Technologies Pvt Ltd',
    position: 'Software Engineer',
    url: 'https://www.infiquity.com/',
    startDate: '2023-12-05',
    summary: 'Infiquity is an established IT services company which is powered by a team of seasoned professionals and driven by its proven track record in providing consultants with experience in some of the most advanced technologies.',
    highlights: [
      'Engineered the backend infrastructure for an Electric Vehicle Charger Management System (EV-CMS) using Node.js, Express, MongoDB, PostgreSQL, and SQLite3, ensuring robust and scalable solutions.',

      'Authored and optimized server-side code for multiple TCP servers, effectively integrating IoT devices such as Chargers, Telematics, and TestBench systems, and enabling seamless data storage across various database platforms',

      'Spearheaded research and development efforts for the implementation of the OCPP 1.6J (Open Charge Point Protocol), leading to the successful deployment of server-side solutions for managing EV chargers.',

      'Implemented and optimized Jenkins pipelines across multiple projects to automate the Continuous Integration/Continuous Deployment (CI/CD) process, significantly improving deployment efficiency from GitHub repositories.',

      'Led the creation and configuration of Google Cloud Platform (GCP) instances, enabling the deployment of CI/CD pipelines and backend services within a microservices architecture, thereby ensuring flexibility, scalability, and efficient resource management.',
    ],
  },
  {
    name: 'KONE Elevator',
    position: 'Software Engineering Intern',
    url: 'https://www.kone.in/',
    startDate: '2022-05-01',
    endDate: '2022-07-01',
    summary: 'At KONE, our mission is to improve the flow of urban life. We understand People Flow in and between buildings, making people’s journeys safe, convenient and reliable. In 2020, KONE had annual sales of EUR 9.9 billion, and at the end of the year over 60,000 employees.',
    highlights: [
      'Interned at KONE Elevator during Summer 2022, gaining practical experience with AWS.',
      'Optimized code by tweaking multiple Python programs within AWS Lambda, improving efficiency.',
      'Efficiently hosted websites and pages using EC2 and ECS, streamlining deployment with AWS CDK.',
      'Built a website from scratch using Bootstrap v4.0.',
    ],
  },
];

export default work;
