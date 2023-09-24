import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="experience-date">{experience.date}</h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="experience-logo">
        <img
          src={experience.icon}
          alt={experience.company_name}
        />
      </div>
    }
  >
    <div>
      <h3 className="experience-position">
        {experience.title}
      </h3>
      <p
        className="experience-company_name"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExperienceCard;
