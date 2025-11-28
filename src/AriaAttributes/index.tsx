const AriaAttibutes = () => {
  return (
    <table className="aria-table">
      <thead>
        <tr>
          <th>ARIA Attribute</th>
          <th>Element / Component</th>
          <th>Typical Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>role</td>
          <td>div, span, custom components</td>
          <td>
            Define element type for assistive tech, e.g.,{' '}
            <code>role="dialog"</code>, <code>role="button"</code>,{' '}
            <code>role="tab"</code>
          </td>
        </tr>
        <tr>
          <td>aria-label</td>
          <td>Buttons, inputs, icons</td>
          <td>
            Provide accessible labels for elements without visible text, e.g.,{' '}
            <code>&lt;button aria-label="Close modal" /&gt;</code>
          </td>
        </tr>
        <tr>
          <td>aria-labelledby</td>
          <td>Modals, tabs, panels</td>
          <td>
            Reference another element as the label, e.g.,{' '}
            <code>&lt;div role="dialog" aria-labelledby="modal-title"&gt;</code>
          </td>
        </tr>
        <tr>
          <td>aria-describedby</td>
          <td>Inputs, alerts, tooltips</td>
          <td>
            Reference descriptive text, e.g.,{' '}
            <code>&lt;input aria-describedby="email-help" /&gt;</code>
          </td>
        </tr>
        <tr>
          <td>aria-expanded</td>
          <td>Accordion headers, dropdowns</td>
          <td>
            Indicate whether content is expanded or collapsed, e.g.,{' '}
            <code>
              &lt;button aria-expanded="true"&gt;Section 1&lt;/button&gt;
            </code>
          </td>
        </tr>
        <tr>
          <td>aria-hidden</td>
          <td>Icons, background content</td>
          <td>
            Hide content from screen readers, e.g.,{' '}
            <code>&lt;span aria-hidden="true"&gt;★&lt;/span&gt;</code>
          </td>
        </tr>
        <tr>
          <td>aria-modal</td>
          <td>Modals</td>
          <td>
            Mark a modal as modal to trap focus, e.g.,{' '}
            <code>&lt;div role="dialog" aria-modal="true"&gt;</code>
          </td>
        </tr>
        <tr>
          <td>aria-checked</td>
          <td>Checkboxes, switches, menu items</td>
          <td>
            Indicate checked state, e.g.,{' '}
            <code>&lt;input type="checkbox" aria-checked="true" /&gt;</code>
          </td>
        </tr>
        <tr>
          <td>aria-current</td>
          <td>Navigation links, step indicators</td>
          <td>
            Mark the current item, e.g.,{' '}
            <code>&lt;a aria-current="page"&gt;Home&lt;/a&gt;</code>
          </td>
        </tr>
        <tr>
          <td>aria-live</td>
          <td>Notifications, dynamic content</td>
          <td>
            Announce updates to screen readers, e.g.,{' '}
            <code>&lt;div aria-live="polite"&gt;New message&lt;/div&gt;</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AriaAttibutes;
