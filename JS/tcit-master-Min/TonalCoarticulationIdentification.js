/****************************************** 
 * Tonalcoarticulationidentification Test *
 ******************************************/

//import { core, data, sound, util, visual } from './lib/psychojs-2022.1.4.js';

import { core, data, sound, util, visual } from './src/psychojs.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// function waitForElement(){
//     if(typeof openSheet !== "undefined"){
//         window.location.href = "https://forms.gle/se3CJtiyxTf4W8qd6";
//     }
//     else{
//         setTimeout(waitForElement, 10);
                
//     }
// }
// waitForElement();

var ID = makeid(12);
var wasQuit = false;

// store info about the experiment session:
let expName = 'TonalCoarticulationIdentification';  // from the Builder filename that created this script
let expInfo = {'姓名 (抽獎用)': '', 'ID': ID+' (無需更動)'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: '聲調感知實驗'
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Intro_1RoutineBegin());
flowScheduler.add(Intro_1RoutineEachFrame());
flowScheduler.add(Intro_1RoutineEnd());
flowScheduler.add(Intro_2RoutineBegin());
flowScheduler.add(Intro_2RoutineEachFrame());
flowScheduler.add(Intro_2RoutineEnd());
flowScheduler.add(Intro_3RoutineBegin());
flowScheduler.add(Intro_3RoutineEachFrame());
flowScheduler.add(Intro_3RoutineEnd());
flowScheduler.add(Intro_4RoutineBegin());
flowScheduler.add(Intro_4RoutineEachFrame());
flowScheduler.add(Intro_4RoutineEnd());
flowScheduler.add(Intro_5RoutineBegin());
flowScheduler.add(Intro_5RoutineEachFrame());
flowScheduler.add(Intro_5RoutineEnd());
const Practice_test1_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_test1_loopLoopBegin(Practice_test1_loopLoopScheduler));
flowScheduler.add(Practice_test1_loopLoopScheduler);
flowScheduler.add(Practice_test1_loopLoopEnd);
flowScheduler.add(Start_test1RoutineBegin());
flowScheduler.add(Start_test1RoutineEachFrame());
flowScheduler.add(Start_test1RoutineEnd());
const Trial_test1_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Trial_test1_loopLoopBegin(Trial_test1_loopLoopScheduler));
flowScheduler.add(Trial_test1_loopLoopScheduler);
flowScheduler.add(Trial_test1_loopLoopEnd);
flowScheduler.add(Intermin_breakRoutineBegin());
flowScheduler.add(Intermin_breakRoutineEachFrame());
flowScheduler.add(Intermin_breakRoutineEnd());
flowScheduler.add(Intro_6RoutineBegin());
flowScheduler.add(Intro_6RoutineEachFrame());
flowScheduler.add(Intro_6RoutineEnd());
flowScheduler.add(Intro_7RoutineBegin());
flowScheduler.add(Intro_7RoutineEachFrame());
flowScheduler.add(Intro_7RoutineEnd());
flowScheduler.add(intro_8RoutineBegin());
flowScheduler.add(intro_8RoutineEachFrame());
flowScheduler.add(intro_8RoutineEnd());
flowScheduler.add(intro_9RoutineBegin());
flowScheduler.add(intro_9RoutineEachFrame());
flowScheduler.add(intro_9RoutineEnd());
const Practice_test2_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Practice_test2_loopLoopBegin(Practice_test2_loopLoopScheduler));
flowScheduler.add(Practice_test2_loopLoopScheduler);
flowScheduler.add(Practice_test2_loopLoopEnd);
flowScheduler.add(Start_test2RoutineBegin());
flowScheduler.add(Start_test2RoutineEachFrame());
flowScheduler.add(Start_test2RoutineEnd());
const Trial_test2_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Trial_test2_loopLoopBegin(Trial_test2_loopLoopScheduler));
flowScheduler.add(Trial_test2_loopLoopScheduler);
flowScheduler.add(Trial_test2_loopLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
function announceQuit() {
    wasQuit = true;
}
dialogCancelScheduler.add(announceQuit);
dialogCancelScheduler.add(quitPsychoJS, '', false);

var condition_num =  Math.floor(Math.random() * 100);

var resources = [{'name': 'Materials/Test1 WAV/tone33_1_level1.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level1.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level2.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level2.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level3.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level3.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level8.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level8.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level5.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level5.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level8.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level8.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level3.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level3.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level9.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level9.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level9.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level9.wav'},
 {'name': 'Materials/Images/Ear.png', 'path': 'Materials/Images/Ear.png'},
 {'name': 'Materials/Test1 WAV/tone33_1_level7.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level7.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level1.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level1.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level10.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level10.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level7.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level7.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level10.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level10.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level5.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level5.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level2.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level2.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level5.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level5.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level6.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level6.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level3.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level3.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level1.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level1.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level4.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level4.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level10.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level10.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level6.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level6.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level9.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level9.wav'},
 {'name': 'Materials/Test1 WAV/tone51_1_level2.wav',
  'path': 'Materials/Test1 WAV/tone51_1_level2.wav'},
 {'name': `Conditions/Test1 Conditions/Conditions_${condition_num}.xlsx`,
  'path': `Conditions/Test1 Conditions/Conditions_${condition_num}.xlsx`},
 {'name': `Conditions/Test2 Conditions/Conditions_${condition_num}.xlsx`,
  'path': `Conditions/Test2 Conditions/Conditions_${condition_num}.xlsx`},
 {'name': 'Materials/Test1 WAV/tone55_2_level4.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level4.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level7.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level7.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level8.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level8.wav'},
 {'name': 'Materials/Test1 WAV/tone55_2_level6.wav',
  'path': 'Materials/Test1 WAV/tone55_2_level6.wav'},
 {'name': 'Materials/Test1 WAV/tone33_1_level4.wav',
  'path': 'Materials/Test1 WAV/tone33_1_level4.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level9.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level9.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level8.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level8.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level8.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level8.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level9.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level9.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level9.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level9.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level8.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level8.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level3.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level3.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level5.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level5.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level7.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level7.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level6.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level6.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level4.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level4.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level2.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level2.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level6.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level6.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level4.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level4.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level5.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level5.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level7.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level7.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level1.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level1.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level5.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level5.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level3.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level3.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level1.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level1.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level2.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level2.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level4.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level4.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level6.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level6.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level2.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level2.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level3.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level3.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level10.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level10.wav'},
 {'name': 'Materials/Test1 WAV/tone55_1_level1.wav',
  'path': 'Materials/Test1 WAV/tone55_1_level1.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level7.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level7.wav'},
 {'name': 'Materials/Test1 WAV/tone51_2_level10.wav',
  'path': 'Materials/Test1 WAV/tone51_2_level10.wav'},
 {'name': 'Materials/Test1 WAV/tone21_1_level10.wav',
  'path': 'Materials/Test1 WAV/tone21_1_level10.wav'},
 {'name': 'Materials/Test2 WAV/水果_level8.wav',
  'path': 'Materials/Test2 WAV/水果_level8.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level7.wav',
  'path': 'Materials/Test2 WAV/滾水_level7.wav'},
 {'name': 'Materials/Test2 WAV/買票_level7.wav',
  'path': 'Materials/Test2 WAV/買票_level7.wav'},
 {'name': 'Materials/Test2 WAV/買票_level6.wav',
  'path': 'Materials/Test2 WAV/買票_level6.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level6.wav',
  'path': 'Materials/Test2 WAV/滾水_level6.wav'},
 {'name': 'Materials/Test2 WAV/水果_level9.wav',
  'path': 'Materials/Test2 WAV/水果_level9.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level4.wav',
  'path': 'Materials/Test2 WAV/滾水_level4.wav'},
 {'name': 'Materials/Test2 WAV/買票_level4.wav',
  'path': 'Materials/Test2 WAV/買票_level4.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level9.wav',
  'path': 'Materials/Test2 WAV/短褲_level9.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level8.wav',
  'path': 'Materials/Test2 WAV/短褲_level8.wav'},
 {'name': 'Materials/Test2 WAV/買票_level5.wav',
  'path': 'Materials/Test2 WAV/買票_level5.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level5.wav',
  'path': 'Materials/Test2 WAV/滾水_level5.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level9.wav',
  'path': 'Materials/Test2 WAV/飽滿_level9.wav'},
 {'name': 'Materials/Test2 WAV/買票_level1.wav',
  'path': 'Materials/Test2 WAV/買票_level1.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level1.wav',
  'path': 'Materials/Test2 WAV/滾水_level1.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level8.wav',
  'path': 'Materials/Test2 WAV/飽滿_level8.wav'},
 {'name': 'Materials/Test2 WAV/買票_level2.wav',
  'path': 'Materials/Test2 WAV/買票_level2.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level2.wav',
  'path': 'Materials/Test2 WAV/滾水_level2.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level10.wav',
  'path': 'Materials/Test2 WAV/早暗_level10.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level3.wav',
  'path': 'Materials/Test2 WAV/滾水_level3.wav'},
 {'name': 'Materials/Test2 WAV/買票_level3.wav',
  'path': 'Materials/Test2 WAV/買票_level3.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level10.wav',
  'path': 'Materials/Test2 WAV/米酒_level10.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level2.wav',
  'path': 'Materials/Test2 WAV/早暗_level2.wav'},
 {'name': 'Materials/Test2 WAV/你看_level3.wav',
  'path': 'Materials/Test2 WAV/你看_level3.wav'},
 {'name': 'Materials/Test2 WAV/你看_level2.wav',
  'path': 'Materials/Test2 WAV/你看_level2.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level3.wav',
  'path': 'Materials/Test2 WAV/早暗_level3.wav'},
 {'name': 'Materials/Test2 WAV/你看_level10.wav',
  'path': 'Materials/Test2 WAV/你看_level10.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level10.wav',
  'path': 'Materials/Test2 WAV/狡怪_level10.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level1.wav',
  'path': 'Materials/Test2 WAV/補繳_level1.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level9.wav',
  'path': 'Materials/Test2 WAV/狡怪_level9.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level3.wav',
  'path': 'Materials/Test2 WAV/補繳_level3.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level9.wav',
  'path': 'Materials/Test2 WAV/米酒_level9.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level1.wav',
  'path': 'Materials/Test2 WAV/早暗_level1.wav'},
 {'name': 'Materials/Test2 WAV/你看_level1.wav',
  'path': 'Materials/Test2 WAV/你看_level1.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level10.wav',
  'path': 'Materials/Test2 WAV/飽滿_level10.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level8.wav',
  'path': 'Materials/Test2 WAV/米酒_level8.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level8.wav',
  'path': 'Materials/Test2 WAV/狡怪_level8.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level2.wav',
  'path': 'Materials/Test2 WAV/補繳_level2.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level6.wav',
  'path': 'Materials/Test2 WAV/補繳_level6.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level10.wav',
  'path': 'Materials/Test2 WAV/補繳_level10.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level4.wav',
  'path': 'Materials/Test2 WAV/早暗_level4.wav'},
 {'name': 'Materials/Test2 WAV/你看_level5.wav',
  'path': 'Materials/Test2 WAV/你看_level5.wav'},
 {'name': 'Materials/Test2 WAV/你看_level4.wav',
  'path': 'Materials/Test2 WAV/你看_level4.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level5.wav',
  'path': 'Materials/Test2 WAV/早暗_level5.wav'},
 {'name': 'Materials/Test2 WAV/買票_level10.wav',
  'path': 'Materials/Test2 WAV/買票_level10.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level7.wav',
  'path': 'Materials/Test2 WAV/補繳_level7.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level5.wav',
  'path': 'Materials/Test2 WAV/補繳_level5.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level7.wav',
  'path': 'Materials/Test2 WAV/早暗_level7.wav'},
 {'name': 'Materials/Test2 WAV/你看_level6.wav',
  'path': 'Materials/Test2 WAV/你看_level6.wav'},
 {'name': 'Materials/Test2 WAV/你看_level7.wav',
  'path': 'Materials/Test2 WAV/你看_level7.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level6.wav',
  'path': 'Materials/Test2 WAV/早暗_level6.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level4.wav',
  'path': 'Materials/Test2 WAV/補繳_level4.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level3.wav',
  'path': 'Materials/Test2 WAV/狡怪_level3.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level9.wav',
  'path': 'Materials/Test2 WAV/補繳_level9.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level3.wav',
  'path': 'Materials/Test2 WAV/米酒_level3.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level2.wav',
  'path': 'Materials/Test2 WAV/米酒_level2.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level2.wav',
  'path': 'Materials/Test2 WAV/狡怪_level2.wav'},
 {'name': 'Materials/Test2 WAV/補繳_level8.wav',
  'path': 'Materials/Test2 WAV/補繳_level8.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level8.wav',
  'path': 'Materials/Test2 WAV/早暗_level8.wav'},
 {'name': 'Materials/Test2 WAV/你看_level9.wav',
  'path': 'Materials/Test2 WAV/你看_level9.wav'},
 {'name': 'Materials/Test2 WAV/你看_level8.wav',
  'path': 'Materials/Test2 WAV/你看_level8.wav'},
 {'name': 'Materials/Test2 WAV/早暗_level9.wav',
  'path': 'Materials/Test2 WAV/早暗_level9.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level1.wav',
  'path': 'Materials/Test2 WAV/米酒_level1.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level1.wav',
  'path': 'Materials/Test2 WAV/狡怪_level1.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level5.wav',
  'path': 'Materials/Test2 WAV/狡怪_level5.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level5.wav',
  'path': 'Materials/Test2 WAV/米酒_level5.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level4.wav',
  'path': 'Materials/Test2 WAV/米酒_level4.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level4.wav',
  'path': 'Materials/Test2 WAV/狡怪_level4.wav'},
 {'name': 'Materials/Test2 WAV/水果_level10.wav',
  'path': 'Materials/Test2 WAV/水果_level10.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level6.wav',
  'path': 'Materials/Test2 WAV/狡怪_level6.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level6.wav',
  'path': 'Materials/Test2 WAV/米酒_level6.wav'},
 {'name': 'Materials/Test2 WAV/米酒_level7.wav',
  'path': 'Materials/Test2 WAV/米酒_level7.wav'},
 {'name': 'Materials/Test2 WAV/狡怪_level7.wav',
  'path': 'Materials/Test2 WAV/狡怪_level7.wav'},
 {'name': 'Materials/Test2 WAV/水果_level1.wav',
  'path': 'Materials/Test2 WAV/水果_level1.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level6.wav',
  'path': 'Materials/Test2 WAV/飽滿_level6.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level3.wav',
  'path': 'Materials/Test2 WAV/短褲_level3.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level2.wav',
  'path': 'Materials/Test2 WAV/短褲_level2.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level7.wav',
  'path': 'Materials/Test2 WAV/飽滿_level7.wav'},
 {'name': 'Materials/Test2 WAV/水果_level2.wav',
  'path': 'Materials/Test2 WAV/水果_level2.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level5.wav',
  'path': 'Materials/Test2 WAV/飽滿_level5.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level1.wav',
  'path': 'Materials/Test2 WAV/短褲_level1.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level4.wav',
  'path': 'Materials/Test2 WAV/飽滿_level4.wav'},
 {'name': 'Materials/Test2 WAV/水果_level3.wav',
  'path': 'Materials/Test2 WAV/水果_level3.wav'},
 {'name': 'Materials/Test2 WAV/水果_level7.wav',
  'path': 'Materials/Test2 WAV/水果_level7.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level8.wav',
  'path': 'Materials/Test2 WAV/滾水_level8.wav'},
 {'name': 'Materials/Test2 WAV/買票_level8.wav',
  'path': 'Materials/Test2 WAV/買票_level8.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level5.wav',
  'path': 'Materials/Test2 WAV/短褲_level5.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level4.wav',
  'path': 'Materials/Test2 WAV/短褲_level4.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level10.wav',
  'path': 'Materials/Test2 WAV/短褲_level10.wav'},
 {'name': 'Materials/Test2 WAV/買票_level9.wav',
  'path': 'Materials/Test2 WAV/買票_level9.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level9.wav',
  'path': 'Materials/Test2 WAV/滾水_level9.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level1.wav',
  'path': 'Materials/Test2 WAV/飽滿_level1.wav'},
 {'name': 'Materials/Test2 WAV/水果_level6.wav',
  'path': 'Materials/Test2 WAV/水果_level6.wav'},
 {'name': 'Materials/Test2 WAV/水果_level4.wav',
  'path': 'Materials/Test2 WAV/水果_level4.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level3.wav',
  'path': 'Materials/Test2 WAV/飽滿_level3.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level6.wav',
  'path': 'Materials/Test2 WAV/短褲_level6.wav'},
 {'name': 'Materials/Test2 WAV/短褲_level7.wav',
  'path': 'Materials/Test2 WAV/短褲_level7.wav'},
 {'name': 'Materials/Test2 WAV/滾水_level10.wav',
  'path': 'Materials/Test2 WAV/滾水_level10.wav'},
 {'name': 'Materials/Test2 WAV/飽滿_level2.wav',
  'path': 'Materials/Test2 WAV/飽滿_level2.wav'},
 {'name': 'Materials/Test2 WAV/水果_level5.wav',
  'path': 'Materials/Test2 WAV/水果_level5.wav'}]

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources:resources
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['ID'] = ID
  expInfo['psychopyVersion'] = '2022.1.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["ID"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var waitTime = 2;


var Intro_1Clock;
var continue_text;
var intro_text_1;
var intro_mouse_1;
var Intro_2Clock;
var intro_text_2;
var continue_text_2;
var intro_mouse_2;
var Intro_3Clock;
var intro_text_3;
var continue_text_3;
var intro_mouse_3;
var Intro_4Clock;
var intro_mouse_4;
var continue_text_4;
var intro_text_4;
var Intro_5Clock;
var intro_text_5;
var continue_text_5;
var intro_mouse_5;
var Practice_test1Clock;
var practice_mouse_test1;
var sound_practice_test1;
var fixation_practice_test1;
var ear_img_practice_test1;
var word_2_text_test1_practice;
var word_1_text_test1_practice;
var Start_test1Clock;
var start_test1_text;
var mouse;
var continue_text_start_test1;
var Trial_test1Clock;
var trial_mouse;
var sound_1;
var ear_img;
var fixation;
var word_1_text_test1;
var word_2_text_test1;
var Intermin_breakClock;
var break_text;
var mouse_break;
var continue_text_break;
var Intro_6Clock;
var intro_mouse_6;
var continue_text_6;
var intro_text_6;
var Intro_7Clock;
var intro_text_7;
var continue_text_7;
var intro_mouse_7;
var intro_8Clock;
var intro_text_8;
var intro_mouse_8;
var continue_text_8;
var intro_9Clock;
var intro_mouse_9;
var continue_text_9;
var intro_text_9;
var Practice_test2Clock;
var fixation_practice_test2;
var sound_practice_test2;
var mouse_parctice_test2;
var word_practice_test2_text;

var ear_img_test2;
var Start_test2Clock;
var start_test2_text;
var continue_text_10;
var start_test2_mouse;
var Trial_test2Clock;
var sound_test2;
var mouse_test2;
var word_test2_text;
var fixation_test2;
var ear_img_trial_test2;
var yes_text_trial_test2;
var no_text_trial_test2;
var yes_text_practice_test2;
var no_text_practice_test2;
var EndClock;
var end_mouse;
var end_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intro_1"
  Intro_1Clock = new util.Clock();
  continue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text',
    text: '繼續',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  intro_text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_1',
    text: '歡迎參加本次實驗',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_mouse_1 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_1.mouseClock = new util.Clock();
  // Initialize components for Routine "Intro_2"
  Intro_2Clock = new util.Clock();
  intro_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_2',
    text: '接下來的實驗分為兩個部分',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_2',
    text: '繼續',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "Intro_3"
  Intro_3Clock = new util.Clock();
  intro_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_3',
    text: '第一個部分中\n你每次會先看到一個「＋」號\n並聽到一個台語單字\n接下來你會看到兩個單字',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_3',
    text: '繼續',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "Intro_4"
  Intro_4Clock = new util.Clock();
  intro_mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_4.mouseClock = new util.Clock();
  continue_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_4',
    text: '繼續',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_4',
    text: '請你點選所聽到的字',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Intro_5"
  Intro_5Clock = new util.Clock();
  intro_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_5',
    text: '接下來是練習',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_5',
    text: '開始練習',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "Practice_test1"
  Practice_test1Clock = new util.Clock();
  practice_mouse_test1 = new core.Mouse({
    win: psychoJS.window,
  });
  practice_mouse_test1.mouseClock = new util.Clock();
  sound_practice_test1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1,
    });
  sound_practice_test1.setVolume(1.0);
  fixation_practice_test1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_practice_test1',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  ear_img_practice_test1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ear_img_practice_test1', units : undefined, 
    image : 'Materials/Images/Ear.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  word_2_text_test1_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_2_text_test1_practice',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  word_1_text_test1_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_1_text_test1_practice',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Start_test1"
  Start_test1Clock = new util.Clock();
  start_test1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_test1_text',
    text: '練習結束\n\n接下來是正式測驗\n準備好請開始',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  continue_text_start_test1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_start_test1',
    text: '正式開始',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Trial_test1"
  Trial_test1Clock = new util.Clock();
  trial_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  trial_mouse.mouseClock = new util.Clock();
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1,
    });
  sound_1.setVolume(1.0);
  ear_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ear_img', units : undefined, 
    image : 'Materials/Images/Ear.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  word_1_text_test1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_1_text_test1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  word_2_text_test1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_2_text_test1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Intermin_break"
  Intermin_breakClock = new util.Clock();
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: '第一階段結束\n請休息一下\n\n最快一分鐘後可以繼續',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_break = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_break.mouseClock = new util.Clock();
  continue_text_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_break',
    text: '繼續',
    font: 'Ariel',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Intro_6"
  Intro_6Clock = new util.Clock();
  intro_mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_6.mouseClock = new util.Clock();
  continue_text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_6',
    text: '繼續',
    font: 'Ariel',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_6',
    text: '歡迎來到第二部分的測驗',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Intro_7"
  Intro_7Clock = new util.Clock();
  intro_text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_7',
    text: '接下來的實驗中\n你會聽到一個人念台語的音檔',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_7',
    text: '繼續',
    font: 'Ariel',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_7.mouseClock = new util.Clock();
  // Initialize components for Routine "intro_8"
  intro_8Clock = new util.Clock();
  intro_text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_8',
    text: '每次你同樣會看到一個「+」號\n之後會聽到這個人念的音\n並且看到他念的字',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  intro_mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_8.mouseClock = new util.Clock();
  continue_text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_8',
    text: '繼續',
    font: 'Ariel',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "intro_9"
  intro_9Clock = new util.Clock();
  intro_mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  intro_mouse_9.mouseClock = new util.Clock();
  continue_text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_9',
    text: '開始練習',
    font: 'Ariel',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  intro_text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text_9',
    text: '請你特別注意他的聲調\n並且幫忙判斷他唸得是否正確',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Practice_test2"
  Practice_test2Clock = new util.Clock();
  fixation_practice_test2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_practice_test2',
    text: '+\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_practice_test2 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1,
    });
  sound_practice_test2.setVolume(1.0);
  mouse_parctice_test2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_parctice_test2.mouseClock = new util.Clock();
  
  word_practice_test2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_practice_test2_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  yes_text_practice_test2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yes_text_practice_test2',
    text: '正確',
    font: 'Ariel',
    units: undefined, 
    pos: [.3, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });

  no_text_practice_test2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_text_practice_test2',
    text: '不像',
    font: 'Ariel',
    units: undefined, 
    pos: [-.3, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  ear_img_test2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ear_img_test2', units : undefined, 
    image : 'Materials/Images/Ear.png', mask : undefined,
    ori : 0.0, pos : [0, 0.25], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "Start_test2"
  Start_test2Clock = new util.Clock();
  start_test2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'start_test2_text',
    text: '接下來是正式測驗\n準備好請開始',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  continue_text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'continue_text_10',
    text: '正式開始',
    font: 'Ariel',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  start_test2_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  start_test2_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Trial_test2"
  Trial_test2Clock = new util.Clock();
  sound_test2 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 1,
    });
  sound_test2.setVolume(1.0);
  mouse_test2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_test2.mouseClock = new util.Clock();
  
  word_test2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'word_test2_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  fixation_test2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_test2',
    text: '+\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  ear_img_trial_test2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ear_img_trial_test2', units : undefined, 
    image : 'Materials/Images/Ear.png', mask : undefined,
    ori : 0.0, pos : [0, 0.25], size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  yes_text_trial_test2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yes_text_trial_test2',
    text: '正確',
    font: 'Ariel',
    units: undefined, 
    pos: [.3, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  no_text_trial_test2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_text_trial_test2',
    text: '不像',
    font: 'Ariel',
    units: undefined, 
    pos: [-.3, (- 0.4)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  end_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  end_mouse.mouseClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: '實驗結束\n非常感謝您的參與\n請稍待實驗記錄結果，不要關閉視窗\n並請記得幫忙填寫後測問卷。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var Intro_1Components;
function Intro_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_1'-------
    t = 0;
    Intro_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_1
    intro_mouse_1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intro_1Components = [];
    Intro_1Components.push(continue_text);
    Intro_1Components.push(intro_text_1);
    Intro_1Components.push(intro_mouse_1);
    
    for (const thisComponent of Intro_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function Intro_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_1'-------
    // get current time
    t = Intro_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *continue_text* updates
    if (t >= 1 && continue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text.tStart = t;  // (not accounting for frame time here)
      continue_text.frameNStart = frameN;  // exact frame index
      
      continue_text.setAutoDraw(true);
    }

    
    // *intro_text_1* updates
    if (t >= 0.0 && intro_text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_1.tStart = t;  // (not accounting for frame time here)
      intro_text_1.frameNStart = frameN;  // exact frame index
      
      intro_text_1.setAutoDraw(true);
    }

    // *intro_mouse_1* updates
    if (t >= 1.0 && intro_mouse_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_1.tStart = t;  // (not accounting for frame time here)
      intro_mouse_1.frameNStart = frameN;  // exact frame index
      
      intro_mouse_1.status = PsychoJS.Status.STARTED;
      intro_mouse_1.mouseClock.reset();
      prevButtonState = intro_mouse_1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text]) {
            if (obj.contains(intro_mouse_1)) {
              gotValidClick = true;
              intro_mouse_1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function Intro_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_1'-------
    for (const thisComponent of Intro_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_1.getPos();
    _mouseButtons = intro_mouse_1.getPressed();
    psychoJS.experiment.addData('intro_mouse_1.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_1.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_1.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_1.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_1.rightButton', _mouseButtons[2]);
    if (intro_mouse_1.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_1.clicked_name', intro_mouse_1.clicked_name[0]);}
    // the Routine "Intro_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intro_2Components;
function Intro_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_2'-------
    t = 0;
    Intro_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_2
    intro_mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intro_2Components = [];
    Intro_2Components.push(intro_text_2);
    Intro_2Components.push(continue_text_2);
    Intro_2Components.push(intro_mouse_2);
    
    for (const thisComponent of Intro_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intro_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_2'-------
    // get current time
    t = Intro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text_2* updates
    if (t >= 0.0 && intro_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_2.tStart = t;  // (not accounting for frame time here)
      intro_text_2.frameNStart = frameN;  // exact frame index
      
      intro_text_2.setAutoDraw(true);
    }

    
    // *continue_text_2* updates
    if (t >= 1 && continue_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_2.tStart = t;  // (not accounting for frame time here)
      continue_text_2.frameNStart = frameN;  // exact frame index
      
      continue_text_2.setAutoDraw(true);
    }

    // *intro_mouse_2* updates
    if (t >= 1 && intro_mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_2.tStart = t;  // (not accounting for frame time here)
      intro_mouse_2.frameNStart = frameN;  // exact frame index
      
      intro_mouse_2.status = PsychoJS.Status.STARTED;
      intro_mouse_2.mouseClock.reset();
      prevButtonState = intro_mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_2]) {
            if (obj.contains(intro_mouse_2)) {
              gotValidClick = true;
              intro_mouse_2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_2'-------
    for (const thisComponent of Intro_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_2.getPos();
    _mouseButtons = intro_mouse_2.getPressed();
    psychoJS.experiment.addData('intro_mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_2.rightButton', _mouseButtons[2]);
    if (intro_mouse_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_2.clicked_name', intro_mouse_2.clicked_name[0]);}
    // the Routine "Intro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intro_3Components;
function Intro_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_3'-------
    t = 0;
    Intro_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_3
    intro_mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intro_3Components = [];
    Intro_3Components.push(intro_text_3);
    Intro_3Components.push(continue_text_3);
    Intro_3Components.push(intro_mouse_3);
    
    for (const thisComponent of Intro_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intro_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_3'-------
    // get current time
    t = Intro_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text_3* updates
    if (t >= 0 && intro_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_3.tStart = t;  // (not accounting for frame time here)
      intro_text_3.frameNStart = frameN;  // exact frame index
      
      intro_text_3.setAutoDraw(true);
    }

    
    // *continue_text_3* updates
    if (t >= 1 && continue_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_3.tStart = t;  // (not accounting for frame time here)
      continue_text_3.frameNStart = frameN;  // exact frame index
      
      continue_text_3.setAutoDraw(true);
    }

    // *intro_mouse_3* updates
    if (t >= 1.0 && intro_mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_3.tStart = t;  // (not accounting for frame time here)
      intro_mouse_3.frameNStart = frameN;  // exact frame index
      
      intro_mouse_3.status = PsychoJS.Status.STARTED;
      intro_mouse_3.mouseClock.reset();
      prevButtonState = intro_mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_3]) {
            if (obj.contains(intro_mouse_3)) {
              gotValidClick = true;
              intro_mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_3'-------
    for (const thisComponent of Intro_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_3.getPos();
    _mouseButtons = intro_mouse_3.getPressed();
    psychoJS.experiment.addData('intro_mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_3.rightButton', _mouseButtons[2]);
    if (intro_mouse_3.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_3.clicked_name', intro_mouse_3.clicked_name[0]);}
    // the Routine "Intro_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intro_4Components;
function Intro_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_4'-------
    t = 0;
    Intro_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_4
    intro_mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intro_4Components = [];
    Intro_4Components.push(intro_mouse_4);
    Intro_4Components.push(continue_text_4);
    Intro_4Components.push(intro_text_4);
    
    for (const thisComponent of Intro_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intro_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_4'-------
    // get current time
    t = Intro_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *intro_mouse_4* updates
    if (t >= 1 && intro_mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_4.tStart = t;  // (not accounting for frame time here)
      intro_mouse_4.frameNStart = frameN;  // exact frame index
      
      intro_mouse_4.status = PsychoJS.Status.STARTED;
      intro_mouse_4.mouseClock.reset();
      prevButtonState = intro_mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_4]) {
            if (obj.contains(intro_mouse_4)) {
              gotValidClick = true;
              intro_mouse_4.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *continue_text_4* updates
    if (t >= 1 && continue_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_4.tStart = t;  // (not accounting for frame time here)
      continue_text_4.frameNStart = frameN;  // exact frame index
      
      continue_text_4.setAutoDraw(true);
    }

    
    // *intro_text_4* updates
    if (t >= 0.0 && intro_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_4.tStart = t;  // (not accounting for frame time here)
      intro_text_4.frameNStart = frameN;  // exact frame index
      
      intro_text_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_4'-------
    for (const thisComponent of Intro_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_4.getPos();
    _mouseButtons = intro_mouse_4.getPressed();
    psychoJS.experiment.addData('intro_mouse_4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_4.rightButton', _mouseButtons[2]);
    if (intro_mouse_4.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_4.clicked_name', intro_mouse_4.clicked_name[0]);}
    // the Routine "Intro_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intro_5Components;
function Intro_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_5'-------
    t = 0;
    Intro_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_5
    intro_mouse_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intro_5Components = [];
    Intro_5Components.push(intro_text_5);
    Intro_5Components.push(continue_text_5);
    Intro_5Components.push(intro_mouse_5);
    
    for (const thisComponent of Intro_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intro_5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_5'-------
    // get current time
    t = Intro_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text_5* updates
    if (t >= 0.0 && intro_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_5.tStart = t;  // (not accounting for frame time here)
      intro_text_5.frameNStart = frameN;  // exact frame index
      
      intro_text_5.setAutoDraw(true);
    }

    
    // *continue_text_5* updates
    if (t >= 1 && continue_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_5.tStart = t;  // (not accounting for frame time here)
      continue_text_5.frameNStart = frameN;  // exact frame index
      
      continue_text_5.setAutoDraw(true);
    }

    // *intro_mouse_5* updates
    if (t >= 1 && intro_mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_5.tStart = t;  // (not accounting for frame time here)
      intro_mouse_5.frameNStart = frameN;  // exact frame index
      
      intro_mouse_5.status = PsychoJS.Status.STARTED;
      intro_mouse_5.mouseClock.reset();
      prevButtonState = intro_mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_5]) {
            if (obj.contains(intro_mouse_5)) {
              gotValidClick = true;
              intro_mouse_5.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_5'-------
    for (const thisComponent of Intro_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_5.getPos();
    _mouseButtons = intro_mouse_5.getPressed();
    psychoJS.experiment.addData('intro_mouse_5.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_5.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_5.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_5.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_5.rightButton', _mouseButtons[2]);
    if (intro_mouse_5.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_5.clicked_name', intro_mouse_5.clicked_name[0]);}
    // the Routine "Intro_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Practice_test1_loop;
var currentLoop;
function Practice_test1_loopLoopBegin(Practice_test1_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Practice_test1_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, `Conditions/Test1 Conditions/Conditions_${condition_num}.xlsx`, '50:54'),
      seed: undefined, name: 'Practice_test1_loop'
    });
    psychoJS.experiment.addLoop(Practice_test1_loop); // add the loop to the experiment
    currentLoop = Practice_test1_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_test1_loop of Practice_test1_loop) {
      const snapshot = Practice_test1_loop.getSnapshot();
      Practice_test1_loopLoopScheduler.add(importConditions(snapshot));
      Practice_test1_loopLoopScheduler.add(Practice_test1RoutineBegin(snapshot));
      Practice_test1_loopLoopScheduler.add(Practice_test1RoutineEachFrame());
      Practice_test1_loopLoopScheduler.add(Practice_test1RoutineEnd());
      Practice_test1_loopLoopScheduler.add(endLoopIteration(Practice_test1_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Practice_test1_loopLoopEnd() {
  psychoJS.experiment.removeLoop(Practice_test1_loop);

  return Scheduler.Event.NEXT;
}


var Trial_test1_loop;
function Trial_test1_loopLoopBegin(Trial_test1_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Trial_test1_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: `Conditions/Test1 Conditions/Conditions_${condition_num}.xlsx`,
      seed: undefined, name: 'Trial_test1_loop'
    });
    psychoJS.experiment.addLoop(Trial_test1_loop); // add the loop to the experiment
    currentLoop = Trial_test1_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_test1_loop of Trial_test1_loop) {
      const snapshot = Trial_test1_loop.getSnapshot();
      Trial_test1_loopLoopScheduler.add(importConditions(snapshot));
      Trial_test1_loopLoopScheduler.add(Trial_test1RoutineBegin(snapshot));
      Trial_test1_loopLoopScheduler.add(Trial_test1RoutineEachFrame());
      Trial_test1_loopLoopScheduler.add(Trial_test1RoutineEnd());
      Trial_test1_loopLoopScheduler.add(endLoopIteration(Trial_test1_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Trial_test1_loopLoopEnd() {
  psychoJS.experiment.removeLoop(Trial_test1_loop);

  return Scheduler.Event.NEXT;
}


var Practice_test2_loop;
function Practice_test2_loopLoopBegin(Practice_test2_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Practice_test2_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, `Conditions/Test2 Conditions/Conditions_${condition_num}.xlsx`, '50:54'),
      seed: undefined, name: 'Practice_test2_loop'
    });
    psychoJS.experiment.addLoop(Practice_test2_loop); // add the loop to the experiment
    currentLoop = Practice_test2_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_test2_loop of Practice_test2_loop) {
      const snapshot = Practice_test2_loop.getSnapshot();
      Practice_test2_loopLoopScheduler.add(importConditions(snapshot));
      Practice_test2_loopLoopScheduler.add(Practice_test2RoutineBegin(snapshot));
      Practice_test2_loopLoopScheduler.add(Practice_test2RoutineEachFrame());
      Practice_test2_loopLoopScheduler.add(Practice_test2RoutineEnd());
      Practice_test2_loopLoopScheduler.add(endLoopIteration(Practice_test2_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Practice_test2_loopLoopEnd() {
  psychoJS.experiment.removeLoop(Practice_test2_loop);

  return Scheduler.Event.NEXT;
}


var Trial_test2_loop;
function Trial_test2_loopLoopBegin(Trial_test2_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Trial_test2_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: `Conditions/Test2 Conditions/Conditions_${condition_num}.xlsx`,
      seed: undefined, name: 'Trial_test2_loop'
    });
    psychoJS.experiment.addLoop(Trial_test2_loop); // add the loop to the experiment
    currentLoop = Trial_test2_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_test2_loop of Trial_test2_loop) {
      const snapshot = Trial_test2_loop.getSnapshot();
      Trial_test2_loopLoopScheduler.add(importConditions(snapshot));
      Trial_test2_loopLoopScheduler.add(Trial_test2RoutineBegin(snapshot));
      Trial_test2_loopLoopScheduler.add(Trial_test2RoutineEachFrame());
      Trial_test2_loopLoopScheduler.add(Trial_test2RoutineEnd());
      Trial_test2_loopLoopScheduler.add(endLoopIteration(Trial_test2_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Trial_test2_loopLoopEnd() {
  psychoJS.experiment.removeLoop(Trial_test2_loop);

  return Scheduler.Event.NEXT;
}


var Practice_test1Components;
function Practice_test1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Practice_test1'-------
    t = 0;
    Practice_test1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the practice_mouse_test1
    practice_mouse_test1.clicked_name = [];
    gotValidClick = false; // until a click is received
    sound_practice_test1 = new sound.Sound({
    win: psychoJS.window,
    value: WAV_file,
    secs: 1,
    });
    sound_practice_test1.secs=1;
    sound_practice_test1.setVolume(1.0);
    word_2_text_test1_practice.setText(word_2);
    word_1_text_test1_practice.setText(word_1);
    // keep track of which components have finished
    Practice_test1Components = [];
    Practice_test1Components.push(practice_mouse_test1);
    Practice_test1Components.push(sound_practice_test1);
    Practice_test1Components.push(fixation_practice_test1);
    Practice_test1Components.push(ear_img_practice_test1);
    Practice_test1Components.push(word_2_text_test1_practice);
    Practice_test1Components.push(word_1_text_test1_practice);
    
    for (const thisComponent of Practice_test1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Practice_test1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Practice_test1'-------
    // get current time
    t = Practice_test1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *practice_mouse_test1* updates
    if (t >= 2 && practice_mouse_test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_mouse_test1.tStart = t;  // (not accounting for frame time here)
      practice_mouse_test1.frameNStart = frameN;  // exact frame index
      
      practice_mouse_test1.status = PsychoJS.Status.STARTED;
      practice_mouse_test1.mouseClock.reset();
      prevButtonState = practice_mouse_test1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (practice_mouse_test1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = practice_mouse_test1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [word_2_text_test1_practice, word_1_text_test1_practice]) {
            if (obj.contains(practice_mouse_test1)) {
              gotValidClick = true;
              practice_mouse_test1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // start/stop sound_practice_test1
    if (t >= 1.0 && sound_practice_test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_practice_test1.tStart = t;  // (not accounting for frame time here)
      sound_practice_test1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_practice_test1.play(); });  // screen flip
      sound_practice_test1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_practice_test1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1 > 0.5) {
        sound_practice_test1.stop();  // stop the sound (if longer than duration)
      }
      sound_practice_test1.status = PsychoJS.Status.FINISHED;
    }
    
    // *fixation_practice_test1* updates
    if (t >= 0.0 && fixation_practice_test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_practice_test1.tStart = t;  // (not accounting for frame time here)
      fixation_practice_test1.frameNStart = frameN;  // exact frame index
      
      fixation_practice_test1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_practice_test1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_practice_test1.setAutoDraw(false);
    }
    
    // *ear_img_practice_test1* updates
    if (t >= 1.0 && ear_img_practice_test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ear_img_practice_test1.tStart = t;  // (not accounting for frame time here)
      ear_img_practice_test1.frameNStart = frameN;  // exact frame index
      
      ear_img_practice_test1.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ear_img_practice_test1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ear_img_practice_test1.setAutoDraw(false);
    }
    
    // *word_2_text_test1_practice* updates
    if (t >= waitTime && word_2_text_test1_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_2_text_test1_practice.tStart = t;  // (not accounting for frame time here)
      word_2_text_test1_practice.frameNStart = frameN;  // exact frame index
      
      word_2_text_test1_practice.setAutoDraw(true);
    }

    //waschanged    
    // *word_1_text_test1_practice* updates
    if (t >= waitTime && word_1_text_test1_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_1_text_test1_practice.tStart = t;  // (not accounting for frame time here)
      word_1_text_test1_practice.frameNStart = frameN;  // exact frame index
      
      word_1_text_test1_practice.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_test1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_test1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Practice_test1'-------
    for (const thisComponent of Practice_test1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = practice_mouse_test1.getPos();
    _mouseButtons = practice_mouse_test1.getPressed();
    psychoJS.experiment.addData('practice_mouse_test1.x', _mouseXYs[0]);
    psychoJS.experiment.addData('practice_mouse_test1.y', _mouseXYs[1]);
    psychoJS.experiment.addData('practice_mouse_test1.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('practice_mouse_test1.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('practice_mouse_test1.rightButton', _mouseButtons[2]);
    if (practice_mouse_test1.clicked_name.length > 0) {
      psychoJS.experiment.addData('practice_mouse_test1.clicked_name', practice_mouse_test1.clicked_name[0]);}
    sound_practice_test1.stop();  // ensure sound has stopped at end of routine
    // the Routine "Practice_test1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Start_test1Components;
function Start_test1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Start_test1'-------
    t = 0;
    Start_test1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Start_test1Components = [];
    Start_test1Components.push(start_test1_text);
    Start_test1Components.push(mouse);
    Start_test1Components.push(continue_text_start_test1);
    
    for (const thisComponent of Start_test1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Start_test1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Start_test1'-------
    // get current time
    t = Start_test1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_test1_text* updates
    if (t >= 0.0 && start_test1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_test1_text.tStart = t;  // (not accounting for frame time here)
      start_test1_text.frameNStart = frameN;  // exact frame index
      
      start_test1_text.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 1.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_start_test1]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *continue_text_start_test1* updates
    if (t >= 1 && continue_text_start_test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_start_test1.tStart = t;  // (not accounting for frame time here)
      continue_text_start_test1.frameNStart = frameN;  // exact frame index
      
      continue_text_start_test1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Start_test1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Start_test1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Start_test1'-------
    for (const thisComponent of Start_test1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    // the Routine "Start_test1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Trial_test1Components;
function Trial_test1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Trial_test1'-------
    t = 0;
    Trial_test1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the trial_mouse
    trial_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: WAV_file,
    secs: 1,
    });
    sound_1.secs=1;
    sound_1.setVolume(1.0);
    word_1_text_test1.setText(word_1);
    word_2_text_test1.setText(word_2);
    // keep track of which components have finished
    Trial_test1Components = [];
    Trial_test1Components.push(trial_mouse);
    Trial_test1Components.push(sound_1);
    Trial_test1Components.push(ear_img);
    Trial_test1Components.push(fixation);
    Trial_test1Components.push(word_1_text_test1);
    Trial_test1Components.push(word_2_text_test1);
    
    for (const thisComponent of Trial_test1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Trial_test1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Trial_test1'-------
    // get current time
    t = Trial_test1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trial_mouse* updates
    //waschanged
    if (t >= waitTime && trial_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_mouse.tStart = t;  // (not accounting for frame time here)
      trial_mouse.frameNStart = frameN;  // exact frame index
      
      trial_mouse.status = PsychoJS.Status.STARTED;
      trial_mouse.mouseClock.reset();
      prevButtonState = trial_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (trial_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = trial_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [word_1_text_test1, word_2_text_test1]) {
            if (obj.contains(trial_mouse)) {
              gotValidClick = true;
              trial_mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // start/stop sound_1
    if (t >= 1.0 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1 > 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
      }
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    
    // *ear_img* updates
    if (t >= 1.0 && ear_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ear_img.tStart = t;  // (not accounting for frame time here)
      ear_img.frameNStart = frameN;  // exact frame index
      
      ear_img.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ear_img.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ear_img.setAutoDraw(false);
    }
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    //waschanged
    // *word_1_text_test1* updates
    if (t >= waitTime && word_1_text_test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_1_text_test1.tStart = t;  // (not accounting for frame time here)
      word_1_text_test1.frameNStart = frameN;  // exact frame index
      
      word_1_text_test1.setAutoDraw(true);
    }

    
    // *word_2_text_test1* updates
    if (t >= waitTime && word_2_text_test1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_2_text_test1.tStart = t;  // (not accounting for frame time here)
      word_2_text_test1.frameNStart = frameN;  // exact frame index
      
      word_2_text_test1.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Trial_test1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Trial_test1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Trial_test1'-------
    for (const thisComponent of Trial_test1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = trial_mouse.getPos();
    _mouseButtons = trial_mouse.getPressed();
    psychoJS.experiment.addData('trial_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('trial_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('trial_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('trial_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('trial_mouse.rightButton', _mouseButtons[2]);
    if (trial_mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('trial_mouse.clicked_name', trial_mouse.clicked_name[0]);}
    sound_1.stop();  // ensure sound has stopped at end of routine
    // the Routine "Trial_test1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intermin_breakComponents;
function Intermin_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intermin_break'-------
    t = 0;
    Intermin_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_break
    mouse_break.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intermin_breakComponents = [];
    Intermin_breakComponents.push(break_text);
    Intermin_breakComponents.push(mouse_break);
    Intermin_breakComponents.push(continue_text_break);
    
    for (const thisComponent of Intermin_breakComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intermin_breakRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intermin_break'-------
    // get current time
    t = Intermin_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }
    

    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break_text.setAutoDraw(false);
    }
    // *mouse_break* updates
    if (t >= 60 && mouse_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_break.tStart = t;  // (not accounting for frame time here)
      mouse_break.frameNStart = frameN;  // exact frame index
      
      mouse_break.status = PsychoJS.Status.STARTED;
      mouse_break.mouseClock.reset();
      prevButtonState = mouse_break.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_break.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_break.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_break]) {
            if (obj.contains(mouse_break)) {
              gotValidClick = true;
              mouse_break.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *continue_text_break* updates
    if (t >= 60 && continue_text_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_break.tStart = t;  // (not accounting for frame time here)
      continue_text_break.frameNStart = frameN;  // exact frame index
      
      continue_text_break.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intermin_breakComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intermin_breakRoutineEnd() {
  return async function () {
    //------Ending Routine 'Intermin_break'-------
    for (const thisComponent of Intermin_breakComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_break.getPos();
    _mouseButtons = mouse_break.getPressed();
    psychoJS.experiment.addData('mouse_break.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_break.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_break.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_break.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_break.rightButton', _mouseButtons[2]);
    if (mouse_break.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_break.clicked_name', mouse_break.clicked_name[0]);}
    // the Routine "Intermin_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intro_6Components;
function Intro_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_6'-------
    t = 0;
    Intro_6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_6
    intro_mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intro_6Components = [];
    Intro_6Components.push(intro_mouse_6);
    Intro_6Components.push(continue_text_6);
    Intro_6Components.push(intro_text_6);
    
    for (const thisComponent of Intro_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intro_6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_6'-------
    // get current time
    t = Intro_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *intro_mouse_6* updates
    if (t >= 1 && intro_mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_6.tStart = t;  // (not accounting for frame time here)
      intro_mouse_6.frameNStart = frameN;  // exact frame index
      
      intro_mouse_6.status = PsychoJS.Status.STARTED;
      intro_mouse_6.mouseClock.reset();
      prevButtonState = intro_mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_6]) {
            if (obj.contains(intro_mouse_6)) {
              gotValidClick = true;
              intro_mouse_6.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *continue_text_6* updates
    if (t >= 1 && continue_text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_6.tStart = t;  // (not accounting for frame time here)
      continue_text_6.frameNStart = frameN;  // exact frame index
      
      continue_text_6.setAutoDraw(true);
    }

    
    // *intro_text_6* updates
    if (t >= 0.0 && intro_text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_6.tStart = t;  // (not accounting for frame time here)
      intro_text_6.frameNStart = frameN;  // exact frame index
      
      intro_text_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_6RoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_6'-------
    for (const thisComponent of Intro_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_6.getPos();
    _mouseButtons = intro_mouse_6.getPressed();
    psychoJS.experiment.addData('intro_mouse_6.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_6.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_6.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_6.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_6.rightButton', _mouseButtons[2]);
    if (intro_mouse_6.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_6.clicked_name', intro_mouse_6.clicked_name[0]);}
    // the Routine "Intro_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Intro_7Components;
function Intro_7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro_7'-------
    t = 0;
    Intro_7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_7
    intro_mouse_7.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Intro_7Components = [];
    Intro_7Components.push(intro_text_7);
    Intro_7Components.push(continue_text_7);
    Intro_7Components.push(intro_mouse_7);
    
    for (const thisComponent of Intro_7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intro_7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro_7'-------
    // get current time
    t = Intro_7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text_7* updates
    if (t >= 0.0 && intro_text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_7.tStart = t;  // (not accounting for frame time here)
      intro_text_7.frameNStart = frameN;  // exact frame index
      
      intro_text_7.setAutoDraw(true);
    }

    
    // *continue_text_7* updates
    if (t >= 1 && continue_text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_7.tStart = t;  // (not accounting for frame time here)
      continue_text_7.frameNStart = frameN;  // exact frame index
      
      continue_text_7.setAutoDraw(true);
    }

    // *intro_mouse_7* updates
    if (t >= 1 && intro_mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_7.tStart = t;  // (not accounting for frame time here)
      intro_mouse_7.frameNStart = frameN;  // exact frame index
      
      intro_mouse_7.status = PsychoJS.Status.STARTED;
      intro_mouse_7.mouseClock.reset();
      prevButtonState = intro_mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_7]) {
            if (obj.contains(intro_mouse_7)) {
              gotValidClick = true;
              intro_mouse_7.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intro_7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Intro_7RoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro_7'-------
    for (const thisComponent of Intro_7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_7.getPos();
    _mouseButtons = intro_mouse_7.getPressed();
    psychoJS.experiment.addData('intro_mouse_7.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_7.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_7.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_7.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_7.rightButton', _mouseButtons[2]);
    if (intro_mouse_7.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_7.clicked_name', intro_mouse_7.clicked_name[0]);}
    // the Routine "Intro_7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var intro_8Components;
function intro_8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'intro_8'-------
    t = 0;
    intro_8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_8
    intro_mouse_8.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    intro_8Components = [];
    intro_8Components.push(intro_text_8);
    intro_8Components.push(intro_mouse_8);
    intro_8Components.push(continue_text_8);
    
    for (const thisComponent of intro_8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro_8RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'intro_8'-------
    // get current time
    t = intro_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text_8* updates
    if (t >= 0.0 && intro_text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_8.tStart = t;  // (not accounting for frame time here)
      intro_text_8.frameNStart = frameN;  // exact frame index
      
      intro_text_8.setAutoDraw(true);
    }

    // *intro_mouse_8* updates
    if (t >= 1 && intro_mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_8.tStart = t;  // (not accounting for frame time here)
      intro_mouse_8.frameNStart = frameN;  // exact frame index
      
      intro_mouse_8.status = PsychoJS.Status.STARTED;
      intro_mouse_8.mouseClock.reset();
      prevButtonState = intro_mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_8]) {
            if (obj.contains(intro_mouse_8)) {
              gotValidClick = true;
              intro_mouse_8.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *continue_text_8* updates
    if (t >= 1 && continue_text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_8.tStart = t;  // (not accounting for frame time here)
      continue_text_8.frameNStart = frameN;  // exact frame index
      
      continue_text_8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro_8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_8RoutineEnd() {
  return async function () {
    //------Ending Routine 'intro_8'-------
    for (const thisComponent of intro_8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_8.getPos();
    _mouseButtons = intro_mouse_8.getPressed();
    psychoJS.experiment.addData('intro_mouse_8.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_8.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_8.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_8.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_8.rightButton', _mouseButtons[2]);
    if (intro_mouse_8.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_8.clicked_name', intro_mouse_8.clicked_name[0]);}
    // the Routine "intro_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var intro_9Components;
function intro_9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'intro_9'-------
    t = 0;
    intro_9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the intro_mouse_9
    intro_mouse_9.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    intro_9Components = [];
    intro_9Components.push(intro_mouse_9);
    intro_9Components.push(continue_text_9);
    intro_9Components.push(intro_text_9);
    
    for (const thisComponent of intro_9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function intro_9RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'intro_9'-------
    // get current time
    t = intro_9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *intro_mouse_9* updates
    if (t >= 1 && intro_mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_mouse_9.tStart = t;  // (not accounting for frame time here)
      intro_mouse_9.frameNStart = frameN;  // exact frame index
      
      intro_mouse_9.status = PsychoJS.Status.STARTED;
      intro_mouse_9.mouseClock.reset();
      prevButtonState = intro_mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (intro_mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = intro_mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_9]) {
            if (obj.contains(intro_mouse_9)) {
              gotValidClick = true;
              intro_mouse_9.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *continue_text_9* updates
    if (t >= 1 && continue_text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_9.tStart = t;  // (not accounting for frame time here)
      continue_text_9.frameNStart = frameN;  // exact frame index
      
      continue_text_9.setAutoDraw(true);
    }

    
    // *intro_text_9* updates
    if (t >= 0.0 && intro_text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text_9.tStart = t;  // (not accounting for frame time here)
      intro_text_9.frameNStart = frameN;  // exact frame index
      
      intro_text_9.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of intro_9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_9RoutineEnd() {
  return async function () {
    //------Ending Routine 'intro_9'-------
    for (const thisComponent of intro_9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = intro_mouse_9.getPos();
    _mouseButtons = intro_mouse_9.getPressed();
    psychoJS.experiment.addData('intro_mouse_9.x', _mouseXYs[0]);
    psychoJS.experiment.addData('intro_mouse_9.y', _mouseXYs[1]);
    psychoJS.experiment.addData('intro_mouse_9.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('intro_mouse_9.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('intro_mouse_9.rightButton', _mouseButtons[2]);
    if (intro_mouse_9.clicked_name.length > 0) {
      psychoJS.experiment.addData('intro_mouse_9.clicked_name', intro_mouse_9.clicked_name[0]);}
    // the Routine "intro_9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Practice_test2Components;
function Practice_test2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Practice_test2'-------
    t = 0;
    Practice_test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_practice_test2 = new sound.Sound({
    win: psychoJS.window,
    value: WAV_file,
    secs: 1,
    });
    sound_practice_test2.secs=1;
    sound_practice_test2.setVolume(1.0);
    // setup some python lists for storing info about the mouse_parctice_test2
    mouse_parctice_test2.clicked_name = [];
    gotValidClick = false; // until a click is received
    word_practice_test2_text.setText(word);
    // keep track of which components have finished
    Practice_test2Components = [];
    Practice_test2Components.push(fixation_practice_test2);
    Practice_test2Components.push(sound_practice_test2);
    Practice_test2Components.push(mouse_parctice_test2);
    Practice_test2Components.push(word_practice_test2_text);
    Practice_test2Components.push(yes_text_practice_test2);
    Practice_test2Components.push(no_text_practice_test2);
    Practice_test2Components.push(ear_img_test2);
    
    for (const thisComponent of Practice_test2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Practice_test2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Practice_test2'-------
    // get current time
    t = Practice_test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_practice_test2* updates
    if (t >= 0.0 && fixation_practice_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_practice_test2.tStart = t;  // (not accounting for frame time here)
      fixation_practice_test2.frameNStart = frameN;  // exact frame index
      
      fixation_practice_test2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_practice_test2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_practice_test2.setAutoDraw(false);
    }
    // start/stop sound_practice_test2
    if (t >= 1 && sound_practice_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_practice_test2.tStart = t;  // (not accounting for frame time here)
      sound_practice_test2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_practice_test2.play(); });  // screen flip
      sound_practice_test2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_practice_test2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1 > 0.5) {
        sound_practice_test2.stop();  // stop the sound (if longer than duration)
      }
      sound_practice_test2.status = PsychoJS.Status.FINISHED;
    }
    // *mouse_parctice_test2* updates
    if (t >= waitTime && mouse_parctice_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_parctice_test2.tStart = t;  // (not accounting for frame time here)
      mouse_parctice_test2.frameNStart = frameN;  // exact frame index
      
      mouse_parctice_test2.status = PsychoJS.Status.STARTED;
      mouse_parctice_test2.mouseClock.reset();
      prevButtonState = mouse_parctice_test2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_parctice_test2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_parctice_test2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [yes_text_practice_test2, no_text_practice_test2]) {
            if (obj.contains(mouse_parctice_test2)) {
              gotValidClick = true;
              mouse_parctice_test2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *word_practice_test2_text* updates
    if (t >= 1 && word_practice_test2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_practice_test2_text.tStart = t;  // (not accounting for frame time here)
      word_practice_test2_text.frameNStart = frameN;  // exact frame index
      
      word_practice_test2_text.setAutoDraw(true);
    }

    
    // *yes_text_practice_test2* updates
    if (t >= waitTime && yes_text_practice_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_text_practice_test2.tStart = t;  // (not accounting for frame time here)
      yes_text_practice_test2.frameNStart = frameN;  // exact frame index
      
      yes_text_practice_test2.setAutoDraw(true);
    }
    // *no_text_practice_test2* updates
    if (t >= waitTime && no_text_practice_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_text_practice_test2.tStart = t;  // (not accounting for frame time here)
      no_text_practice_test2.frameNStart = frameN;  // exact frame index
      
      no_text_practice_test2.setAutoDraw(true);
    }
    
    // *ear_img_test2* updates
    if (t >= 1 && ear_img_test2.status === PsychoJS.Status.NOT_STARTED && false) {
      // keep track of start time/frame for later
      ear_img_test2.tStart = t;  // (not accounting for frame time here)
      ear_img_test2.frameNStart = frameN;  // exact frame index
      
      ear_img_test2.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ear_img_test2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ear_img_test2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Practice_test2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Practice_test2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Practice_test2'-------
    for (const thisComponent of Practice_test2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_practice_test2.stop();  // ensure sound has stopped at end of routine
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_parctice_test2.getPos();
    _mouseButtons = mouse_parctice_test2.getPressed();
    psychoJS.experiment.addData('mouse_parctice_test2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_parctice_test2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_parctice_test2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_parctice_test2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_parctice_test2.rightButton', _mouseButtons[2]);
    if (mouse_parctice_test2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_parctice_test2.clicked_name', mouse_parctice_test2.clicked_name[0]);}
    // the Routine "Practice_test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Start_test2Components;
function Start_test2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Start_test2'-------
    t = 0;
    Start_test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the start_test2_mouse
    start_test2_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Start_test2Components = [];
    Start_test2Components.push(start_test2_text);
    Start_test2Components.push(continue_text_10);
    Start_test2Components.push(start_test2_mouse);
    
    for (const thisComponent of Start_test2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Start_test2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Start_test2'-------
    // get current time
    t = Start_test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_test2_text* updates
    if (t >= 0.0 && start_test2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_test2_text.tStart = t;  // (not accounting for frame time here)
      start_test2_text.frameNStart = frameN;  // exact frame index
      
      start_test2_text.setAutoDraw(true);
    }

    
    // *continue_text_10* updates
    if (t >= 1 && continue_text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_text_10.tStart = t;  // (not accounting for frame time here)
      continue_text_10.frameNStart = frameN;  // exact frame index
      
      continue_text_10.setAutoDraw(true);
    }

    // *start_test2_mouse* updates
    if (t >= waitTime-1 && start_test2_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_test2_mouse.tStart = t;  // (not accounting for frame time here)
      start_test2_mouse.frameNStart = frameN;  // exact frame index
      
      start_test2_mouse.status = PsychoJS.Status.STARTED;
      start_test2_mouse.mouseClock.reset();
      prevButtonState = start_test2_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (start_test2_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = start_test2_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [continue_text_10]) {
            if (obj.contains(start_test2_mouse)) {
              gotValidClick = true;
              start_test2_mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Start_test2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Start_test2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Start_test2'-------
    for (const thisComponent of Start_test2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = start_test2_mouse.getPos();
    _mouseButtons = start_test2_mouse.getPressed();
    psychoJS.experiment.addData('start_test2_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('start_test2_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('start_test2_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('start_test2_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('start_test2_mouse.rightButton', _mouseButtons[2]);
    if (start_test2_mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('start_test2_mouse.clicked_name', start_test2_mouse.clicked_name[0]);}
    // the Routine "Start_test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Trial_test2Components;
function Trial_test2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Trial_test2'-------
    t = 0;
    Trial_test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    sound_test2 = new sound.Sound({
    win: psychoJS.window,
    value: WAV_file,
    secs: 1,
    });
    sound_test2.secs=1;
    sound_test2.setVolume(1.0);
    // setup some python lists for storing info about the mouse_test2
    mouse_test2.clicked_name = [];
    gotValidClick = false; // until a click is received
    word_test2_text.setText(word);
    // keep track of which components have finished
    Trial_test2Components = [];
    Trial_test2Components.push(sound_test2);
    Trial_test2Components.push(mouse_test2);
    Trial_test2Components.push(word_test2_text);
    Trial_test2Components.push(fixation_test2);
    Trial_test2Components.push(ear_img_trial_test2);
    Trial_test2Components.push(yes_text_trial_test2);
    Trial_test2Components.push(no_text_trial_test2);
    
    for (const thisComponent of Trial_test2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Trial_test2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Trial_test2'-------
    // get current time
    t = Trial_test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_test2
    if (t >= 1 && sound_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_test2.tStart = t;  // (not accounting for frame time here)
      sound_test2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_test2.play(); });  // screen flip
      sound_test2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 1 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_test2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (1 > 0.5) {
        sound_test2.stop();  // stop the sound (if longer than duration)
      }
      sound_test2.status = PsychoJS.Status.FINISHED;
    }
    // *mouse_test2* updates
    if (t >= waitTime && mouse_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_test2.tStart = t;  // (not accounting for frame time here)
      mouse_test2.frameNStart = frameN;  // exact frame index
      
      mouse_test2.status = PsychoJS.Status.STARTED;
      mouse_test2.mouseClock.reset();
      prevButtonState = mouse_test2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_test2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_test2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [yes_text_trial_test2, no_text_trial_test2]) {
            if (obj.contains(mouse_test2)) {
              gotValidClick = true;
              mouse_test2.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *word_test2_text* updates
    if (t >= 1 && word_test2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      word_test2_text.tStart = t;  // (not accounting for frame time here)
      word_test2_text.frameNStart = frameN;  // exact frame index
      
      word_test2_text.setAutoDraw(true);
    }

    
    // *fixation_test2* updates
    if (t >= 0.0 && fixation_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_test2.tStart = t;  // (not accounting for frame time here)
      fixation_test2.frameNStart = frameN;  // exact frame index
      
      fixation_test2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_test2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_test2.setAutoDraw(false);
    }
    
    // *ear_img_trial_test2* updates
    if (t >= 1 && ear_img_trial_test2.status === PsychoJS.Status.NOT_STARTED && false) {
      // keep track of start time/frame for later
      ear_img_trial_test2.tStart = t;  // (not accounting for frame time here)
      ear_img_trial_test2.frameNStart = frameN;  // exact frame index
      
      ear_img_trial_test2.setAutoDraw(true);
    }

    frameRemains = 1 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ear_img_trial_test2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ear_img_trial_test2.setAutoDraw(false);
    }
    
    // *yes_text_trial_test2* updates
    if (t >= waitTime && yes_text_trial_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_text_trial_test2.tStart = t;  // (not accounting for frame time here)
      yes_text_trial_test2.frameNStart = frameN;  // exact frame index
      
      yes_text_trial_test2.setAutoDraw(true);
    }
    // *no_text_trial_test2* updates
    if (t >= waitTime && no_text_trial_test2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_text_trial_test2.tStart = t;  // (not accounting for frame time here)
      no_text_trial_test2.frameNStart = frameN;  // exact frame index
      
      no_text_trial_test2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      wasQuit = true;
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Trial_test2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Trial_test2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Trial_test2'-------
    for (const thisComponent of Trial_test2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_test2.stop();  // ensure sound has stopped at end of routine
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_test2.getPos();
    _mouseButtons = mouse_test2.getPressed();
    psychoJS.experiment.addData('mouse_test2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_test2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_test2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_test2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_test2.rightButton', _mouseButtons[2]);
    if (mouse_test2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_test2.clicked_name', mouse_test2.clicked_name[0]);}
    // the Routine "Trial_test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the end_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(end_mouse);
    EndComponents.push(end_text);
    
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End'-------
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *end_mouse* updates
    if (t >= 2 && end_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_mouse.tStart = t;  // (not accounting for frame time here)
      end_mouse.frameNStart = frameN;  // exact frame index
      
      end_mouse.status = PsychoJS.Status.STARTED;
      end_mouse.mouseClock.reset();
      prevButtonState = end_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (end_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = end_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (end_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      end_text.setAutoDraw(false);
      continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('實驗遭強制跳出。', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd() {
  return async function () {
    //------Ending Routine 'End'-------
    for (const thisComponent of EndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = end_mouse.getPos();
    _mouseButtons = end_mouse.getPressed();
    psychoJS.experiment.addData('end_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('end_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('end_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('end_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('end_mouse.rightButton', _mouseButtons[2]);
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

//   window.location.href = "https://forms.gle/se3CJtiyxTf4W8qd6";
  return Scheduler.Event.QUIT;
}