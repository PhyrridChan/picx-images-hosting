import { reactive } from 'vue';

export const contactData = reactive({
  hero: {
    // title: 'Contact',
  },
  content: {
    sectionTitle: 'Get in<br>Touch',
  },
  info: {
    email: 'zhang.cy@sz.tsinghua.edu.cn',
    phone: '+86-135-2206-7013',
    address: 'SIGS, Tsinghua University, Nanshan District, Shenzhen, 518055 P.R. China',
    office: 'Room A1602, International Building Phase I'
  },
  form: {
  submitUrl: 'https://zhanglab-backend.phyrrid-chan.workers.dev/api/contact',
  }
});
