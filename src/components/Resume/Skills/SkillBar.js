import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories, actCat }) => {
  const { category, competency, title } = data;

  const diffCat = category.filter((c) => c !== actCat)[0];
  const { color } = categories.find((c) => c.name === diffCat);

  const titleStyle = {
    background: color,
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
  };

  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}><span>{title}</span></div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
  actCat: PropTypes.string,
};

SkillBar.defaultProps = {
  categories: [],
  actCat: null,
};

export default SkillBar;
