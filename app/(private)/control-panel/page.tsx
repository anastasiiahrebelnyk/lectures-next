import { title } from 'process';
import PageContainer from '../../../components/PageContainer/PageContainer';

export const metadata: Metedata = {
  title: 'Control panel',
  description: 'Control panel NoteHub',
};

export default function ControlPanel() {
  return (
    <PageContainer
      title="Control Panel"
      description="Manage app settings and preferences."
    />
  );
}
