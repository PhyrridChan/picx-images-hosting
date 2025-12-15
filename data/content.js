import { reactive } from 'vue';
import { config } from '@/config/index.js';

export const content = reactive({
  // 网站 Logo 配置
  siteLogo: {
    text: 'ZhangLab',
    image: `${config.githubRepoUrl}ZhangLab/lablogo/lablogo.92qkyfx2ma.webp`
  },

  // 导航菜单
  menuItems: [
    { label: 'Research', number: '01', path: '/research' },
    { label: 'Publications', number: '02', path: '/publications' },
    { label: 'Members', number: '03', path: '/members' },
    { label: 'News', number: '04', path: '/news' },
    // { label: 'Join US', number: '05', path: '/join-us' },
    // { label: 'Contact', number: '06', path: '/contact' },
    { label: 'Contact', number: '05', path: '/contact' },
  ],

  // 底部/右侧链接
  footerLinks: [
    { label: 'Shenzhen International Graduate School', url: 'https://www.sigs.tsinghua.edu.cn/', 
      img: `${config.githubRepoUrl}Emblem/image.3rbocwejis.webp` },
    { label: '©2025 The Zhang Lab'}
  ],

  // Hero Banner 内容
  hero: {
    slides: [
      {
        image: `${config.githubRepoUrl}ZhangLab/hero/hero1.83ahvm95vu.webp`,
        title: 'Zhang Lab',
        description: 'live-cell pharmaceutical engineering'
      },
      {
        image: `${config.githubRepoUrl}ZhangLab/hero/hero2.5xb39uh98l.webp`,
        title: 'Innovative Research',
        description: 'Biomaterials & Drug Delivery'
      },
      {
        image: `${config.githubRepoUrl}ZhangLab/hero/hero3.b9cvztrn4.webp`,
        title: 'Cutting-Edge Technology',
        description: 'Advanced Nanomaterials & Nanomedicine'
      }
    ],
    // Fallback for backward compatibility if needed, or for other pages
    backgroundImage: `${config.githubRepoUrl}ZhangLab/hero/hero.5mo9bw58uc.webp`
  },

  // 主页文字内容
  homeContent: {
    sectionTitle: 'Zhang<br>Lab',
    paragraphs: [
        'The Zhang Research Group at <a href="https://ibhe.sigs.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">Institute of Biopharmaceutical and Health Engineering (iBHE)</a> at <a href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">Tsinghua University</a> is focused on the <span>live-cell pharmaceutical engineering</span>, with a major emphasis on the design and preparation of functional biomaterials and drug delivery technology for complementary interactions to generate a <em>"smart"</em> system, interesting in neutrophil engneering, surface engineering of bacteria, and AI for formulation.'
    ]
  },

  // 首页公告/消息
  announcements: [
    // {
    //   type: 'recruitment', // recruitment, publication, award, event, general
    //   date: 'December 2025',
    //   title: 'Recruiting PhD Students and Postdocs',
    //   description: 'We are looking for motivated PhD students and postdoctoral researchers to join our team. Excellent opportunities in biomaterials and drug delivery research.',
    //   link: {
    //     text: 'View positions',
    //     url: '/join-us',
    //     external: false
    //   }
    // },
    {
      type: 'publication',
      date: 'November 2025',
      title: 'Dissolved bubble microneedle patches for co-delivery of hydrophobic and hydrophilic drugs to improve acne vulgaris therapy',
      journal: 'Microsystems & Nanoengineering',
      authors: 'Xiaopeng Zhang, Xiaotong Zhao, Yiting Li, Wanyue Zhang, Yuanyuan Chen, Haidong Jia, Zhibing Zhang, Can Yang Zhang*',
      journalCover: `${config.githubRepoUrl}ZhangLab/s41378-025-01079-y.102mbjocby.webp`,
      link: {
        text: 'Read paper',
        url: 'https://doi.org/10.1038/s41378-025-01079-y',
        external: true
      }
    },
    // {
    //   type: 'award',
    //   date: 'September 2025',
    //   title: '2024 Outstanding Teacher Award',
    //   description: 'Professor Zhang has been awarded the 2024 Outstanding Teacher Award in recognition of exceptional contributions to education.',
    //   link: {
    //     text: 'Learn more',
    //     url: '/news',
    //     external: false
    //   }
    // }
  ]
});
