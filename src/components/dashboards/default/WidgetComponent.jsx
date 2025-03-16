import React from 'react';
import FalconComponentCard from 'components/common/FalconComponentCard';
import ActionButton from 'components/common/ActionButton';

const WidgetComponent = () => {
  const basicTableCode = `
<Table responsive>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th className="text-end" scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ricky Antony</td>
      <td>ricky@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Emma Watson</td>
      <td>emma@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Rowen Atkinson</td>
      <td>rown@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Antony Hopkins</td>
      <td>antony@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
    <tr>
      <td>Jennifer Schramm</td>
      <td>jennifer@example.com</td>
      <td className="text-end">
        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
      </td>
    </tr>
  </tbody>
</Table>
`;
  return (
    <FalconComponentCard dir="ltr" className="h-100">
      <FalconComponentCard.Header title="Pie chart" light={false} />
      <FalconComponentCard.Body
        code={basicTableCode}
        language="jsx"
        scope={{ ActionButton }}
        noLight
        className="p-0"
      />
    </FalconComponentCard>
  );
};

export default WidgetComponent;
