import './App.css';
import Button from './Button';
import DemoMenu from './DemoMenu';
import AccordionSection from './AccordionSection.jsx';
import ModalDialog from './ModalDialog.jsx';
function App() {
  return (
    <div className="app">
      <Button visual="link" type="button">Click me!</Button>
      <Button visual="button" type="button">Click me!</Button> 
      <DemoMenu/>
      <AccordionSection title="Are Cats Nocturnal" text_content="123131">
      </AccordionSection>
      <AccordionSection title="When did Cats become domesticated" text_content="12131">
      </AccordionSection>
      <ModalDialog/>
    </div>
  );
}

export default App;
