export interface Demo {
  title: string;
  subtitle?: string;
  caption: string;
  color: string;
  image: string;
  heading?: string;
  description?: string;
}

export const demoList: Demo[] = [
  {
    title: 'Scan a QR Code',
    subtitle:
      'Scan QR code from your prescription to set reminders automatically.',
    caption: '', //'20 sections - 3 hours',
    color: '152, 251, 152',
    image: 'assets/icon/qr-scanner.png',
    heading: '', //'Echoes',
    description: '',
  },
  {
    title: 'Set Reminder Manually',
    subtitle: 'Add prescription details manually to set reminders.',
    caption: '', //'47 sections - 11 hours',
    color: '152, 251, 152',
    image: 'assets/icon/reminder.png', //'assets/course_rive/topic_2.svg',
    heading: '', //'Triangle of care',
    description: '',
  },
  {
    title: 'View my schedule',
    subtitle: 'Go to calendar & view your existing events/reminders',
    caption: '', //'21 sections - 4 hours',
    color: '152, 251, 152',
    image: 'assets/icon/calendar.png', //'assets/course_rive/topic_1.svg',
    heading: '',
    description: '', //'If you are a individual, primary care provideror family member for dementia patient, this app is for you.',
  },
];

export const courseSectionsList: Demo[] = [
  {
    title: 'State Machine',
    caption: 'Watch video - 15 mins',
    color: '#9CC5FF',
    image: 'assets/course_rive/topic_2.svg',
  },
  {
    title: 'Animated Menu',
    caption: 'Watch video - 10 mins',
    color: '#6E6AE8',
    image: 'assets/course_rive/topic_1.svg',
  },
  {
    title: 'Tab Bar',
    caption: 'Watch video - 8 mins',
    color: '#005FE7',
    image: 'assets/course_rive/topic_2.svg',
  },
  {
    title: 'Button',
    caption: 'Watch video - 9 mins',
    color: '#BBA6FF',
    image: 'assets/course_rive/topic_1.svg',
  },
];
