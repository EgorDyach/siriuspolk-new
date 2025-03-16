import ClickOnScreen from '@shared/ui/icons/ClickOnScreen';
import { Step } from '../model/types';
import PenWriting from '@shared/ui/icons/PenWriting';
import LoopChecking from '@shared/ui/icons/LoopChecking';
import Notification from '@shared/ui/icons/Notification';

export const steps: Step[] = [
  {
    icon: <ClickOnScreen size={190} />,
    text: 'Нажмите на кнопку “Принять участие” и перейдите на страницу для заполнения заявки',
  },
  {
    icon: <PenWriting width="220px" height="170px" />,
    text: 'Заполните заявку и оставьте почту. Нажмите на кнопку “Отправить”, чтобы заявка отправилась на рассмотрение администрацией',
  },
  {
    icon: <LoopChecking size={180} />,
    text: 'После отправки заявка будет проверена администрацией в ближайшие сроки',
  },
  {
    icon: <Notification size={170} />,
    text: 'Если заявка будет одобрена, на ваш Email придёт уведомление и история ветерана появится на сайте',
  },
];
