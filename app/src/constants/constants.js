export const POLICY_STATUS = {
  ACTIVE: 'ACTIVE',
  UNPAID: 'UNPAID',
  ENDING_SOON: 'ENDING_SOON',
};

export const POLICIES = 'policies';

export const INITIAL_POLICIES = [
  {
    icon: 'plane',
    title: 'Travel',
    notes: 'Europe, 1 person',
    period: 'Apr 20, 2019 - Apr 21, 2020',
    status: POLICY_STATUS.ACTIVE,
  },
  {
    icon: 'home',
    title: 'Private property',
    notes: 'Zigfrīda Annas Meirovica bulvāris 10-8, Rīga',
    period: 'Jan 6, 2019 - Jan 6, 2020',
    status: POLICY_STATUS.UNPAID,
  },
  {
    icon: 'car',
    title: 'KASKO',
    notes: 'Volvo XS60, FF-4224',
    period: 'Mai 12, 2018 - Mai 12, 2019',
    status: POLICY_STATUS.ENDING_SOON,
  },
  {
    icon: 'cat',
    title: 'PET',
    notes: 'Muris',
    period: 'Mai 12, 2019 - Mai 12, 2019',
    status: POLICY_STATUS.ACTIVE,
  },
];
