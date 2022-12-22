export * from './getTestData';
export * from './webPushService';

export interface TError {
     response: {
       status: number;
       data: string;
     };
   }