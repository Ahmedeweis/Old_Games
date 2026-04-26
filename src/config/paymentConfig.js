import instapayQR from '../assets/imgs/payment/instapayqr.jpeg';
import vodafoneQR from '../assets/imgs/payment/vodavoncashqr.jpeg';

export const paymentConfig = {
  vodafone: {
    number: '01093075107',
    qrCode: vodafoneQR,
    link: 'https://web.vodafone.com.eg/LB/DynamicLinks/AnaVF/index.html?url=/vfcash&id=mt&qrId=MHaub7',
  },
  instapay: {
    username: 'ahmedeweis@instapay',
    qrCode: instapayQR,
    link: 'https://ipn.eg/S/ahmedeweis/instapay/4DkAb5',
  },
  goals: [
    {
      id: 1,
      title: 'شراء دومين سنة',
      description: 'شراء نطاق (Domain) خاص بالموقع لضمان استمراريته.',
      target: 99,
      collected: 99,
    },
    {
      id: 2,
      title: 'استضافة لمدة سنة',
      description: 'تجديد الاستضافة السنوية لضمان بقاء الموقع متاحاً وسريعاً للمستخدمين.',
      target: 1068,
      collected: 140,
    },
    {
      id: 3,
      title: 'شراء مساحة تخزينية',
      description: 'شراء مساحة تخزينية لإضافة المزيد من الألعاب وتوسيع المكتبة الخاصة بنا.',
      target: 600,
      collected: 0,
    },
  ],
  donors: [
    { name: 'محمد علي', amount: 100, initial: 'م', color: '#f4a6b7' },
    { name: 'أحمد محمود', amount: 70, initial: 'أ', color: '#e2e8f0' },
    { name: 'سيد حسن', amount: 60, initial: 'س', color: '#e2e8f0' },
  ]
};
