const c = {
  ATOMS: 'Moving Atoms',
  BITS: 'Moving Bits',
  LANG: 'Languages',
  PYTHON: 'Python',
  TOOLS: 'Tools',
  ME: 'Mechanical Engineering',
  DATA: 'Data Analysis',
};

const skills = [
  {
    title: 'Metal Shop',
    competency: 4,
    category: [c.ME, c.ATOMS],
  },
  {
    title: 'Wood Shop',
    competency: 4,
    category: [c.ME, c.ATOMS],
  },
  {
    title: 'Optics',
    competency: 3,
    category: [c.ATOMS],
  },
  {
    title: 'CAD',
    competency: 3,
    category: [c.ME, c.BITS],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: [c.LANG, c.BITS],
  },
  {
    title: 'Bash',
    competency: 4,
    category: [c.TOOLS, c.LANG, c.BITS],
  },
  {
    title: 'AWS',
    competency: 3,
    category: [c.TOOLS, c.BITS],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: [c.DATA, c.PYTHON, c.BITS],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: [c.DATA, c.TOOLS, c.BITS],
  },
  {
    title: 'Typescript',
    competency: 4,
    category: [c.LANG, c.BITS],
  },
  {
    title: 'Python',
    competency: 5,
    category: [c.LANG, c.BITS],
  },
  {
    title: 'C++',
    competency: 4,
    category: [c.LANG, c.BITS],
  },
  {
    title: 'Julia',
    competency: 5,
    category: [c.LANG, c.BITS],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: [c.DATA, c.PYTHON, c.BITS],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: [c.DATA, c.PYTHON, c.BITS],
  },
];

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = Object.values(c).map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
