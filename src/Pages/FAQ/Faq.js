import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadFoot from '../../component/HeadFoot';
import "./faq.scss"
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <HeadFoot pageTitle="FAQ" description="medpau international Limited Frequently Asked Questions">
    <div className='faq'>
      <h2>Frequently Asked Questions</h2> 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography> */}
          <Typography sx={{  }}>Do you deliver to states outside Lagos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we do nationwide deliveries
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography> */}
          <Typography sx={{  }}>
          Do you have engineers in the north?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Medpau has engineers stationed across the 6 geopolitical zones 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          {/* <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Can a neighboring African country buy from  Medpau?
          </Typography> */}
          <Typography sx={{  }}>
          Can a neighboring African country buy from  Medpau?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. Medpau is an international brand that has made its mark in other African countries through our affordable solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{  }}>Do you offer consultation and management services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We have discussed the secret to a profitable healthcare business and we are always glad to share this secret to other healthcare businesses.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{  }}> Are our prices pocket friendly?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! We pride ourselves on being fully committed to promoting access to affordable healthcare solutions
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </HeadFoot>
  );
}