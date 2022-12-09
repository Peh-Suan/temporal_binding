/************* 
 * Test Test *
 *************/


// store info about the experiment session:
let expName = 'test';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

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
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'oneMinute01_test.mp4', 'path': 'oneMinute01_test.mp4'},
    {'name': 'movieVersionControlSheet.xlsx', 'path': 'movieVersionControlSheet.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

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


var IntroClock;
var Intro_instruction;
var Intro_response;
var BlockStartClock;
var BlockStart_instruction1;
var BlockStart_instruction2;
var BlockStart_response;
var VarSetClock;
var VarSet_instruction1;
var VarSet_instruction2;
var VarSet_response;
var TrialClock;
var movieClock;
var movie;
var Trial_reminder;
var polygon_start;
var Trial_response;
var InputTimeClock;
var InputTime_instruction1;
var InputTime_response;
var polygon_2;
var InputTime_instruction2;
var input_box;
var EndClock;
var End_instruction;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  Intro_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'Intro_instruction',
    text: '歡迎參加本次實驗 ：）',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Intro_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BlockStart"
  BlockStartClock = new util.Clock();
  BlockStart_instruction1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BlockStart_instruction1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  BlockStart_instruction2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BlockStart_instruction2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  BlockStart_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "VarSet"
  VarSetClock = new util.Clock();
  VarSet_instruction1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'VarSet_instruction1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  VarSet_instruction2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'VarSet_instruction2',
    text: 'Please hit the spacebar to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  VarSet_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  movieClock = new util.Clock();
  movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie',
    units: undefined,
    movie: 'oneMinute01_test.mp4',
    pos: [0, 0],
    size: [1.575, 0.866],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    });
  Trial_reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'Trial_reminder',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.48], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  polygon_start = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_start', 
    width: [1, 1.1][0], height: [1, 1.1][1],
    ori: 0.0, pos: [0, (- 0.1)],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('grey'),
    fillColor: new util.Color('grey'),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  Trial_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "InputTime"
  InputTimeClock = new util.Clock();
  InputTime_instruction1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'InputTime_instruction1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  InputTime_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  polygon_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2', 
    width: [0.4, 0.128][0], height: [0.4, 0.128][1],
    ori: 0.0, pos: [0, (- 0.008)],
    lineWidth: 0.5, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  InputTime_instruction2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'InputTime_instruction2',
    text: '請輸入所看到的數值，確認後按下Enter鍵',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: 1.52, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('yellow'),  opacity: undefined,
    depth: -3.0 
  });
  
  input_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'input_box',
    text: '輸入',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  End_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'End_instruction',
    text: 'All Done!\n\n\nThanks!!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _Intro_response_allKeys;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intro' ---
    t = 0;
    IntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Intro_response.keys = undefined;
    Intro_response.rt = undefined;
    _Intro_response_allKeys = [];
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(Intro_instruction);
    IntroComponents.push(Intro_response);
    
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intro' ---
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Intro_instruction* updates
    if (t >= 0.0 && Intro_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Intro_instruction.tStart = t;  // (not accounting for frame time here)
      Intro_instruction.frameNStart = frameN;  // exact frame index
      
      Intro_instruction.setAutoDraw(true);
    }

    
    // *Intro_response* updates
    if (t >= 0.0 && Intro_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Intro_response.tStart = t;  // (not accounting for frame time here)
      Intro_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Intro_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Intro_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Intro_response.clearEvents(); });
    }

    if (Intro_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Intro_response.getKeys({keyList: ['return'], waitRelease: false});
      _Intro_response_allKeys = _Intro_response_allKeys.concat(theseKeys);
      if (_Intro_response_allKeys.length > 0) {
        Intro_response.keys = _Intro_response_allKeys[_Intro_response_allKeys.length - 1].name;  // just the last key pressed
        Intro_response.rt = _Intro_response_allKeys[_Intro_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intro' ---
    IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Intro_response.corr, level);
    }
    psychoJS.experiment.addData('Intro_response.keys', Intro_response.keys);
    if (typeof Intro_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Intro_response.rt', Intro_response.rt);
        routineTimer.reset();
        }
    
    Intro_response.stop();
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'movieVersionControlSheet.xlsx',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    blocks.forEach(function() {
      snapshot = blocks.getSnapshot();
    
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(BlockStartRoutineBegin(snapshot));
      blocksLoopScheduler.add(BlockStartRoutineEachFrame());
      blocksLoopScheduler.add(BlockStartRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(VarSetRoutineBegin(snapshot));
      trialsLoopScheduler.add(VarSetRoutineEachFrame());
      trialsLoopScheduler.add(VarSetRoutineEnd(snapshot));
      trialsLoopScheduler.add(TrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(TrialRoutineEachFrame());
      trialsLoopScheduler.add(TrialRoutineEnd(snapshot));
      trialsLoopScheduler.add(InputTimeRoutineBegin(snapshot));
      trialsLoopScheduler.add(InputTimeRoutineEachFrame());
      trialsLoopScheduler.add(InputTimeRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
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
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _BlockStart_response_allKeys;
var BlockStartComponents;
function BlockStartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlockStart' ---
    t = 0;
    BlockStartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    BlockStart_instruction1.setText(blockInstructions);
    BlockStart_instruction2.setText(blockInstructions2);
    BlockStart_response.keys = undefined;
    BlockStart_response.rt = undefined;
    _BlockStart_response_allKeys = [];
    // keep track of which components have finished
    BlockStartComponents = [];
    BlockStartComponents.push(BlockStart_instruction1);
    BlockStartComponents.push(BlockStart_instruction2);
    BlockStartComponents.push(BlockStart_response);
    
    BlockStartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BlockStartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlockStart' ---
    // get current time
    t = BlockStartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BlockStart_instruction1* updates
    if (t >= 0.0 && BlockStart_instruction1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BlockStart_instruction1.tStart = t;  // (not accounting for frame time here)
      BlockStart_instruction1.frameNStart = frameN;  // exact frame index
      
      BlockStart_instruction1.setAutoDraw(true);
    }

    
    // *BlockStart_instruction2* updates
    if (t >= 0.0 && BlockStart_instruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BlockStart_instruction2.tStart = t;  // (not accounting for frame time here)
      BlockStart_instruction2.frameNStart = frameN;  // exact frame index
      
      BlockStart_instruction2.setAutoDraw(true);
    }

    
    // *BlockStart_response* updates
    if (t >= 0.0 && BlockStart_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BlockStart_response.tStart = t;  // (not accounting for frame time here)
      BlockStart_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { BlockStart_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { BlockStart_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { BlockStart_response.clearEvents(); });
    }

    if (BlockStart_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = BlockStart_response.getKeys({keyList: ['return'], waitRelease: false});
      _BlockStart_response_allKeys = _BlockStart_response_allKeys.concat(theseKeys);
      if (_BlockStart_response_allKeys.length > 0) {
        BlockStart_response.keys = _BlockStart_response_allKeys[_BlockStart_response_allKeys.length - 1].name;  // just the last key pressed
        BlockStart_response.rt = _BlockStart_response_allKeys[_BlockStart_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BlockStartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockStartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlockStart' ---
    BlockStartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(BlockStart_response.corr, level);
    }
    psychoJS.experiment.addData('BlockStart_response.keys', BlockStart_response.keys);
    if (typeof BlockStart_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('BlockStart_response.rt', BlockStart_response.rt);
        routineTimer.reset();
        }
    
    BlockStart_response.stop();
    // the Routine "BlockStart" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _VarSet_response_allKeys;
var VarSetComponents;
function VarSetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'VarSet' ---
    t = 0;
    VarSetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    VarSet_instruction1.setText(trialInstructions);
    VarSet_response.keys = undefined;
    VarSet_response.rt = undefined;
    _VarSet_response_allKeys = [];
    // keep track of which components have finished
    VarSetComponents = [];
    VarSetComponents.push(VarSet_instruction1);
    VarSetComponents.push(VarSet_instruction2);
    VarSetComponents.push(VarSet_response);
    
    VarSetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function VarSetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'VarSet' ---
    // get current time
    t = VarSetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *VarSet_instruction1* updates
    if (t >= 0.0 && VarSet_instruction1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      VarSet_instruction1.tStart = t;  // (not accounting for frame time here)
      VarSet_instruction1.frameNStart = frameN;  // exact frame index
      
      VarSet_instruction1.setAutoDraw(true);
    }

    
    // *VarSet_instruction2* updates
    if (t >= 0.0 && VarSet_instruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      VarSet_instruction2.tStart = t;  // (not accounting for frame time here)
      VarSet_instruction2.frameNStart = frameN;  // exact frame index
      
      VarSet_instruction2.setAutoDraw(true);
    }

    
    // *VarSet_response* updates
    if (t >= 0.0 && VarSet_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      VarSet_response.tStart = t;  // (not accounting for frame time here)
      VarSet_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { VarSet_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { VarSet_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { VarSet_response.clearEvents(); });
    }

    if (VarSet_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = VarSet_response.getKeys({keyList: ['return'], waitRelease: false});
      _VarSet_response_allKeys = _VarSet_response_allKeys.concat(theseKeys);
      if (_VarSet_response_allKeys.length > 0) {
        VarSet_response.keys = _VarSet_response_allKeys[_VarSet_response_allKeys.length - 1].name;  // just the last key pressed
        VarSet_response.rt = _VarSet_response_allKeys[_VarSet_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    VarSetComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function VarSetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'VarSet' ---
    VarSetComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(VarSet_response.corr, level);
    }
    psychoJS.experiment.addData('VarSet_response.keys', VarSet_response.keys);
    if (typeof VarSet_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('VarSet_response.rt', VarSet_response.rt);
        routineTimer.reset();
        }
    
    VarSet_response.stop();
    // the Routine "VarSet" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Trial_response_allKeys;
var TrialComponents;
function TrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Trial' ---
    t = 0;
    TrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Trial_reminder.setText(trialReminder);
    Trial_response.keys = undefined;
    Trial_response.rt = undefined;
    _Trial_response_allKeys = [];
    // keep track of which components have finished
    TrialComponents = [];
    TrialComponents.push(movie);
    TrialComponents.push(Trial_reminder);
    TrialComponents.push(polygon_start);
    TrialComponents.push(Trial_response);
    
    TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function TrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Trial' ---
    // get current time
    t = TrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie* updates
    if (t >= 0.0 && movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie.tStart = t;  // (not accounting for frame time here)
      movie.frameNStart = frameN;  // exact frame index
      
      movie.setAutoDraw(true);
      movie.play();
    }

    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (movie.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      movie.setAutoDraw(false);
    }

    
    // *Trial_reminder* updates
    if (t >= 0.0 && Trial_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial_reminder.tStart = t;  // (not accounting for frame time here)
      Trial_reminder.frameNStart = frameN;  // exact frame index
      
      Trial_reminder.setAutoDraw(true);
    }

    
    // *polygon_start* updates
    if (t >= 0.0 && polygon_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_start.tStart = t;  // (not accounting for frame time here)
      polygon_start.frameNStart = frameN;  // exact frame index
      
      polygon_start.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (polygon_start.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      polygon_start.setAutoDraw(false);
    }
    
    // *Trial_response* updates
    if (t >= 0.0 && Trial_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Trial_response.tStart = t;  // (not accounting for frame time here)
      Trial_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Trial_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Trial_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Trial_response.clearEvents(); });
    }

    if (Trial_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = Trial_response.getKeys({keyList: ['return'], waitRelease: false});
      _Trial_response_allKeys = _Trial_response_allKeys.concat(theseKeys);
      if (_Trial_response_allKeys.length > 0) {
        Trial_response.keys = _Trial_response_allKeys[_Trial_response_allKeys.length - 1].name;  // just the last key pressed
        Trial_response.rt = _Trial_response_allKeys[_Trial_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Trial' ---
    TrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    movie.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Trial_response.corr, level);
    }
    psychoJS.experiment.addData('Trial_response.keys', Trial_response.keys);
    if (typeof Trial_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Trial_response.rt', Trial_response.rt);
        routineTimer.reset();
        }
    
    Trial_response.stop();
    // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _InputTime_response_allKeys;
var InputTimeComponents;
function InputTimeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'InputTime' ---
    t = 0;
    InputTimeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    InputTime_instruction1.setText(trialQuestion);
    InputTime_response.keys = undefined;
    InputTime_response.rt = undefined;
    _InputTime_response_allKeys = [];
    input_box.setText('輸入');
    input_box.refresh();
    // keep track of which components have finished
    InputTimeComponents = [];
    InputTimeComponents.push(InputTime_instruction1);
    InputTimeComponents.push(InputTime_response);
    InputTimeComponents.push(polygon_2);
    InputTimeComponents.push(InputTime_instruction2);
    InputTimeComponents.push(input_box);
    
    InputTimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InputTimeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'InputTime' ---
    // get current time
    t = InputTimeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InputTime_instruction1* updates
    if (t >= 0.0 && InputTime_instruction1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InputTime_instruction1.tStart = t;  // (not accounting for frame time here)
      InputTime_instruction1.frameNStart = frameN;  // exact frame index
      
      InputTime_instruction1.setAutoDraw(true);
    }

    
    // *InputTime_response* updates
    if (t >= 0.0 && InputTime_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InputTime_response.tStart = t;  // (not accounting for frame time here)
      InputTime_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InputTime_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InputTime_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InputTime_response.clearEvents(); });
    }

    if (InputTime_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = InputTime_response.getKeys({keyList: ['return'], waitRelease: false});
      _InputTime_response_allKeys = _InputTime_response_allKeys.concat(theseKeys);
      if (_InputTime_response_allKeys.length > 0) {
        InputTime_response.keys = _InputTime_response_allKeys[_InputTime_response_allKeys.length - 1].name;  // just the last key pressed
        InputTime_response.rt = _InputTime_response_allKeys[_InputTime_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    
    // *InputTime_instruction2* updates
    if (t >= 0.0 && InputTime_instruction2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InputTime_instruction2.tStart = t;  // (not accounting for frame time here)
      InputTime_instruction2.frameNStart = frameN;  // exact frame index
      
      InputTime_instruction2.setAutoDraw(true);
    }

    
    // *input_box* updates
    if (t >= 0.0 && input_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      input_box.tStart = t;  // (not accounting for frame time here)
      input_box.frameNStart = frameN;  // exact frame index
      
      input_box.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InputTimeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InputTimeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'InputTime' ---
    InputTimeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(InputTime_response.corr, level);
    }
    psychoJS.experiment.addData('InputTime_response.keys', InputTime_response.keys);
    if (typeof InputTime_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('InputTime_response.rt', InputTime_response.rt);
        routineTimer.reset();
        }
    
    InputTime_response.stop();
    psychoJS.experiment.addData('input_box.text',input_box.text)
    // the Routine "InputTime" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(End_instruction);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *End_instruction* updates
    if (t >= 0.0 && End_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End_instruction.tStart = t;  // (not accounting for frame time here)
      End_instruction.frameNStart = frameN;  // exact frame index
      
      End_instruction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (End_instruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      End_instruction.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
  
  return Scheduler.Event.QUIT;
}
