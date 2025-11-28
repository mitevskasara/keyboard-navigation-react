import IncorrectOrder from './IncorrectElementOrder/Incorrect';
import CorrectOrder from './IncorrectElementOrder/Correct';
import IncorrectFocus from './FocusLost/Incorrect';
import CorrectFocus from './FocusLost/Correct';
import AriaAttibutes from './AriaAttributes';

function App() {
  return (
    <>
      <h1>Common Keyboard Accessibility Pitfalls</h1>
      <h2>Incorrect Order</h2>
      <IncorrectOrder />
      <h2>Correct Order</h2>
      <CorrectOrder />
      <h1>Focus Loss / Escape Issues</h1>
      <h2>Incorrect Focus</h2>
      <IncorrectFocus />
      <h2>Correct Focus</h2>
      <CorrectFocus />
      <h2>Most common ARIA attributes</h2>
      <AriaAttibutes />
    </>
  );
}

export default App;
