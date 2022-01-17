import nodeNotifier from 'node-notifier';
import PathUtil from '@scripts/util/path.util';

const notify = ({ message, subtitle }) => {
  const icon = PathUtil.admin('assets', 'logo.svg');
  return nodeNotifier.notify({
    title: 'Wheel the World (Blog)',
    message,
    subtitle,
    icon,
  });
};

export { notify };
