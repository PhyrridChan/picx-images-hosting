import { reactive } from 'vue';

export const joinUsData = reactive({
  hero: {
    title: 'Join Us',
  },
  content: {
    sectionTitle: 'Open<br>Positions',
    paragraphs: [
      'The Zhang lab strives to provide a nurturing environment for scientific career development by promoting inclusiveness, openness, creativity, and collaboration.',
      'Being a lab that works collaboratively across disciplines, we welcome individuals with various scientific backgrounds, including but not limited to, biology, computer science, electrical engineering, physics, material science, and chemistry. We invite motivated people from all fields to get in touch'
    ]
  },
  positions: [
    {
      title: 'Postdoctoral Fellows',
      icon: '🔬',
      description: 'We are seeking highly motivated postdoctoral fellows to join our interdisciplinary research team. Successful candidates will have the opportunity to lead independent research projects while collaborating on cutting-edge scientific investigations.',
      requirements: [
        'Ph.D. degree in Biology, Chemistry, Physics, Engineering, or related fields',
        'Strong publication record in peer-reviewed journals',
        'Excellent written and verbal communication skills in English',
        'Experience in relevant research techniques and methodologies',
        'Ability to work independently and as part of a collaborative team'
      ],
      materials: [
        'Curriculum Vitae (CV)',
        'Cover letter describing research interests and career goals',
        'List of three professional references with contact information',
        'Representative publications or preprints',
        'Research statement (1-2 pages)'
      ],
      contact: 'Please send application materials to: postdoc@zhanglab.tsinghua.edu.cn'
    },
    {
      title: 'PhD Students',
      icon: '🎓',
      description: 'We welcome motivated PhD students to join our research group. Students will receive comprehensive training in both theoretical foundations and practical research skills while contributing to innovative scientific discoveries.',
      requirements: [
        "Bachelor's or Master's degree in relevant scientific disciplines",
        'Strong academic record with GPA > 3.5/4.0',
        'Research experience through internships, thesis projects, or publications',
        'Proficiency in English (TOEFL/IELTS scores if applicable)',
        'Strong analytical and problem-solving skills'
      ],
      materials: [
        'Complete graduate school application through university portal',
        'Academic transcripts from all institutions attended',
        'Statement of Purpose outlining research interests',
        'Three letters of recommendation from academic references',
        'GRE scores (if required by program)',
        'English proficiency test scores (for international students)'
      ],
      contact: 'For PhD applications, please apply through Tsinghua University admission system and contact: phd@zhanglab.tsinghua.edu.cn'
    },
    {
      title: 'Master Students',
      icon: '📚',
      description: 'Master students will gain hands-on research experience while completing their degree requirements. This position offers excellent preparation for either PhD studies or careers in industry.',
      requirements: [
        "Bachelor's degree in science or engineering fields",
        'Good academic standing with strong foundation in relevant coursework',
        'Interest in interdisciplinary research approaches',
        'Basic laboratory or computational skills preferred',
        'Commitment to 1-2 year research program'
      ],
      materials: [
        'University application through official channels',
        'Academic transcripts and degree certificates',
        'Personal statement describing academic and career goals',
        'Two academic reference letters',
        'Portfolio of relevant coursework or projects (if applicable)'
      ],
      contact: 'For Master program inquiries, contact: masters@zhanglab.tsinghua.edu.cn'
    },
    {
      title: 'Undergraduate Researchers',
      icon: '🧪',
      description: 'Undergraduate students can gain valuable research experience through summer internships, semester projects, or thesis research. This is an excellent opportunity to explore graduate research and develop technical skills.',
      requirements: [
        'Currently enrolled undergraduate student in relevant major',
        'Minimum GPA of 3.0 and strong academic performance',
        'Completion of relevant prerequisite courses',
        'Enthusiasm for scientific research and learning',
        'Commitment to minimum 3-month research period'
      ],
      materials: [
        'Resume or CV highlighting academic achievements',
        'Cover letter expressing interest in specific research areas',
        'Academic transcript (unofficial acceptable)',
        'One academic reference letter',
        'Schedule availability and preferred research duration'
      ],
      contact: 'For undergraduate research opportunities, email: undergrad@zhanglab.tsinghua.edu.cn'
    }
  ],
  generalInfo: {
    applicationTips: [
      'Review our recent publications to understand current research directions',
      'Clearly articulate how your background aligns with our research interests',
      'Highlight relevant skills, experiences, and achievements',
      'Demonstrate genuine interest in collaborative, interdisciplinary research'
    ],
    benefits: [
      'Access to state-of-the-art research facilities and equipment',
      'Collaborative environment with leading researchers',
      'Professional development and career mentoring',
      'Opportunities for conference presentations and publications',
      'Competitive compensation and benefits package'
    ]
  }
});
