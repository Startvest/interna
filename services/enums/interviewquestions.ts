export const questions = {
     common:[
          '1. Tell me about yourself?',
          '2. Why  should we hire you?',
          '3. What are your strengths?',
          '4. What would you say is your weakness?',
          '5. Why  should we hire you?'
     ]
} as const;

export const categories = [
     {
          id: 'software',
          name: 'Software development',
          length: 7,
     },
     {
          id: 'account',
          name: 'Accounting',
          length: 5,
     },
     {
          id: 'common',
          name: 'Common questions',
          length: 16,
     },
     {
          id: 'business',
          name: 'Business administration',
          length: 22,
     },
     {
          id: 'medicine',
          name: 'Medicine',
          length: 20,
     }
] as const;
