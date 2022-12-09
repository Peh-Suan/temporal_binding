#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.4),
    on Thu Dec  8 23:57:12 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.4'
expName = 'test'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/benson/PsychoPy_test/test_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "Intro" ---
Intro_instruction = visual.TextStim(win=win, name='Intro_instruction',
    text='歡迎參加本次實驗 ：）',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Intro_response = keyboard.Keyboard()

# --- Initialize components for Routine "BlockStart" ---
BlockStart_instruction1 = visual.TextStim(win=win, name='BlockStart_instruction1',
    text='',
    font='Open Sans',
    pos=(0, .5), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
BlockStart_instruction2 = visual.TextStim(win=win, name='BlockStart_instruction2',
    text='',
    font='Open Sans',
    pos=(0, -.5), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
BlockStart_response = keyboard.Keyboard()

# --- Initialize components for Routine "VarSet" ---
VarSet_instruction1 = visual.TextStim(win=win, name='VarSet_instruction1',
    text='',
    font='Open Sans',
    pos=(0, .5), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
VarSet_instruction2 = visual.TextStim(win=win, name='VarSet_instruction2',
    text='Please hit the spacebar to continue',
    font='Open Sans',
    pos=(0, -.5), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
VarSet_response = keyboard.Keyboard()

# --- Initialize components for Routine "Trial" ---
movie = visual.MovieStim(
    win, name='movie',
    filename='test.MOV', movieLib='ffpyplayer',
    loop=False, volume=1.0,
    pos=(0, 0), size=None, units=None,
    ori=0.0, anchor='center',opacity=None, contrast=1.0,
)
Trial_response = keyboard.Keyboard()
polygon = visual.Rect(
    win=win, name='polygon',
    width=(0.99, 0.95)[0], height=(0.99, 0.95)[1],
    ori=0.0, pos=(0, -0.1), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='grey',
    opacity=1.0, depth=-2.0, interpolate=True)
Trial_reminder = visual.TextStim(win=win, name='Trial_reminder',
    text='',
    font='Open Sans',
    pos=(0, 0.48), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
polygon_start = visual.Rect(
    win=win, name='polygon_start',
    width=(0.99, 0.95)[0], height=(0.99, 0.95)[1],
    ori=0.0, pos=(0, -0.1), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='grey', fillColor='grey',
    opacity=1.0, depth=-4.0, interpolate=True)

# --- Initialize components for Routine "InputTime" ---
InputTime_instruction1 = visual.TextStim(win=win, name='InputTime_instruction1',
    text='',
    font='Open Sans',
    pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
InputTime_response = keyboard.Keyboard()
InputTime_input_text = visual.TextStim(win=win, name='InputTime_input_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
polygon_2 = visual.Rect(
    win=win, name='polygon_2',
    width=(0.4, 0.128)[0], height=(0.4, 0.128)[1],
    ori=0.0, pos=(0, -0.008), anchor='center',
    lineWidth=0.5,     colorSpace='rgb',  lineColor='white', fillColor=[0.0000, 0.0000, 0.0000],
    opacity=None, depth=-3.0, interpolate=True)
InputTime_instruction2 = visual.TextStim(win=win, name='InputTime_instruction2',
    text='Please type in the time using the keypad (the numbers will appear in the box below)',
    font='Open Sans',
    pos=(0, 0.2), height=0.05, wrapWidth=1.52, ori=0.0, 
    color='yellow', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# --- Initialize components for Routine "End" ---
End_instruction = visual.TextStim(win=win, name='End_instruction',
    text='All Done!\n\n\nThanks!!',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "Intro" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
Intro_response.keys = []
Intro_response.rt = []
_Intro_response_allKeys = []
# keep track of which components have finished
IntroComponents = [Intro_instruction, Intro_response]
for thisComponent in IntroComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "Intro" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Intro_instruction* updates
    if Intro_instruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Intro_instruction.frameNStart = frameN  # exact frame index
        Intro_instruction.tStart = t  # local t and not account for scr refresh
        Intro_instruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Intro_instruction, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Intro_instruction.started')
        Intro_instruction.setAutoDraw(True)
    
    # *Intro_response* updates
    waitOnFlip = False
    if Intro_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Intro_response.frameNStart = frameN  # exact frame index
        Intro_response.tStart = t  # local t and not account for scr refresh
        Intro_response.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Intro_response, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'Intro_response.started')
        Intro_response.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Intro_response.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Intro_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Intro_response.status == STARTED and not waitOnFlip:
        theseKeys = Intro_response.getKeys(keyList=['return'], waitRelease=False)
        _Intro_response_allKeys.extend(theseKeys)
        if len(_Intro_response_allKeys):
            Intro_response.keys = _Intro_response_allKeys[-1].name  # just the last key pressed
            Intro_response.rt = _Intro_response_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in IntroComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "Intro" ---
for thisComponent in IntroComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if Intro_response.keys in ['', [], None]:  # No response was made
    Intro_response.keys = None
thisExp.addData('Intro_response.keys',Intro_response.keys)
if Intro_response.keys != None:  # we had a response
    thisExp.addData('Intro_response.rt', Intro_response.rt)
thisExp.nextEntry()
# the Routine "Intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
blocks = data.TrialHandler(nReps=10.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('movieVersionControlSheet.xlsx'),
    seed=None, name='blocks')
thisExp.addLoop(blocks)  # add the loop to the experiment
thisBlock = blocks.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in blocks:
    currentLoop = blocks
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "BlockStart" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    BlockStart_instruction1.setText(blockInstructions)
    BlockStart_instruction2.setText(blockInstructions2)
    BlockStart_response.keys = []
    BlockStart_response.rt = []
    _BlockStart_response_allKeys = []
    # keep track of which components have finished
    BlockStartComponents = [BlockStart_instruction1, BlockStart_instruction2, BlockStart_response]
    for thisComponent in BlockStartComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "BlockStart" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *BlockStart_instruction1* updates
        if BlockStart_instruction1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            BlockStart_instruction1.frameNStart = frameN  # exact frame index
            BlockStart_instruction1.tStart = t  # local t and not account for scr refresh
            BlockStart_instruction1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(BlockStart_instruction1, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'BlockStart_instruction1.started')
            BlockStart_instruction1.setAutoDraw(True)
        
        # *BlockStart_instruction2* updates
        if BlockStart_instruction2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            BlockStart_instruction2.frameNStart = frameN  # exact frame index
            BlockStart_instruction2.tStart = t  # local t and not account for scr refresh
            BlockStart_instruction2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(BlockStart_instruction2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'BlockStart_instruction2.started')
            BlockStart_instruction2.setAutoDraw(True)
        
        # *BlockStart_response* updates
        waitOnFlip = False
        if BlockStart_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            BlockStart_response.frameNStart = frameN  # exact frame index
            BlockStart_response.tStart = t  # local t and not account for scr refresh
            BlockStart_response.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(BlockStart_response, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'BlockStart_response.started')
            BlockStart_response.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(BlockStart_response.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(BlockStart_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if BlockStart_response.status == STARTED and not waitOnFlip:
            theseKeys = BlockStart_response.getKeys(keyList=['return'], waitRelease=False)
            _BlockStart_response_allKeys.extend(theseKeys)
            if len(_BlockStart_response_allKeys):
                BlockStart_response.keys = _BlockStart_response_allKeys[-1].name  # just the last key pressed
                BlockStart_response.rt = _BlockStart_response_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in BlockStartComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "BlockStart" ---
    for thisComponent in BlockStartComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if BlockStart_response.keys in ['', [], None]:  # No response was made
        BlockStart_response.keys = None
    blocks.addData('BlockStart_response.keys',BlockStart_response.keys)
    if BlockStart_response.keys != None:  # we had a response
        blocks.addData('BlockStart_response.rt', BlockStart_response.rt)
    # the Routine "BlockStart" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=10.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # --- Prepare to start Routine "VarSet" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        VarSet_instruction1.setText(trialInstructions)
        VarSet_response.keys = []
        VarSet_response.rt = []
        _VarSet_response_allKeys = []
        # keep track of which components have finished
        VarSetComponents = [VarSet_instruction1, VarSet_instruction2, VarSet_response]
        for thisComponent in VarSetComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "VarSet" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *VarSet_instruction1* updates
            if VarSet_instruction1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                VarSet_instruction1.frameNStart = frameN  # exact frame index
                VarSet_instruction1.tStart = t  # local t and not account for scr refresh
                VarSet_instruction1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(VarSet_instruction1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'VarSet_instruction1.started')
                VarSet_instruction1.setAutoDraw(True)
            
            # *VarSet_instruction2* updates
            if VarSet_instruction2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                VarSet_instruction2.frameNStart = frameN  # exact frame index
                VarSet_instruction2.tStart = t  # local t and not account for scr refresh
                VarSet_instruction2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(VarSet_instruction2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'VarSet_instruction2.started')
                VarSet_instruction2.setAutoDraw(True)
            
            # *VarSet_response* updates
            waitOnFlip = False
            if VarSet_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                VarSet_response.frameNStart = frameN  # exact frame index
                VarSet_response.tStart = t  # local t and not account for scr refresh
                VarSet_response.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(VarSet_response, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'VarSet_response.started')
                VarSet_response.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(VarSet_response.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(VarSet_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if VarSet_response.status == STARTED and not waitOnFlip:
                theseKeys = VarSet_response.getKeys(keyList=['return'], waitRelease=False)
                _VarSet_response_allKeys.extend(theseKeys)
                if len(_VarSet_response_allKeys):
                    VarSet_response.keys = _VarSet_response_allKeys[-1].name  # just the last key pressed
                    VarSet_response.rt = _VarSet_response_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in VarSetComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "VarSet" ---
        for thisComponent in VarSetComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if VarSet_response.keys in ['', [], None]:  # No response was made
            VarSet_response.keys = None
        trials.addData('VarSet_response.keys',VarSet_response.keys)
        if VarSet_response.keys != None:  # we had a response
            trials.addData('VarSet_response.rt', VarSet_response.rt)
        # the Routine "VarSet" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "Trial" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        Trial_response.keys = []
        Trial_response.rt = []
        _Trial_response_allKeys = []
        Trial_reminder.setText(trialReminder)
        # keep track of which components have finished
        TrialComponents = [movie, Trial_response, polygon, Trial_reminder, polygon_start]
        for thisComponent in TrialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "Trial" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *movie* updates
            if movie.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                movie.frameNStart = frameN  # exact frame index
                movie.tStart = t  # local t and not account for scr refresh
                movie.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(movie, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'movie.started')
                movie.setAutoDraw(True)
                movie.play()
            if movie.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > movie.tStartRefresh + 60-frameTolerance:
                    # keep track of stop time/frame for later
                    movie.tStop = t  # not accounting for scr refresh
                    movie.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'movie.stopped')
                    movie.setAutoDraw(False)
                    movie.stop()
            
            # *Trial_response* updates
            waitOnFlip = False
            if Trial_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Trial_response.frameNStart = frameN  # exact frame index
                Trial_response.tStart = t  # local t and not account for scr refresh
                Trial_response.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Trial_response, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Trial_response.started')
                Trial_response.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(Trial_response.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(Trial_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if Trial_response.status == STARTED and not waitOnFlip:
                theseKeys = Trial_response.getKeys(keyList=['return'], waitRelease=False)
                _Trial_response_allKeys.extend(theseKeys)
                if len(_Trial_response_allKeys):
                    Trial_response.keys = _Trial_response_allKeys[-1].name  # just the last key pressed
                    Trial_response.rt = _Trial_response_allKeys[-1].rt
            
            # *polygon* updates
            if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon.frameNStart = frameN  # exact frame index
                polygon.tStart = t  # local t and not account for scr refresh
                polygon.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
                polygon.setAutoDraw(True)
            if polygon.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon.tStartRefresh + 62-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon.tStop = t  # not accounting for scr refresh
                    polygon.frameNStop = frameN  # exact frame index
                    polygon.setAutoDraw(False)
            if polygon.status == STARTED:  # only update if drawing
                polygon.setOpacity(opVar, log=False)
            
            # *Trial_reminder* updates
            if Trial_reminder.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Trial_reminder.frameNStart = frameN  # exact frame index
                Trial_reminder.tStart = t  # local t and not account for scr refresh
                Trial_reminder.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Trial_reminder, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Trial_reminder.started')
                Trial_reminder.setAutoDraw(True)
            
            # *polygon_start* updates
            if polygon_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon_start.frameNStart = frameN  # exact frame index
                polygon_start.tStart = t  # local t and not account for scr refresh
                polygon_start.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon_start, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'polygon_start.started')
                polygon_start.setAutoDraw(True)
            if polygon_start.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > polygon_start.tStartRefresh + 3-frameTolerance:
                    # keep track of stop time/frame for later
                    polygon_start.tStop = t  # not accounting for scr refresh
                    polygon_start.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'polygon_start.stopped')
                    polygon_start.setAutoDraw(False)
            if polygon_start.status == STARTED:  # only update if drawing
                polygon_start.setOpacity(opVarOpen, log=False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in TrialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Trial" ---
        for thisComponent in TrialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        movie.stop()
        # check responses
        if Trial_response.keys in ['', [], None]:  # No response was made
            Trial_response.keys = None
        trials.addData('Trial_response.keys',Trial_response.keys)
        if Trial_response.keys != None:  # we had a response
            trials.addData('Trial_response.rt', Trial_response.rt)
        # the Routine "Trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "InputTime" ---
        continueRoutine = True
        routineForceEnded = False
        # update component parameters for each repeat
        InputTime_instruction1.setText(trialQuestion
)
        InputTime_response.keys = []
        InputTime_response.rt = []
        _InputTime_response_allKeys = []
        # keep track of which components have finished
        InputTimeComponents = [InputTime_instruction1, InputTime_response, InputTime_input_text, polygon_2, InputTime_instruction2]
        for thisComponent in InputTimeComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "InputTime" ---
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *InputTime_instruction1* updates
            if InputTime_instruction1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InputTime_instruction1.frameNStart = frameN  # exact frame index
                InputTime_instruction1.tStart = t  # local t and not account for scr refresh
                InputTime_instruction1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InputTime_instruction1, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InputTime_instruction1.started')
                InputTime_instruction1.setAutoDraw(True)
            
            # *InputTime_response* updates
            waitOnFlip = False
            if InputTime_response.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InputTime_response.frameNStart = frameN  # exact frame index
                InputTime_response.tStart = t  # local t and not account for scr refresh
                InputTime_response.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InputTime_response, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InputTime_response.started')
                InputTime_response.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(InputTime_response.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(InputTime_response.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if InputTime_response.status == STARTED and not waitOnFlip:
                theseKeys = InputTime_response.getKeys(keyList=['return'], waitRelease=False)
                _InputTime_response_allKeys.extend(theseKeys)
                if len(_InputTime_response_allKeys):
                    InputTime_response.keys = _InputTime_response_allKeys[-1].name  # just the last key pressed
                    InputTime_response.rt = _InputTime_response_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *InputTime_input_text* updates
            if InputTime_input_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InputTime_input_text.frameNStart = frameN  # exact frame index
                InputTime_input_text.tStart = t  # local t and not account for scr refresh
                InputTime_input_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InputTime_input_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InputTime_input_text.started')
                InputTime_input_text.setAutoDraw(True)
            if InputTime_input_text.status == STARTED:  # only update if drawing
                InputTime_input_text.setText(inputText, log=False)
            
            # *polygon_2* updates
            if polygon_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                polygon_2.frameNStart = frameN  # exact frame index
                polygon_2.tStart = t  # local t and not account for scr refresh
                polygon_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(polygon_2, 'tStartRefresh')  # time at next scr refresh
                polygon_2.setAutoDraw(True)
            
            # *InputTime_instruction2* updates
            if InputTime_instruction2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InputTime_instruction2.frameNStart = frameN  # exact frame index
                InputTime_instruction2.tStart = t  # local t and not account for scr refresh
                InputTime_instruction2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InputTime_instruction2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InputTime_instruction2.started')
                InputTime_instruction2.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in InputTimeComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "InputTime" ---
        for thisComponent in InputTimeComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if InputTime_response.keys in ['', [], None]:  # No response was made
            InputTime_response.keys = None
        trials.addData('InputTime_response.keys',InputTime_response.keys)
        if InputTime_response.keys != None:  # we had a response
            trials.addData('InputTime_response.rt', InputTime_response.rt)
        # the Routine "InputTime" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 10.0 repeats of 'trials'
    
    thisExp.nextEntry()
    
# completed 10.0 repeats of 'blocks'


# --- Prepare to start Routine "End" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
EndComponents = [End_instruction]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "End" ---
while continueRoutine and routineTimer.getTime() < 2.0:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *End_instruction* updates
    if End_instruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        End_instruction.frameNStart = frameN  # exact frame index
        End_instruction.tStart = t  # local t and not account for scr refresh
        End_instruction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(End_instruction, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'End_instruction.started')
        End_instruction.setAutoDraw(True)
    if End_instruction.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > End_instruction.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            End_instruction.tStop = t  # not accounting for scr refresh
            End_instruction.frameNStop = frameN  # exact frame index
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'End_instruction.stopped')
            End_instruction.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "End" ---
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
if routineForceEnded:
    routineTimer.reset()
else:
    routineTimer.addTime(-2.000000)

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
