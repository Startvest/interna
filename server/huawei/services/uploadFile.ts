import {OBSInitialize} from '../obs';

export const upload = async () =>{
     const obsClient = await OBSInitialize();

     obsClient.putObject({
          Bucket : 'interna-file',
          Key : 'test',
          Body : 'Hello OBS'
     }).then((result:any) => {
       if(result.CommonMsg.Status < 300){
           if(result.InterfaceResult){
               console.log('Operation Succeed');
           }
       }else{
           console.log('Code-->' + result.CommonMsg.Code); 
           console.log('Message-->' + result.CommonMsg.Message);
           console.log('HostId-->' + result.CommonMsg.HostId);
           console.log('RequestId-->' + result.CommonMsg.RequestId);
       }
     }).catch((err:any) => {
       console.error('Error-->' + err);
     });
}