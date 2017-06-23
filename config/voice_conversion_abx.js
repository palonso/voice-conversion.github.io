// configure the test here
var TestConfig = {
  "TestName": "Cross-Lingual Voice Conversion Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "https://formspree.io/pablo.alonso@upf.edu",
  "SupervisorContact": "", 
  "Testsets": [
    //    
    {
      "Name": "Randy",
      "TestID": "feats_MMS",
      "Files": {
        "A": "./audio/randy_p003__ppg_mfcc_fmllr__no_smbr_AR__1x1_cond__timit/a_train/a_train_01_world.mp3",
        "B": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/a_train/a_train_01_world.mp3",
        "R": "./audio/examples/Randy.mp3",
        "S": "./audio/sources/a_train_01.mp3",
      }
    },
    //    
    {
      "Name": "Randy",
      "TestID": "feats_MFS",
      "Files": {
        "A": "./audio/randy_p003__ppg_mfcc_fmllr__no_smbr_AR__1x1_cond__timit/locked/locked48_01_world.mp3",
        "B": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/locked/locked48_01_world.mp3",
        "R": "./audio/examples/Randy.mp3",
        "S": "./audio/sources/locked48_01.mp3",
      }
    },
    // // // //
    {
      "Name": "Randy",
      "TestID": "db_MMS",
      "Files": {
        "A": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/a_train/a_train_01_world.mp3",
        "B": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/a_train/a_train_01_world.mp3",
        "R": "./audio/examples/Randy.mp3",
        "S": "./audio/sources/a_train_01.mp3",

      }
    },
//    
    {
      "Name": "Randy",
      "TestID": "db_MFS",
      "Files": {
        "A": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/locked/locked48_01_world.mp3",
        "B": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/locked/locked48_01_world.mp3",
        "R": "./audio/examples/Randy.mp3",
        "S": "./audio/sources/locked48_01.mp3",

      }
    },
    //    
    {
      "Name": "Randy, sometimes I like to sing in Spanish!",
      "TestID": "db_MMC",
      "Files": {
        "A": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/xevi/xevi_01_world.mp3",
        "B": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/xevi/xevi_01_world.mp3",
        "R": "./audio/examples/Randy.mp3",
        "S": "./audio/sources/xevi_01.mp3",
      }
    },
    // 
    {
      "Name": "Randy",
      "TestID": "db_MFC",
      "Files": {
        "A": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__timit/ultimo/ultimo-chorus_a_01_world.mp3",
        "B": "./audio/randy_p003__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/ultimo/ultimo-chorus_a_01_world.mp3",
        "R": "./audio/examples/Randy.mp3",
        "S": "./audio/sources/ultimo-chorus_a_01.mp3",        
      }
    },

    // // // Fpop Experiments

    {
      "Name": "Frida",
      "TestID": "db_FMS",
      "Files": {
        "A": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__wn_cond__timit/a_train/a_train_01_world.mp3",
        "B": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/a_train/a_train_01_world.mp3",
        "R": "./audio/examples/fPop.mp3",
        "S": "./audio/sources/a_train_01.mp3",  
      }
    },
//    
    {
      "Name": "Frida",
      "TestID": "db_FFS",
      "Files": {
        "A": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__wn_cond__timit/locked/locked48_01_world.mp3",
        "B": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/locked/locked48_01_world.mp3",
        "R": "./audio/examples/fPop.mp3",
        "S": "./audio/sources/locked48_01.mp3",

      }
    },
    //    
    {
      "Name": "Frida",
      "TestID": "db_FMC",
      "Files": {
        "A": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__wn_cond__timit/xevi/xevi_01_world.mp3",
        "B": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/xevi/xevi_01_world.mp3",
        "R": "./audio/examples/fPop.mp3",
        "S": "./audio/sources/xevi_01.mp3",
      }
    },
    // 
    {
      "Name": "Frida",
      "TestID": "db_FFC",
      "Files": {
        "A": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__wn_cond__timit/ultimo/ultimo-chorus_a_01_world.mp3",
        "B": "./audio/fpop2_p001+p002__ppg_worldv2_sac_fmllr__no_smbr_AR__1x1_cond__zya/ultimo/ultimo-chorus_a_01_world.mp3",
        "R": "./audio/examples/fPop.mp3",
        "S": "./audio/sources/ultimo-chorus_a_01.mp3", 
      }
    },

  ]
}
