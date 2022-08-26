import type { NextApiRequest, NextApiResponse } from 'next';
import { Configure } from '../../services/webPushService';
import webpush from 'web-push';

Configure();

export default function subscribe(req: NextApiRequest, res: NextApiResponse) {
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({
    'title': 'Push Notification test', 
    'body': 'Notified by Interna, revised edition'
  });

  webpush.sendNotification(subscription, payload).catch(e => {
     console.error(e);
  })
}
