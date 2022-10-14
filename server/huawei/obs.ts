// Introduce the OBS library.
// Use npm to install the client.
var ObsClient = require('esdk-obs-nodejs');
// Use source codes to install the client.
var ObsClient = require('./lib/obs');

export const OBSInitialize = () =>{
     // Create an ObsClient instance.
     var obsClient = new ObsClient({
     access_key_id: '*** Provide your Access Key ***', // Configure the AK.
     secret_access_key: '*** Provide your Secret Key ***', // Configure the SK.
          server : 'https://obs.na-mexico-1.myhuaweicloud.com', // Configure the endpoint.
          max_retry_count : 1,
          timeout : 20,
          ssl_verify : false,
          long_conn_param : 0
     });

     obsClient.initLog({
          name: 'client1',
          file_full_path:'./logs/OBS-SDK.log', 
          max_log_size:20480, 
          backups:10, 
          level:'info', 
          log_to_console:false
     });

     return obsClient;
}
