// configure the test here
var TestConfig = {
  "TestName": "Cross-Lingual Voice Conversion Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "", 
  "Testsets": [
    //    
    {
      "Name": "Randy 1",
      "TestID": "id1",
      "Files": {
        "A": "./audio/feat_test/a.mp3",
        "B": "./audio/feat_test/a.mp3",
      }
    },
    //    
    {
      "Name": "Castanets",
      "TestID": "id2",
      "Files": {
        "A": "audio/castanets_ref.wav",
        "B": "audio/castanets_2.wav",
      }
    },
  ]
}
