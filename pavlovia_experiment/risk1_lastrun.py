#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on Wed May 12 14:20:27 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = 'risk1'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s' % (expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/db/Documents/ANALYSIS/risk/risk1/risk1_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 800], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=(0.7000, 0.7000, 0.7000), colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "intro"
introClock = core.Clock()
intro_text2 = visual.TextStim(win=win, name='intro_text2',
    text='Your browser should now be in full-screen mode. Please do not exit full-screen mode.\n\nPlease read the following information sheet. Press the spacebar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
intro_continue2 = keyboard.Keyboard()

# Initialize components for Routine "info_sheet_2"
info_sheet_2Clock = core.Clock()
current_display = 1
end_loop = keyboard.Keyboard()
info_sheet_image = visual.ImageStim(
    win=win,
    name='info_sheet_image', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.1), size=(0.9, 0.75),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
info_sheet_move = keyboard.Keyboard()
counter = visual.TextStim(win=win, name='counter',
    text='',
    font='Arial',
    pos=(0, -0.34), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
move_text_ = visual.TextStim(win=win, name='move_text_',
    text='Use your arrow keys ← → to view the next page (or previous page).',
    font='Arial',
    pos=(0, -0.39), height=0.035, wrapWidth=1.5, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
info_sheet_next = visual.TextStim(win=win, name='info_sheet_next',
    text='If you do not wish to continue, press ‘Escape’ to quit the experiment.',
    font='Arial',
    pos=(0, -0.45), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);

# Initialize components for Routine "intro_consent"
intro_consentClock = core.Clock()
intro_text = visual.TextStim(win=win, name='intro_text',
    text='Thank you.\n\nPress the spacebar to continue to the consent form.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
intro_continue = keyboard.Keyboard()

# Initialize components for Routine "consent"
consentClock = core.Clock()
consent_key = keyboard.Keyboard()
keypress_instructions = visual.TextStim(win=win, name='keypress_instructions',
    text='Press ‘y’ if you consent to the above. Otherwise, press ‘Escape’ to quit the experiment.',
    font='Arial',
    pos=(0, -0.3), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
item_text = visual.TextStim(win=win, name='item_text',
    text='',
    font='Arial',
    pos=(-0.5, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "warning"
warningClock = core.Clock()
warning_text = visual.TextStim(win=win, name='warning_text',
    text='The information you are about to see concerns data about various risks, (e.g. losing money, experiencing side effects from medication, or becoming ill). Should any of this information distress you, please feel free to take a break at any point during the experiment. If you prefer, you are free to leave the experiment at any point, by pressing the ‘Escape’ key. This will not incur detriment to you and none of your data will be saved (however, this means that you will not be paid for your participation).',
    font='Arial',
    pos=(-0.5, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
spacebar_continue_2 = keyboard.Keyboard()
spacebar_reminder_2 = visual.TextStim(win=win, name='spacebar_reminder_2',
    text='Press the spacebar to continue.',
    font='Arial',
    pos=(0, -0.42), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "demographics"
demographicsClock = core.Clock()
age_textbox = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0.2),     letterHeight=0.03,
     size=(0.1, 0.06), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=None,
     anchor='center',
     fillColor='white', borderColor='black',
     flipHoriz=False, flipVert=False,
     editable=True,
     name='age_textbox',
     autoLog=True,
)
age_text = visual.TextStim(win=win, name='age_text',
    text='Enter your age in years (e.g. 21):',
    font='Arial',
    pos=(0, 0.3), height=0.04, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
gender_text = visual.TextStim(win=win, name='gender_text',
    text='Select your gender from the options below:',
    font='Arial',
    pos=(0, -0.1), height=0.04, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
gender_slider = visual.Slider(win=win, name='gender_slider',
    size=(0.4, 0.05), pos=(0, -0.2), units=None,
    labels=['Female', 'Male', 'Non-binary'], ticks=(1, 2, 3), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Open Sans', labelHeight=0.03,
    flip=False, depth=-4, readOnly=False)
spacebar_demographics = visual.TextStim(win=win, name='spacebar_demographics',
    text='Press the spacebar to continue when you have answered both questions.',
    font='Arial',
    pos=(0, -0.42), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "literacy"
literacyClock = core.Clock()
literacy_top = visual.TextStim(win=win, name='literacy_top',
    text='Please answer the following questions about using graphs and charts. Click on the slider next to each question to indicate your response. Press the spacebar when you have finished:',
    font='Arial',
    pos=(-0.7, 0.4), height=0.03, wrapWidth=1.3, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
questions_text = visual.TextStim(win=win, name='questions_text',
    text='How good are you at working with bar charts?\n\n\n\nHow good are you at working with line plots?\n\n\n\nHow good are you at working with pie charts?\n\n\n\nHow good are you at inferring the size of a bar in a bar chart?\n\n\n\nHow good are you at determining the difference between two bars in a bar chart?',
    font='Arial',
    pos=(-0.7, -0.05), height=0.03, wrapWidth=0.75, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
q1_slider = visual.Slider(win=win, name='q1_slider',
    size=(0.55, 0.03), pos=(0.39, 0.27), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-2, readOnly=False)
q2_slider = visual.Slider(win=win, name='q2_slider',
    size=(0.55, 0.03), pos=(0.39, 0.13), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-3, readOnly=False)
q3_slider = visual.Slider(win=win, name='q3_slider',
    size=(0.55, 0.03), pos=(0.39, -0.02), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-4, readOnly=False)
q4_slider = visual.Slider(win=win, name='q4_slider',
    size=(0.55, 0.03), pos=(0.39, -0.16), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-5, readOnly=False)
q5_slider = visual.Slider(win=win, name='q5_slider',
    size=(0.55, 0.03), pos=(0.39, -0.33), units=None,
    labels=['Not at \n all good', 'Extremely \n good'], ticks=(1, 2, 3, 4, 5, 6), granularity=1.0,
    style='rating', styleTweaks=(), opacity=None,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-6, readOnly=False)
spacebar_continue_4 = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
title_text_2 = visual.TextStim(win=win, name='title_text_2',
    text='Instructions',
    font='Arial',
    pos=(0, 0.43), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instructions_image = visual.ImageStim(
    win=win,
    name='instructions_image', 
    image='sin', mask=None,
    ori=0.0, pos=(0, -0.1), size=(1.1, 0.7),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
border = visual.Rect(
    win=win, name='border',
    width=(instructions_image.size[0], instructions_image.size[1])[0], height=(instructions_image.size[0], instructions_image.size[1])[1],
    ori=0.0, pos=[instructions_image.pos],
    lineWidth=2.0,     colorSpace='rgb',  lineColor='black', fillColor=None,
    opacity=0.1, depth=-2.0, interpolate=True)
instr_text = visual.TextStim(win=win, name='instr_text',
    text='',
    font='Arial',
    pos=(-0.55, 0.34), height=0.035, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
spacebar_continue = keyboard.Keyboard()
instr_spacebar = visual.TextStim(win=win, name='instr_spacebar',
    text='Press the spacebar\nto move on to\nthe next slide.',
    font='Arial',
    pos=(0.6, 0.3), height=0.025, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
spacebar_box = visual.Rect(
    win=win, name='spacebar_box',
    width=(0.23, 0.1)[0], height=(0.23, 0.1)[1],
    ori=0.0, pos=[instr_spacebar.pos],
    lineWidth=1.0,     colorSpace='rgb',  lineColor='black', fillColor='darkgrey',
    opacity=0.25, depth=-6.0, interpolate=True)
counter_2 = visual.TextStim(win=win, name='counter_2',
    text='',
    font='Arial',
    pos=(0.6, 0.38), height=0.025, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);

# Initialize components for Routine "practice"
practiceClock = core.Clock()
title_practice = visual.TextStim(win=win, name='title_practice',
    text='',
    font='Arial',
    pos=(0, 0.43), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
scenario_practice = visual.TextStim(win=win, name='scenario_practice',
    text='',
    font='Arial',
    pos=(-0.55, 0.35), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
graph_intro_practice = visual.TextStim(win=win, name='graph_intro_practice',
    text='',
    font='Arial',
    pos=(-0.55, 0.28), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
graph_practice = visual.ImageStim(
    win=win,
    name='graph_practice', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, -0.1), size=(0.42, 0.588),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
if_text_practice = visual.TextStim(win=win, name='if_text_practice',
    text='',
    font='Arial',
    pos=(0.24, 0.09), height=0.03, wrapWidth=0.6, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
chance_question_practice = visual.TextStim(win=win, name='chance_question_practice',
    text='',
    font='Arial',
    pos=(0.25, -0.02), height=0.03, wrapWidth=0.6, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
severity_question_practice = visual.TextStim(win=win, name='severity_question_practice',
    text='',
    font='Arial',
    pos=(0.25, -0.23), height=0.03, wrapWidth=0.6, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
chance_slider_practice = visual.Slider(win=win, name='chance_slider_practice',
    size=(0.6, 0.03), pos=(0.25, -0.08), units=None,
    labels=['Very\nunlikely','Very\nlikely'], ticks=(1,2,3,4,5,6,7), granularity=1,
    style=['triangleMarker'], styleTweaks=(), opacity=1,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-7, readOnly=False)
severity_slider_practice = visual.Slider(win=win, name='severity_slider_practice',
    size=(0.6, 0.03), pos=(0.25, -0.29), units=None,
    labels=['Very\nmild','Very\nsevere'], ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1,
    style=['rating'], styleTweaks=(), opacity=1,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-8, readOnly=False)
spacebar_reminder_practice = visual.TextStim(win=win, name='spacebar_reminder_practice',
    text='Press the spacebar to continue when you have made your response.',
    font='Arial',
    pos=(0, -0.42), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);
key_resp_practice = keyboard.Keyboard()

# Initialize components for Routine "practice_end"
practice_endClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='The practice has now finished. The experiment will start when you press the spacebar.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
title_text = visual.TextStim(win=win, name='title_text',
    text='',
    font='Arial',
    pos=(0, 0.43), height=0.03, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
trial_counter = 0
counter_text = None
trial_counter_text = visual.TextStim(win=win, name='trial_counter_text',
    text='',
    font='Arial',
    pos=(0.5, 0.43), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
scenario_text = visual.TextStim(win=win, name='scenario_text',
    text='',
    font='Arial',
    pos=(-0.57, 0.38), height=0.03, wrapWidth=1.2, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
graph_intro = visual.TextStim(win=win, name='graph_intro',
    text='',
    font='Arial',
    pos=(-0.57, 0.31), height=0.03, wrapWidth=1.2, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
graph = visual.ImageStim(
    win=win,
    name='graph', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, -0.07), size=(0.45, 0.63),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-5.0)
if_text = visual.TextStim(win=win, name='if_text',
    text='',
    font='Arial',
    pos=(-0.05, 0.2), height=0.03, wrapWidth=0.65, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
chance_question = visual.TextStim(win=win, name='chance_question',
    text='',
    font='Arial',
    pos=(-0.05, 0.13), height=0.03, wrapWidth=0.65, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
severity_question = visual.TextStim(win=win, name='severity_question',
    text='',
    font='Arial',
    pos=(-0.05, -0.12), height=0.03, wrapWidth=0.65, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-8.0);
chance_slider = visual.Slider(win=win, name='chance_slider',
    size=(0.6, 0.025), pos=(0.25, 0.07), units=None,
    labels=['Very\nunlikely','Very\nlikely'], ticks=(1,2,3,4,5,6,7), granularity=1,
    style=['triangleMarker'], styleTweaks=(), opacity=1,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-9, readOnly=False)
severity_slider = visual.Slider(win=win, name='severity_slider',
    size=(0.6, 0.025), pos=(0.25, -0.2), units=None,
    labels=['Very\nmild','Very\nsevere'], ticks=(1, 2, 3, 4, 5, 6, 7), granularity=1,
    style=['rating'], styleTweaks=(), opacity=1,
    color='black', fillColor='Red', borderColor='black', colorSpace='rgb',
    font='Arial', labelHeight=0.02,
    flip=False, depth=-10, readOnly=False)
spacebar_reminder = visual.TextStim(win=win, name='spacebar_reminder',
    text='Press the spacebar to continue when you have made your response.',
    font='Arial',
    pos=(0, -0.43), height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "pause"
pauseClock = core.Clock()
break_text = visual.TextStim(win=win, name='break_text',
    text='Take a break or press the spacebar to continue to the next trial.',
    font='Arial',
    pos=(0, 0), height=0.06, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
break_spacebar = keyboard.Keyboard()

# Initialize components for Routine "debrief"
debriefClock = core.Clock()
debrief_text = visual.TextStim(win=win, name='debrief_text',
    text='IMPORTANT: Please read the following information carefully. Your submission is not yet completed, so please do not quit the experiment. You must continue to the next page and follow additional instructions after reading the information below, so that your submission can be completed. Please note that all the information presented in this experiment was fictional. We hope that you have not been upset by any aspect of this experiment. However, if you have found any part of this experience to be distressing, please take the time to allow your mood to return to a baseline level. You may want to sit in a quiet and comfortable space, have a drink of water, or engage in an activity that you enjoy. If you would like more information on this study, please contact the researchers by sending a message on Prolific.',
    font='Open Sans',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
spacebar_continue_3 = keyboard.Keyboard()
spacebar_debrief = visual.TextStim(win=win, name='spacebar_debrief',
    text='Press the spacebar to continue.',
    font='Arial',
    pos=(0, -0.42), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "final"
finalClock = core.Clock()
final_text = visual.TextStim(win=win, name='final_text',
    text='The experiment has now finished.\n\nPlease press the spacebar and follow the instructions to complete your submission. \n\nThank you for taking part.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
final_keypress = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "intro"-------
continueRoutine = True
# update component parameters for each repeat
intro_continue2.keys = []
intro_continue2.rt = []
_intro_continue2_allKeys = []
# keep track of which components have finished
introComponents = [intro_text2, intro_continue2]
for thisComponent in introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro"-------
while continueRoutine:
    # get current time
    t = introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *intro_text2* updates
    if intro_text2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_text2.frameNStart = frameN  # exact frame index
        intro_text2.tStart = t  # local t and not account for scr refresh
        intro_text2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_text2, 'tStartRefresh')  # time at next scr refresh
        intro_text2.setAutoDraw(True)
    
    # *intro_continue2* updates
    waitOnFlip = False
    if intro_continue2.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        intro_continue2.frameNStart = frameN  # exact frame index
        intro_continue2.tStart = t  # local t and not account for scr refresh
        intro_continue2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_continue2, 'tStartRefresh')  # time at next scr refresh
        intro_continue2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(intro_continue2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(intro_continue2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if intro_continue2.status == STARTED and not waitOnFlip:
        theseKeys = intro_continue2.getKeys(keyList=['space'], waitRelease=False)
        _intro_continue2_allKeys.extend(theseKeys)
        if len(_intro_continue2_allKeys):
            intro_continue2.keys = _intro_continue2_allKeys[-1].name  # just the last key pressed
            intro_continue2.rt = _intro_continue2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro"-------
for thisComponent in introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
info_sheet_loop = data.TrialHandler(nReps=100.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='info_sheet_loop')
thisExp.addLoop(info_sheet_loop)  # add the loop to the experiment
thisInfo_sheet_loop = info_sheet_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInfo_sheet_loop.rgb)
if thisInfo_sheet_loop != None:
    for paramName in thisInfo_sheet_loop:
        exec('{} = thisInfo_sheet_loop[paramName]'.format(paramName))

for thisInfo_sheet_loop in info_sheet_loop:
    currentLoop = info_sheet_loop
    # abbreviate parameter names if possible (e.g. rgb = thisInfo_sheet_loop.rgb)
    if thisInfo_sheet_loop != None:
        for paramName in thisInfo_sheet_loop:
            exec('{} = thisInfo_sheet_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "info_sheet_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    current_str = str(current_display)
    
    display_this = "info" + current_str + ".png"
    
    intro_counter_text = "Page " + current_str + " of 4"
    end_loop.keys = []
    end_loop.rt = []
    _end_loop_allKeys = []
    info_sheet_image.setImage(display_this)
    info_sheet_move.keys = []
    info_sheet_move.rt = []
    _info_sheet_move_allKeys = []
    counter.setText(intro_counter_text)
    # keep track of which components have finished
    info_sheet_2Components = [end_loop, info_sheet_image, info_sheet_move, counter, move_text_, info_sheet_next]
    for thisComponent in info_sheet_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    info_sheet_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "info_sheet_2"-------
    while continueRoutine:
        # get current time
        t = info_sheet_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=info_sheet_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if end_loop.keys == 'space':
            continueRoutine = False
        
        # *end_loop* updates
        waitOnFlip = False
        if end_loop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_loop.frameNStart = frameN  # exact frame index
            end_loop.tStart = t  # local t and not account for scr refresh
            end_loop.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_loop, 'tStartRefresh')  # time at next scr refresh
            end_loop.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(end_loop.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(end_loop.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if end_loop.status == STARTED and not waitOnFlip:
            theseKeys = end_loop.getKeys(keyList=['space'], waitRelease=False)
            _end_loop_allKeys.extend(theseKeys)
            if len(_end_loop_allKeys):
                end_loop.keys = _end_loop_allKeys[-1].name  # just the last key pressed
                end_loop.rt = _end_loop_allKeys[-1].rt
        
        # *info_sheet_image* updates
        if info_sheet_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            info_sheet_image.frameNStart = frameN  # exact frame index
            info_sheet_image.tStart = t  # local t and not account for scr refresh
            info_sheet_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(info_sheet_image, 'tStartRefresh')  # time at next scr refresh
            info_sheet_image.setAutoDraw(True)
        
        # *info_sheet_move* updates
        waitOnFlip = False
        if info_sheet_move.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            info_sheet_move.frameNStart = frameN  # exact frame index
            info_sheet_move.tStart = t  # local t and not account for scr refresh
            info_sheet_move.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(info_sheet_move, 'tStartRefresh')  # time at next scr refresh
            info_sheet_move.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(info_sheet_move.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(info_sheet_move.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if info_sheet_move.status == STARTED and not waitOnFlip:
            theseKeys = info_sheet_move.getKeys(keyList=['left', 'right'], waitRelease=False)
            _info_sheet_move_allKeys.extend(theseKeys)
            if len(_info_sheet_move_allKeys):
                info_sheet_move.keys = _info_sheet_move_allKeys[-1].name  # just the last key pressed
                info_sheet_move.rt = _info_sheet_move_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *counter* updates
        if counter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            counter.frameNStart = frameN  # exact frame index
            counter.tStart = t  # local t and not account for scr refresh
            counter.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(counter, 'tStartRefresh')  # time at next scr refresh
            counter.setAutoDraw(True)
        
        # *move_text_* updates
        if move_text_.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            move_text_.frameNStart = frameN  # exact frame index
            move_text_.tStart = t  # local t and not account for scr refresh
            move_text_.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(move_text_, 'tStartRefresh')  # time at next scr refresh
            move_text_.setAutoDraw(True)
        
        # *info_sheet_next* updates
        if info_sheet_next.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            info_sheet_next.frameNStart = frameN  # exact frame index
            info_sheet_next.tStart = t  # local t and not account for scr refresh
            info_sheet_next.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(info_sheet_next, 'tStartRefresh')  # time at next scr refresh
            info_sheet_next.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in info_sheet_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "info_sheet_2"-------
    for thisComponent in info_sheet_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if info_sheet_move.keys == 'right' and current_display < 4:
        current_display = current_display + 1
    elif info_sheet_move.keys == 'left' and current_display > 1:
        current_display = current_display - 1
    
    if end_loop.keys == 'space':
        info_sheet_loop.finished = True
    # the Routine "info_sheet_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 100.0 repeats of 'info_sheet_loop'


# ------Prepare to start Routine "intro_consent"-------
continueRoutine = True
# update component parameters for each repeat
intro_continue.keys = []
intro_continue.rt = []
_intro_continue_allKeys = []
# keep track of which components have finished
intro_consentComponents = [intro_text, intro_continue]
for thisComponent in intro_consentComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
intro_consentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro_consent"-------
while continueRoutine:
    # get current time
    t = intro_consentClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=intro_consentClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *intro_text* updates
    if intro_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_text.frameNStart = frameN  # exact frame index
        intro_text.tStart = t  # local t and not account for scr refresh
        intro_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_text, 'tStartRefresh')  # time at next scr refresh
        intro_text.setAutoDraw(True)
    
    # *intro_continue* updates
    waitOnFlip = False
    if intro_continue.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        intro_continue.frameNStart = frameN  # exact frame index
        intro_continue.tStart = t  # local t and not account for scr refresh
        intro_continue.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_continue, 'tStartRefresh')  # time at next scr refresh
        intro_continue.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(intro_continue.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(intro_continue.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if intro_continue.status == STARTED and not waitOnFlip:
        theseKeys = intro_continue.getKeys(keyList=['space'], waitRelease=False)
        _intro_continue_allKeys.extend(theseKeys)
        if len(_intro_continue_allKeys):
            intro_continue.keys = _intro_continue_allKeys[-1].name  # just the last key pressed
            intro_continue.rt = _intro_continue_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in intro_consentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro_consent"-------
for thisComponent in intro_consentComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "intro_consent" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
consent_loop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('consent.csv'),
    seed=None, name='consent_loop')
thisExp.addLoop(consent_loop)  # add the loop to the experiment
thisConsent_loop = consent_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisConsent_loop.rgb)
if thisConsent_loop != None:
    for paramName in thisConsent_loop:
        exec('{} = thisConsent_loop[paramName]'.format(paramName))

for thisConsent_loop in consent_loop:
    currentLoop = consent_loop
    # abbreviate parameter names if possible (e.g. rgb = thisConsent_loop.rgb)
    if thisConsent_loop != None:
        for paramName in thisConsent_loop:
            exec('{} = thisConsent_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "consent"-------
    continueRoutine = True
    # update component parameters for each repeat
    consent_key.keys = []
    consent_key.rt = []
    _consent_key_allKeys = []
    item_text.setText(consent_item)
    # keep track of which components have finished
    consentComponents = [consent_key, keypress_instructions, item_text]
    for thisComponent in consentComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    consentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "consent"-------
    while continueRoutine:
        # get current time
        t = consentClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=consentClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *consent_key* updates
        waitOnFlip = False
        if consent_key.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            consent_key.frameNStart = frameN  # exact frame index
            consent_key.tStart = t  # local t and not account for scr refresh
            consent_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent_key, 'tStartRefresh')  # time at next scr refresh
            consent_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(consent_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(consent_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if consent_key.status == STARTED and not waitOnFlip:
            theseKeys = consent_key.getKeys(keyList=['y'], waitRelease=False)
            _consent_key_allKeys.extend(theseKeys)
            if len(_consent_key_allKeys):
                consent_key.keys = _consent_key_allKeys[-1].name  # just the last key pressed
                consent_key.rt = _consent_key_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *keypress_instructions* updates
        if keypress_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            keypress_instructions.frameNStart = frameN  # exact frame index
            keypress_instructions.tStart = t  # local t and not account for scr refresh
            keypress_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(keypress_instructions, 'tStartRefresh')  # time at next scr refresh
            keypress_instructions.setAutoDraw(True)
        
        # *item_text* updates
        if item_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            item_text.frameNStart = frameN  # exact frame index
            item_text.tStart = t  # local t and not account for scr refresh
            item_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(item_text, 'tStartRefresh')  # time at next scr refresh
            item_text.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in consentComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "consent"-------
    for thisComponent in consentComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if consent_key.keys in ['', [], None]:  # No response was made
        consent_key.keys = None
    consent_loop.addData('consent_key.keys',consent_key.keys)
    if consent_key.keys != None:  # we had a response
        consent_loop.addData('consent_key.rt', consent_key.rt)
    # the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'consent_loop'


# ------Prepare to start Routine "warning"-------
continueRoutine = True
# update component parameters for each repeat
spacebar_continue_2.keys = []
spacebar_continue_2.rt = []
_spacebar_continue_2_allKeys = []
# keep track of which components have finished
warningComponents = [warning_text, spacebar_continue_2, spacebar_reminder_2]
for thisComponent in warningComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
warningClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "warning"-------
while continueRoutine:
    # get current time
    t = warningClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=warningClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *warning_text* updates
    if warning_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        warning_text.frameNStart = frameN  # exact frame index
        warning_text.tStart = t  # local t and not account for scr refresh
        warning_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(warning_text, 'tStartRefresh')  # time at next scr refresh
        warning_text.setAutoDraw(True)
    
    # *spacebar_continue_2* updates
    waitOnFlip = False
    if spacebar_continue_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebar_continue_2.frameNStart = frameN  # exact frame index
        spacebar_continue_2.tStart = t  # local t and not account for scr refresh
        spacebar_continue_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_continue_2, 'tStartRefresh')  # time at next scr refresh
        spacebar_continue_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(spacebar_continue_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(spacebar_continue_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if spacebar_continue_2.status == STARTED and not waitOnFlip:
        theseKeys = spacebar_continue_2.getKeys(keyList=['space'], waitRelease=False)
        _spacebar_continue_2_allKeys.extend(theseKeys)
        if len(_spacebar_continue_2_allKeys):
            spacebar_continue_2.keys = _spacebar_continue_2_allKeys[-1].name  # just the last key pressed
            spacebar_continue_2.rt = _spacebar_continue_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *spacebar_reminder_2* updates
    if spacebar_reminder_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebar_reminder_2.frameNStart = frameN  # exact frame index
        spacebar_reminder_2.tStart = t  # local t and not account for scr refresh
        spacebar_reminder_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_reminder_2, 'tStartRefresh')  # time at next scr refresh
        spacebar_reminder_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in warningComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "warning"-------
for thisComponent in warningComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "warning" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "demographics"-------
continueRoutine = True
# update component parameters for each repeat
correct_keys = ['1','2','3','4','5','6','7','8','9','0']
enable_spacebar = False
gender_slider.reset()
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
demographicsComponents = [age_textbox, age_text, gender_text, gender_slider, spacebar_demographics, key_resp_3]
for thisComponent in demographicsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
demographicsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "demographics"-------
while continueRoutine:
    # get current time
    t = demographicsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=demographicsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *age_textbox* updates
    if age_textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        age_textbox.frameNStart = frameN  # exact frame index
        age_textbox.tStart = t  # local t and not account for scr refresh
        age_textbox.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(age_textbox, 'tStartRefresh')  # time at next scr refresh
        age_textbox.setAutoDraw(True)
    if (len(age_textbox.text) > 0):
        if age_textbox.text[-1] not in correct_keys:
            age_textbox.text = age_textbox.text[0:-1]
    
    if (len(age_textbox.text) > 1) & (gender_slider.rating != None):
        enable_spacebar = True
    
    # *age_text* updates
    if age_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        age_text.frameNStart = frameN  # exact frame index
        age_text.tStart = t  # local t and not account for scr refresh
        age_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(age_text, 'tStartRefresh')  # time at next scr refresh
        age_text.setAutoDraw(True)
    
    # *gender_text* updates
    if gender_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender_text.frameNStart = frameN  # exact frame index
        gender_text.tStart = t  # local t and not account for scr refresh
        gender_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender_text, 'tStartRefresh')  # time at next scr refresh
        gender_text.setAutoDraw(True)
    
    # *gender_slider* updates
    if gender_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        gender_slider.frameNStart = frameN  # exact frame index
        gender_slider.tStart = t  # local t and not account for scr refresh
        gender_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(gender_slider, 'tStartRefresh')  # time at next scr refresh
        gender_slider.setAutoDraw(True)
    
    # *spacebar_demographics* updates
    if spacebar_demographics.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebar_demographics.frameNStart = frameN  # exact frame index
        spacebar_demographics.tStart = t  # local t and not account for scr refresh
        spacebar_demographics.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_demographics, 'tStartRefresh')  # time at next scr refresh
        spacebar_demographics.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and enable_spacebar:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in demographicsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "demographics"-------
for thisComponent in demographicsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('age_textbox.text',age_textbox.text)
age_textbox.reset()
thisExp.addData('gender_slider.response', gender_slider.getRating())
# the Routine "demographics" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "literacy"-------
continueRoutine = True
# update component parameters for each repeat
q1_slider.reset()
q2_slider.reset()
q3_slider.reset()
q4_slider.reset()
q5_slider.reset()
spacebar_continue_4.keys = []
spacebar_continue_4.rt = []
_spacebar_continue_4_allKeys = []
all_ratings = False
questions_text.alignText = 'right'
# keep track of which components have finished
literacyComponents = [literacy_top, questions_text, q1_slider, q2_slider, q3_slider, q4_slider, q5_slider, spacebar_continue_4]
for thisComponent in literacyComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
literacyClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "literacy"-------
while continueRoutine:
    # get current time
    t = literacyClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=literacyClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *literacy_top* updates
    if literacy_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        literacy_top.frameNStart = frameN  # exact frame index
        literacy_top.tStart = t  # local t and not account for scr refresh
        literacy_top.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(literacy_top, 'tStartRefresh')  # time at next scr refresh
        literacy_top.setAutoDraw(True)
    
    # *questions_text* updates
    if questions_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        questions_text.frameNStart = frameN  # exact frame index
        questions_text.tStart = t  # local t and not account for scr refresh
        questions_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(questions_text, 'tStartRefresh')  # time at next scr refresh
        questions_text.setAutoDraw(True)
    
    # *q1_slider* updates
    if q1_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q1_slider.frameNStart = frameN  # exact frame index
        q1_slider.tStart = t  # local t and not account for scr refresh
        q1_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q1_slider, 'tStartRefresh')  # time at next scr refresh
        q1_slider.setAutoDraw(True)
    
    # *q2_slider* updates
    if q2_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q2_slider.frameNStart = frameN  # exact frame index
        q2_slider.tStart = t  # local t and not account for scr refresh
        q2_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q2_slider, 'tStartRefresh')  # time at next scr refresh
        q2_slider.setAutoDraw(True)
    
    # *q3_slider* updates
    if q3_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q3_slider.frameNStart = frameN  # exact frame index
        q3_slider.tStart = t  # local t and not account for scr refresh
        q3_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q3_slider, 'tStartRefresh')  # time at next scr refresh
        q3_slider.setAutoDraw(True)
    
    # *q4_slider* updates
    if q4_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q4_slider.frameNStart = frameN  # exact frame index
        q4_slider.tStart = t  # local t and not account for scr refresh
        q4_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q4_slider, 'tStartRefresh')  # time at next scr refresh
        q4_slider.setAutoDraw(True)
    
    # *q5_slider* updates
    if q5_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q5_slider.frameNStart = frameN  # exact frame index
        q5_slider.tStart = t  # local t and not account for scr refresh
        q5_slider.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q5_slider, 'tStartRefresh')  # time at next scr refresh
        q5_slider.setAutoDraw(True)
    
    # *spacebar_continue_4* updates
    waitOnFlip = False
    if spacebar_continue_4.status == NOT_STARTED and all_ratings:
        # keep track of start time/frame for later
        spacebar_continue_4.frameNStart = frameN  # exact frame index
        spacebar_continue_4.tStart = t  # local t and not account for scr refresh
        spacebar_continue_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_continue_4, 'tStartRefresh')  # time at next scr refresh
        spacebar_continue_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(spacebar_continue_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(spacebar_continue_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if spacebar_continue_4.status == STARTED and not waitOnFlip:
        theseKeys = spacebar_continue_4.getKeys(keyList=['space'], waitRelease=False)
        _spacebar_continue_4_allKeys.extend(theseKeys)
        if len(_spacebar_continue_4_allKeys):
            spacebar_continue_4.keys = _spacebar_continue_4_allKeys[-1].name  # just the last key pressed
            spacebar_continue_4.rt = _spacebar_continue_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    all_ratings = (q1_slider.rating != None) & (q2_slider.rating != None) & (q3_slider.rating != None) & (q4_slider.rating != None) & (q5_slider.rating != None)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in literacyComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "literacy"-------
for thisComponent in literacyComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('q1_slider.response', q1_slider.getRating())
thisExp.addData('q2_slider.response', q2_slider.getRating())
thisExp.addData('q3_slider.response', q3_slider.getRating())
thisExp.addData('q4_slider.response', q4_slider.getRating())
thisExp.addData('q5_slider.response', q5_slider.getRating())
# the Routine "literacy" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
instructions_loop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('instructions.csv'),
    seed=None, name='instructions_loop')
thisExp.addLoop(instructions_loop)  # add the loop to the experiment
thisInstructions_loop = instructions_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
if thisInstructions_loop != None:
    for paramName in thisInstructions_loop:
        exec('{} = thisInstructions_loop[paramName]'.format(paramName))

for thisInstructions_loop in instructions_loop:
    currentLoop = instructions_loop
    # abbreviate parameter names if possible (e.g. rgb = thisInstructions_loop.rgb)
    if thisInstructions_loop != None:
        for paramName in thisInstructions_loop:
            exec('{} = thisInstructions_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instructions"-------
    continueRoutine = True
    # update component parameters for each repeat
    instructions_image.setImage(instructions_img)
    instr_text.setText(instructions_text)
    spacebar_continue.keys = []
    spacebar_continue.rt = []
    _spacebar_continue_allKeys = []
    counter_2.setText(slide_counter)
    # keep track of which components have finished
    instructionsComponents = [title_text_2, instructions_image, border, instr_text, spacebar_continue, instr_spacebar, spacebar_box, counter_2]
    for thisComponent in instructionsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instructions"-------
    while continueRoutine:
        # get current time
        t = instructionsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *title_text_2* updates
        if title_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            title_text_2.frameNStart = frameN  # exact frame index
            title_text_2.tStart = t  # local t and not account for scr refresh
            title_text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(title_text_2, 'tStartRefresh')  # time at next scr refresh
            title_text_2.setAutoDraw(True)
        
        # *instructions_image* updates
        if instructions_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructions_image.frameNStart = frameN  # exact frame index
            instructions_image.tStart = t  # local t and not account for scr refresh
            instructions_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructions_image, 'tStartRefresh')  # time at next scr refresh
            instructions_image.setAutoDraw(True)
        
        # *border* updates
        if border.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            border.frameNStart = frameN  # exact frame index
            border.tStart = t  # local t and not account for scr refresh
            border.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(border, 'tStartRefresh')  # time at next scr refresh
            border.setAutoDraw(True)
        
        # *instr_text* updates
        if instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_text.frameNStart = frameN  # exact frame index
            instr_text.tStart = t  # local t and not account for scr refresh
            instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_text, 'tStartRefresh')  # time at next scr refresh
            instr_text.setAutoDraw(True)
        
        # *spacebar_continue* updates
        waitOnFlip = False
        if spacebar_continue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacebar_continue.frameNStart = frameN  # exact frame index
            spacebar_continue.tStart = t  # local t and not account for scr refresh
            spacebar_continue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacebar_continue, 'tStartRefresh')  # time at next scr refresh
            spacebar_continue.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(spacebar_continue.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(spacebar_continue.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if spacebar_continue.status == STARTED and not waitOnFlip:
            theseKeys = spacebar_continue.getKeys(keyList=['space'], waitRelease=False)
            _spacebar_continue_allKeys.extend(theseKeys)
            if len(_spacebar_continue_allKeys):
                spacebar_continue.keys = _spacebar_continue_allKeys[-1].name  # just the last key pressed
                spacebar_continue.rt = _spacebar_continue_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *instr_spacebar* updates
        if instr_spacebar.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_spacebar.frameNStart = frameN  # exact frame index
            instr_spacebar.tStart = t  # local t and not account for scr refresh
            instr_spacebar.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_spacebar, 'tStartRefresh')  # time at next scr refresh
            instr_spacebar.setAutoDraw(True)
        
        # *spacebar_box* updates
        if spacebar_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacebar_box.frameNStart = frameN  # exact frame index
            spacebar_box.tStart = t  # local t and not account for scr refresh
            spacebar_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacebar_box, 'tStartRefresh')  # time at next scr refresh
            spacebar_box.setAutoDraw(True)
        
        # *counter_2* updates
        if counter_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            counter_2.frameNStart = frameN  # exact frame index
            counter_2.tStart = t  # local t and not account for scr refresh
            counter_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(counter_2, 'tStartRefresh')  # time at next scr refresh
            counter_2.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructionsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instructions"-------
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'instructions_loop'


# set up handler to look after randomisation of conditions etc
practice_loop = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('practice.csv'),
    seed=None, name='practice_loop')
thisExp.addLoop(practice_loop)  # add the loop to the experiment
thisPractice_loop = practice_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_loop.rgb)
if thisPractice_loop != None:
    for paramName in thisPractice_loop:
        exec('{} = thisPractice_loop[paramName]'.format(paramName))

for thisPractice_loop in practice_loop:
    currentLoop = practice_loop
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_loop.rgb)
    if thisPractice_loop != None:
        for paramName in thisPractice_loop:
            exec('{} = thisPractice_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    title_practice.setText(title)
    scenario_practice.setText(scenario)
    graph_intro_practice.setText(graph_cat)
    graph_practice.setImage(img)
    if_text_practice.setText(if_phrase)
    chance_question_practice.setText(chance_cat)
    severity_question_practice.setText(severity_cat)
    chance_slider_practice.reset()
    severity_slider_practice.reset()
    key_resp_practice.keys = []
    key_resp_practice.rt = []
    _key_resp_practice_allKeys = []
    all_ratings = False
    # keep track of which components have finished
    practiceComponents = [title_practice, scenario_practice, graph_intro_practice, graph_practice, if_text_practice, chance_question_practice, severity_question_practice, chance_slider_practice, severity_slider_practice, spacebar_reminder_practice, key_resp_practice]
    for thisComponent in practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practice"-------
    while continueRoutine:
        # get current time
        t = practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *title_practice* updates
        if title_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            title_practice.frameNStart = frameN  # exact frame index
            title_practice.tStart = t  # local t and not account for scr refresh
            title_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(title_practice, 'tStartRefresh')  # time at next scr refresh
            title_practice.setAutoDraw(True)
        
        # *scenario_practice* updates
        if scenario_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            scenario_practice.frameNStart = frameN  # exact frame index
            scenario_practice.tStart = t  # local t and not account for scr refresh
            scenario_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(scenario_practice, 'tStartRefresh')  # time at next scr refresh
            scenario_practice.setAutoDraw(True)
        
        # *graph_intro_practice* updates
        if graph_intro_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            graph_intro_practice.frameNStart = frameN  # exact frame index
            graph_intro_practice.tStart = t  # local t and not account for scr refresh
            graph_intro_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(graph_intro_practice, 'tStartRefresh')  # time at next scr refresh
            graph_intro_practice.setAutoDraw(True)
        
        # *graph_practice* updates
        if graph_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            graph_practice.frameNStart = frameN  # exact frame index
            graph_practice.tStart = t  # local t and not account for scr refresh
            graph_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(graph_practice, 'tStartRefresh')  # time at next scr refresh
            graph_practice.setAutoDraw(True)
        
        # *if_text_practice* updates
        if if_text_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            if_text_practice.frameNStart = frameN  # exact frame index
            if_text_practice.tStart = t  # local t and not account for scr refresh
            if_text_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(if_text_practice, 'tStartRefresh')  # time at next scr refresh
            if_text_practice.setAutoDraw(True)
        
        # *chance_question_practice* updates
        if chance_question_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            chance_question_practice.frameNStart = frameN  # exact frame index
            chance_question_practice.tStart = t  # local t and not account for scr refresh
            chance_question_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chance_question_practice, 'tStartRefresh')  # time at next scr refresh
            chance_question_practice.setAutoDraw(True)
        
        # *severity_question_practice* updates
        if severity_question_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            severity_question_practice.frameNStart = frameN  # exact frame index
            severity_question_practice.tStart = t  # local t and not account for scr refresh
            severity_question_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(severity_question_practice, 'tStartRefresh')  # time at next scr refresh
            severity_question_practice.setAutoDraw(True)
        
        # *chance_slider_practice* updates
        if chance_slider_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            chance_slider_practice.frameNStart = frameN  # exact frame index
            chance_slider_practice.tStart = t  # local t and not account for scr refresh
            chance_slider_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(chance_slider_practice, 'tStartRefresh')  # time at next scr refresh
            chance_slider_practice.setAutoDraw(True)
        
        # *severity_slider_practice* updates
        if severity_slider_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            severity_slider_practice.frameNStart = frameN  # exact frame index
            severity_slider_practice.tStart = t  # local t and not account for scr refresh
            severity_slider_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(severity_slider_practice, 'tStartRefresh')  # time at next scr refresh
            severity_slider_practice.setAutoDraw(True)
        
        # *spacebar_reminder_practice* updates
        if spacebar_reminder_practice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            spacebar_reminder_practice.frameNStart = frameN  # exact frame index
            spacebar_reminder_practice.tStart = t  # local t and not account for scr refresh
            spacebar_reminder_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(spacebar_reminder_practice, 'tStartRefresh')  # time at next scr refresh
            spacebar_reminder_practice.setAutoDraw(True)
        
        # *key_resp_practice* updates
        waitOnFlip = False
        if key_resp_practice.status == NOT_STARTED and all_ratings:
            # keep track of start time/frame for later
            key_resp_practice.frameNStart = frameN  # exact frame index
            key_resp_practice.tStart = t  # local t and not account for scr refresh
            key_resp_practice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_practice, 'tStartRefresh')  # time at next scr refresh
            key_resp_practice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_practice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_practice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_practice.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_practice.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_practice_allKeys.extend(theseKeys)
            if len(_key_resp_practice_allKeys):
                key_resp_practice.keys = _key_resp_practice_allKeys[-1].name  # just the last key pressed
                key_resp_practice.rt = _key_resp_practice_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        all_ratings = (chance_slider_practice.rating != None) & (severity_slider_practice.rating != None)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practice"-------
    for thisComponent in practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'practice_loop'


# ------Prepare to start Routine "practice_end"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
practice_endComponents = [text, key_resp_2]
for thisComponent in practice_endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
practice_endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "practice_end"-------
while continueRoutine:
    # get current time
    t = practice_endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=practice_endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp_2* updates
    waitOnFlip = False
    if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_2.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_2.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in practice_endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "practice_end"-------
for thisComponent in practice_endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
list_picker = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('conditionA.csv'),
    seed=None, name='list_picker')
thisExp.addLoop(list_picker)  # add the loop to the experiment
thisList_picker = list_picker.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisList_picker.rgb)
if thisList_picker != None:
    for paramName in thisList_picker:
        exec('{} = thisList_picker[paramName]'.format(paramName))

for thisList_picker in list_picker:
    currentLoop = list_picker
    # abbreviate parameter names if possible (e.g. rgb = thisList_picker.rgb)
    if thisList_picker != None:
        for paramName in thisList_picker:
            exec('{} = thisList_picker[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(list),
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
        
        # ------Prepare to start Routine "trial"-------
        continueRoutine = True
        # update component parameters for each repeat
        title_text.setText(title)
        trial_counter = trial_counter + 1
        counter_text = "Trial " + str(trial_counter) + " of 60"
        trial_counter_text.setText(counter_text)
        scenario_text.setText(scenario)
        graph_intro.setText(graph_cat)
        graph.setImage(img)
        if_text.setText(if_phrase)
        chance_question.setText(chance_cat)
        severity_question.setText(severity_cat)
        chance_slider.reset()
        severity_slider.reset()
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        all_ratings = False
        # keep track of which components have finished
        trialComponents = [title_text, trial_counter_text, scenario_text, graph_intro, graph, if_text, chance_question, severity_question, chance_slider, severity_slider, spacebar_reminder, key_resp]
        for thisComponent in trialComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trial"-------
        while continueRoutine:
            # get current time
            t = trialClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *title_text* updates
            if title_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                title_text.frameNStart = frameN  # exact frame index
                title_text.tStart = t  # local t and not account for scr refresh
                title_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(title_text, 'tStartRefresh')  # time at next scr refresh
                title_text.setAutoDraw(True)
            
            # *trial_counter_text* updates
            if trial_counter_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                trial_counter_text.frameNStart = frameN  # exact frame index
                trial_counter_text.tStart = t  # local t and not account for scr refresh
                trial_counter_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(trial_counter_text, 'tStartRefresh')  # time at next scr refresh
                trial_counter_text.setAutoDraw(True)
            
            # *scenario_text* updates
            if scenario_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                scenario_text.frameNStart = frameN  # exact frame index
                scenario_text.tStart = t  # local t and not account for scr refresh
                scenario_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(scenario_text, 'tStartRefresh')  # time at next scr refresh
                scenario_text.setAutoDraw(True)
            
            # *graph_intro* updates
            if graph_intro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                graph_intro.frameNStart = frameN  # exact frame index
                graph_intro.tStart = t  # local t and not account for scr refresh
                graph_intro.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(graph_intro, 'tStartRefresh')  # time at next scr refresh
                graph_intro.setAutoDraw(True)
            
            # *graph* updates
            if graph.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                graph.frameNStart = frameN  # exact frame index
                graph.tStart = t  # local t and not account for scr refresh
                graph.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(graph, 'tStartRefresh')  # time at next scr refresh
                graph.setAutoDraw(True)
            
            # *if_text* updates
            if if_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                if_text.frameNStart = frameN  # exact frame index
                if_text.tStart = t  # local t and not account for scr refresh
                if_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(if_text, 'tStartRefresh')  # time at next scr refresh
                if_text.setAutoDraw(True)
            
            # *chance_question* updates
            if chance_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                chance_question.frameNStart = frameN  # exact frame index
                chance_question.tStart = t  # local t and not account for scr refresh
                chance_question.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(chance_question, 'tStartRefresh')  # time at next scr refresh
                chance_question.setAutoDraw(True)
            
            # *severity_question* updates
            if severity_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                severity_question.frameNStart = frameN  # exact frame index
                severity_question.tStart = t  # local t and not account for scr refresh
                severity_question.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(severity_question, 'tStartRefresh')  # time at next scr refresh
                severity_question.setAutoDraw(True)
            
            # *chance_slider* updates
            if chance_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                chance_slider.frameNStart = frameN  # exact frame index
                chance_slider.tStart = t  # local t and not account for scr refresh
                chance_slider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(chance_slider, 'tStartRefresh')  # time at next scr refresh
                chance_slider.setAutoDraw(True)
            
            # *severity_slider* updates
            if severity_slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                severity_slider.frameNStart = frameN  # exact frame index
                severity_slider.tStart = t  # local t and not account for scr refresh
                severity_slider.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(severity_slider, 'tStartRefresh')  # time at next scr refresh
                severity_slider.setAutoDraw(True)
            
            # *spacebar_reminder* updates
            if spacebar_reminder.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                spacebar_reminder.frameNStart = frameN  # exact frame index
                spacebar_reminder.tStart = t  # local t and not account for scr refresh
                spacebar_reminder.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(spacebar_reminder, 'tStartRefresh')  # time at next scr refresh
                spacebar_reminder.setAutoDraw(True)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and all_ratings:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            all_ratings = (chance_slider.rating != None) & (severity_slider.rating != None)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trial"-------
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trials.addData('chance_slider.response', chance_slider.getRating())
        trials.addData('chance_slider.rt', chance_slider.getRT())
        trials.addData('severity_slider.response', severity_slider.getRating())
        trials.addData('severity_slider.rt', severity_slider.getRT())
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        trials.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
        trials.addData('key_resp.started', key_resp.tStartRefresh)
        trials.addData('key_resp.stopped', key_resp.tStopRefresh)
        # the Routine "trial" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "pause"-------
        continueRoutine = True
        # update component parameters for each repeat
        break_spacebar.keys = []
        break_spacebar.rt = []
        _break_spacebar_allKeys = []
        # keep track of which components have finished
        pauseComponents = [break_text, break_spacebar]
        for thisComponent in pauseComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        pauseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "pause"-------
        while continueRoutine:
            # get current time
            t = pauseClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=pauseClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *break_text* updates
            if break_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                break_text.frameNStart = frameN  # exact frame index
                break_text.tStart = t  # local t and not account for scr refresh
                break_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(break_text, 'tStartRefresh')  # time at next scr refresh
                break_text.setAutoDraw(True)
            
            # *break_spacebar* updates
            waitOnFlip = False
            if break_spacebar.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                break_spacebar.frameNStart = frameN  # exact frame index
                break_spacebar.tStart = t  # local t and not account for scr refresh
                break_spacebar.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(break_spacebar, 'tStartRefresh')  # time at next scr refresh
                break_spacebar.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(break_spacebar.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(break_spacebar.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if break_spacebar.status == STARTED and not waitOnFlip:
                theseKeys = break_spacebar.getKeys(keyList=['space'], waitRelease=False)
                _break_spacebar_allKeys.extend(theseKeys)
                if len(_break_spacebar_allKeys):
                    break_spacebar.keys = _break_spacebar_allKeys[-1].name  # just the last key pressed
                    break_spacebar.rt = _break_spacebar_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in pauseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "pause"-------
        for thisComponent in pauseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "pause" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1 repeats of 'trials'
    
# completed 1.0 repeats of 'list_picker'


# ------Prepare to start Routine "debrief"-------
continueRoutine = True
# update component parameters for each repeat
spacebar_continue_3.keys = []
spacebar_continue_3.rt = []
_spacebar_continue_3_allKeys = []
# keep track of which components have finished
debriefComponents = [debrief_text, spacebar_continue_3, spacebar_debrief]
for thisComponent in debriefComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
debriefClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "debrief"-------
while continueRoutine:
    # get current time
    t = debriefClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=debriefClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *debrief_text* updates
    if debrief_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        debrief_text.frameNStart = frameN  # exact frame index
        debrief_text.tStart = t  # local t and not account for scr refresh
        debrief_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(debrief_text, 'tStartRefresh')  # time at next scr refresh
        debrief_text.setAutoDraw(True)
    
    # *spacebar_continue_3* updates
    waitOnFlip = False
    if spacebar_continue_3.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
        # keep track of start time/frame for later
        spacebar_continue_3.frameNStart = frameN  # exact frame index
        spacebar_continue_3.tStart = t  # local t and not account for scr refresh
        spacebar_continue_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_continue_3, 'tStartRefresh')  # time at next scr refresh
        spacebar_continue_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(spacebar_continue_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(spacebar_continue_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if spacebar_continue_3.status == STARTED and not waitOnFlip:
        theseKeys = spacebar_continue_3.getKeys(keyList=['space'], waitRelease=False)
        _spacebar_continue_3_allKeys.extend(theseKeys)
        if len(_spacebar_continue_3_allKeys):
            spacebar_continue_3.keys = _spacebar_continue_3_allKeys[-1].name  # just the last key pressed
            spacebar_continue_3.rt = _spacebar_continue_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *spacebar_debrief* updates
    if spacebar_debrief.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        spacebar_debrief.frameNStart = frameN  # exact frame index
        spacebar_debrief.tStart = t  # local t and not account for scr refresh
        spacebar_debrief.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(spacebar_debrief, 'tStartRefresh')  # time at next scr refresh
        spacebar_debrief.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in debriefComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "debrief"-------
for thisComponent in debriefComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "debrief" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "final"-------
continueRoutine = True
# update component parameters for each repeat
final_keypress.keys = []
final_keypress.rt = []
_final_keypress_allKeys = []
# keep track of which components have finished
finalComponents = [final_text, final_keypress]
for thisComponent in finalComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
finalClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "final"-------
while continueRoutine:
    # get current time
    t = finalClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=finalClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *final_text* updates
    if final_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        final_text.frameNStart = frameN  # exact frame index
        final_text.tStart = t  # local t and not account for scr refresh
        final_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(final_text, 'tStartRefresh')  # time at next scr refresh
        final_text.setAutoDraw(True)
    
    # *final_keypress* updates
    waitOnFlip = False
    if final_keypress.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        final_keypress.frameNStart = frameN  # exact frame index
        final_keypress.tStart = t  # local t and not account for scr refresh
        final_keypress.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(final_keypress, 'tStartRefresh')  # time at next scr refresh
        final_keypress.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(final_keypress.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(final_keypress.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if final_keypress.status == STARTED and not waitOnFlip:
        theseKeys = final_keypress.getKeys(keyList=['space'], waitRelease=False)
        _final_keypress_allKeys.extend(theseKeys)
        if len(_final_keypress_allKeys):
            final_keypress.keys = _final_keypress_allKeys[-1].name  # just the last key pressed
            final_keypress.rt = _final_keypress_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in finalComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "final"-------
for thisComponent in finalComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "final" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
