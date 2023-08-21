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
  // {
  //   name: 'Skeptical Investments',
  //   position: 'Co-founder',
  //   url: 'http://skepticalinvestments.biz',
  //   startDate: '2017-04-01',
  //   summary: `Skeptical Investments is a micro-vc fund focused on Angel, Seed, and Series-A
  //   YC companies.`,
  //   highlights: [
  //     'Created the InstaSafe. Fast, automated investment docs for YC companies.',
  //     'Advise several startups in the fund.',
  //   ],
  // {,
];

export default work;
