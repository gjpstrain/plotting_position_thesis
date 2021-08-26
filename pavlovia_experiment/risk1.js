/************** 
 * Risk1 Test *
 **************/

import { PsychoJS } from './lib/core-2021.1.4.js';
import * as core from './lib/core-2021.1.4.js';
import { TrialHandler } from './lib/data-2021.1.4.js';
import { Scheduler } from './lib/util-2021.1.4.js';
import * as visual from './lib/visual-2021.1.4.js';
import * as sound from './lib/sound-2021.1.4.js';
import * as util from './lib/util-2021.1.4.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.7, 0.7, 0.7]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'risk1';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001', 'study_id': ''};

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
const info_sheet_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(info_sheet_loopLoopBegin, info_sheet_loopLoopScheduler);
flowScheduler.add(info_sheet_loopLoopScheduler);
flowScheduler.add(info_sheet_loopLoopEnd);
const consent_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(consent_loopLoopBegin, consent_loopLoopScheduler);
flowScheduler.add(consent_loopLoopScheduler);
flowScheduler.add(consent_loopLoopEnd);
flowScheduler.add(warningRoutineBegin());
flowScheduler.add(warningRoutineEachFrame());
flowScheduler.add(warningRoutineEnd());
flowScheduler.add(demographicsRoutineBegin());
flowScheduler.add(demographicsRoutineEachFrame());
flowScheduler.add(demographicsRoutineEnd());
flowScheduler.add(literacyRoutineBegin());
flowScheduler.add(literacyRoutineEachFrame());
flowScheduler.add(literacyRoutineEnd());
const instructions_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructions_loopLoopBegin, instructions_loopLoopScheduler);
flowScheduler.add(instructions_loopLoopScheduler);
flowScheduler.add(instructions_loopLoopEnd);
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin, practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);
flowScheduler.add(practice_endRoutineBegin());
flowScheduler.add(practice_endRoutineEachFrame());
flowScheduler.add(practice_endRoutineEnd());
const list_pickerLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(list_pickerLoopBegin, list_pickerLoopScheduler);
flowScheduler.add(list_pickerLoopScheduler);
flowScheduler.add(list_pickerLoopEnd);
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(finalRoutineBegin());
flowScheduler.add(finalRoutineEachFrame());
flowScheduler.add(finalRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'graphs/E31_lo.png', 'path': 'graphs/E31_lo.png'},
    {'name': 'graphs/F30_mid.png', 'path': 'graphs/F30_mid.png'},
    {'name': 'graphs/E20_lo.png', 'path': 'graphs/E20_lo.png'},
    {'name': 'graphs/E32_hi.png', 'path': 'graphs/E32_hi.png'},
    {'name': 'graphs/F6_mid.png', 'path': 'graphs/F6_mid.png'},
    {'name': 'info3.png', 'path': 'info3.png'},
    {'name': 'graphs/E4_lo.png', 'path': 'graphs/E4_lo.png'},
    {'name': 'graphs/F33_mid.png', 'path': 'graphs/F33_mid.png'},
    {'name': 'graphs/E35_lo.png', 'path': 'graphs/E35_lo.png'},
    {'name': 'graphs/E20_hi.png', 'path': 'graphs/E20_hi.png'},
    {'name': 'graphs/E3_lo.png', 'path': 'graphs/E3_lo.png'},
    {'name': 'graphs/E14_lo.png', 'path': 'graphs/E14_lo.png'},
    {'name': 'graphs/E15_lo.png', 'path': 'graphs/E15_lo.png'},
    {'name': 'graphs/F10_mid.png', 'path': 'graphs/F10_mid.png'},
    {'name': 'instr_items/instr6.png', 'path': 'instr_items/instr6.png'},
    {'name': 'instr_items/instr3.png', 'path': 'instr_items/instr3.png'},
    {'name': 'list1.csv', 'path': 'list1.csv'},
    {'name': 'instr_items/instr0.png', 'path': 'instr_items/instr0.png'},
    {'name': 'graphs/E11_hi.png', 'path': 'graphs/E11_hi.png'},
    {'name': 'graphs/F27_mid.png', 'path': 'graphs/F27_mid.png'},
    {'name': 'graphs/E2_hi.png', 'path': 'graphs/E2_hi.png'},
    {'name': 'consent.csv', 'path': 'consent.csv'},
    {'name': 'graphs/E28_hi.png', 'path': 'graphs/E28_hi.png'},
    {'name': 'graphs/E4_hi.png', 'path': 'graphs/E4_hi.png'},
    {'name': 'graphs/F29_mid.png', 'path': 'graphs/F29_mid.png'},
    {'name': 'graphs/F5_mid.png', 'path': 'graphs/F5_mid.png'},
    {'name': 'graphs/E28_lo.png', 'path': 'graphs/E28_lo.png'},
    {'name': 'graphs/E32_lo.png', 'path': 'graphs/E32_lo.png'},
    {'name': 'info4.png', 'path': 'info4.png'},
    {'name': 'graphs/E3_hi.png', 'path': 'graphs/E3_hi.png'},
    {'name': 'graphs/A40_mid.png', 'path': 'graphs/A40_mid.png'},
    {'name': 'graphs/F34_mid.png', 'path': 'graphs/F34_mid.png'},
    {'name': 'graphs/F12_mid.png', 'path': 'graphs/F12_mid.png'},
    {'name': 'graphs/F16_mid.png', 'path': 'graphs/F16_mid.png'},
    {'name': 'instr_items/instr2.png', 'path': 'instr_items/instr2.png'},
    {'name': 'graphs/E22_lo.png', 'path': 'graphs/E22_lo.png'},
    {'name': 'graphs/E21_hi.png', 'path': 'graphs/E21_hi.png'},
    {'name': 'instr_items/instr7.png', 'path': 'instr_items/instr7.png'},
    {'name': 'graphs/E8_lo.png', 'path': 'graphs/E8_lo.png'},
    {'name': 'graphs/E31_hi.png', 'path': 'graphs/E31_hi.png'},
    {'name': 'instructions.csv', 'path': 'instructions.csv'},
    {'name': 'graphs/E15_hi.png', 'path': 'graphs/E15_hi.png'},
    {'name': 'graphs/P36_mid.png', 'path': 'graphs/P36_mid.png'},
    {'name': 'list2.csv', 'path': 'list2.csv'},
    {'name': 'graphs/E11_lo.png', 'path': 'graphs/E11_lo.png'},
    {'name': 'graphs/A41_mid.png', 'path': 'graphs/A41_mid.png'},
    {'name': 'graphs/E23_hi.png', 'path': 'graphs/E23_hi.png'},
    {'name': 'conditionB.csv', 'path': 'conditionB.csv'},
    {'name': 'graphs/A42_mid.png', 'path': 'graphs/A42_mid.png'},
    {'name': 'graphs/E17_hi.png', 'path': 'graphs/E17_hi.png'},
    {'name': 'graphs/E1_hi.png', 'path': 'graphs/E1_hi.png'},
    {'name': 'graphs/A38_mid.png', 'path': 'graphs/A38_mid.png'},
    {'name': 'graphs/E35_hi.png', 'path': 'graphs/E35_hi.png'},
    {'name': 'graphs/A39_mid.png', 'path': 'graphs/A39_mid.png'},
    {'name': 'graphs/E1_lo.png', 'path': 'graphs/E1_lo.png'},
    {'name': 'graphs/E2_lo.png', 'path': 'graphs/E2_lo.png'},
    {'name': 'graphs/E9_lo.png', 'path': 'graphs/E9_lo.png'},
    {'name': 'graphs/F19_mid.png', 'path': 'graphs/F19_mid.png'},
    {'name': 'practice.csv', 'path': 'practice.csv'},
    {'name': 'graphs/E24_hi.png', 'path': 'graphs/E24_hi.png'},
    {'name': 'graphs/E7_lo.png', 'path': 'graphs/E7_lo.png'},
    {'name': 'graphs/F26_mid.png', 'path': 'graphs/F26_mid.png'},
    {'name': 'graphs/E23_lo.png', 'path': 'graphs/E23_lo.png'},
    {'name': 'graphs/E8_hi.png', 'path': 'graphs/E8_hi.png'},
    {'name': 'info2.png', 'path': 'info2.png'},
    {'name': 'graphs/E14_hi.png', 'path': 'graphs/E14_hi.png'},
    {'name': 'info1.png', 'path': 'info1.png'},
    {'name': 'graphs/E9_hi.png', 'path': 'graphs/E9_hi.png'},
    {'name': 'graphs/E7_hi.png', 'path': 'graphs/E7_hi.png'},
    {'name': 'graphs/F18_mid.png', 'path': 'graphs/F18_mid.png'},
    {'name': 'graphs/F13_mid.png', 'path': 'graphs/F13_mid.png'},
    {'name': 'graphs/E17_lo.png', 'path': 'graphs/E17_lo.png'},
    {'name': 'graphs/E22_hi.png', 'path': 'graphs/E22_hi.png'},
    {'name': 'instr_items/instr1.png', 'path': 'instr_items/instr1.png'},
    {'name': 'graphs/E24_lo.png', 'path': 'graphs/E24_lo.png'},
    {'name': 'graphs/E21_lo.png', 'path': 'graphs/E21_lo.png'},
    {'name': 'graphs/F25_mid.png', 'path': 'graphs/F25_mid.png'},
    {'name': 'instr_items/instr5.png', 'path': 'instr_items/instr5.png'},
    {'name': 'instr_items/instr4.png', 'path': 'instr_items/instr4.png'},
    {'name': 'graphs/P37_mid.png', 'path': 'graphs/P37_mid.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=4444F7D7', '');

  return Scheduler.Event.NEXT;
}


var introClock;
var intro_text2;
var intro_continue2;
var info_sheet_2Clock;
var current_display;
var end_loop;
var info_sheet_image;
var info_sheet_move;
var counter;
var move_text;
var info_sheet_next;
var consentClock;
var consent_key;
var keypress_instructions;
var item_text;
var warningClock;
var warning_text;
var spacebar_continue_2;
var spacebar_reminder_2;
var demographicsClock;
var age_textbox;
var age_text;
var gender_text;
var gender_slider;
var spacebar_demographics;
var key_resp_3;
var literacyClock;
var literacy_top;
var questions_text;
var q1_slider;
var q2_slider;
var q3_slider;
var q4_slider;
var q5_slider;
var spacebar_continue_4;
var instructionsClock;
var title_text_2;
var instructions_image;
var border;
var instr_text;
var spacebar_continue;
var instr_spacebar;
var spacebar_box;
var counter_2;
var practiceClock;
var title_practice;
var scenario_practice;
var graph_intro_practice;
var graph_practice;
var if_text_practice;
var chance_question_practice;
var severity_question_practice;
var chance_slider_practice;
var severity_slider_practice;
var spacebar_reminder_practice;
var key_resp_practice;
var practice_endClock;
var text;
var key_resp_2;
var trialClock;
var title_text;
var trial_counter;
var counter_text;
var trial_counter_text;
var scenario_text;
var graph_intro;
var graph;
var if_text;
var chance_question;
var severity_question;
var chance_slider;
var severity_slider;
var spacebar_reminder;
var key_resp;
var debriefClock;
var debrief_text;
var spacebar_continue_3;
var spacebar_debrief;
var finalClock;
var final_text;
var final_keypress;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  intro_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text2',
    text: 'Your browser should now be in full-screen mode. Please do not exit full-screen mode.\n\nPlease read the following information sheet. Press the spacebar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  intro_continue2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "info_sheet_2"
  info_sheet_2Clock = new util.Clock();
  current_display = 1;
  
  end_loop = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  info_sheet_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'info_sheet_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.1], size : [0.9, 0.75],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  info_sheet_move = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  counter = new visual.TextStim({
    win: psychoJS.window,
    name: 'counter',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.34)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  move_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'move_text',
    text: 'Use your arrow keys ← → to view the next page (or previous page).',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.39)], height: 0.035,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  info_sheet_next = new visual.TextStim({
    win: psychoJS.window,
    name: 'info_sheet_next',
    text: 'If you do not wish to continue, press ‘Escape’ to quit the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.45)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consent_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  keypress_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'keypress_instructions',
    text: 'Press ‘y’ if you consent to the above. \nOtherwise, press ‘Escape’ to quit the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.33)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  item_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'item_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "warning"
  warningClock = new util.Clock();
  warning_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'warning_text',
    text: 'The information you are about to see concerns data about various risks, (e.g. losing money, experiencing side effects from medication, or becoming ill). Should any of this information distress you, please feel free to take a break at any point during the experiment. If you prefer, you are free to leave the experiment at any point, by pressing the ‘Escape’ key. This will not incur detriment to you and none of your data will be saved (however, this means that you will not be paid for your participation).',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  spacebar_continue_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  spacebar_reminder_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_reminder_2',
    text: 'Press the spacebar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.42)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  age_textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'age_textbox',
    text: '',
    font: 'Open Sans',
    pos: [0, 0.2], letterHeight: 0.03,
    size: [0.1, 0.06],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  age_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'age_text',
    text: 'Enter your age in years (e.g. 21):',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  gender_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gender_text',
    text: 'Select your gender from the options below:',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  gender_slider = new visual.Slider({
    win: psychoJS.window, name: 'gender_slider',
    size: [0.4, 0.05], pos: [0, (- 0.2)], units: 'height',
    labels: ["Female", "Male", "Non-binary"], ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  spacebar_demographics = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_demographics',
    text: 'Press the spacebar to continue when you have answered both questions.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.42)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "literacy"
  literacyClock = new util.Clock();
  literacy_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'literacy_top',
    text: 'Please answer the following questions about using graphs and charts. Click on the slider next to each question to indicate your response. Press the spacebar when you have finished:',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.7), 0.4], height: 0.03,  wrapWidth: 1.3, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  questions_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'questions_text',
    text: 'How good are you at working with bar charts?\n\n\n\nHow good are you at working with line plots?\n\n\n\nHow good are you at working with pie charts?\n\n\n\nHow good are you at inferring the size of a bar in a bar chart?\n\n\n\nHow good are you at determining the difference between two bars in a bar chart?',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.7), (- 0.05)], height: 0.03,  wrapWidth: 0.75, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  q1_slider = new visual.Slider({
    win: psychoJS.window, name: 'q1_slider',
    size: [0.55, 0.03], pos: [0.39, 0.27], units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  q2_slider = new visual.Slider({
    win: psychoJS.window, name: 'q2_slider',
    size: [0.55, 0.03], pos: [0.39, 0.13], units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  q3_slider = new visual.Slider({
    win: psychoJS.window, name: 'q3_slider',
    size: [0.55, 0.03], pos: [0.39, (- 0.02)], units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  q4_slider = new visual.Slider({
    win: psychoJS.window, name: 'q4_slider',
    size: [0.55, 0.03], pos: [0.39, (- 0.16)], units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  q5_slider = new visual.Slider({
    win: psychoJS.window, name: 'q5_slider',
    size: [0.55, 0.03], pos: [0.39, (- 0.33)], units: 'height',
    labels: ["Not at \n all good", "Extremely \n good"], ticks: [1, 2, 3, 4, 5, 6],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -6, 
    flip: false,
  });
  
  spacebar_continue_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  title_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_text_2',
    text: 'Instructions',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.43], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  instructions_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 0.1)], size : [1.1, 0.7],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  border = new visual.Rect ({
    win: psychoJS.window, name: 'border', 
    width: [instructions_image.size[0], instructions_image.size[1]][0], height: [instructions_image.size[0], instructions_image.size[1]][1],
    ori: 0.0, pos: instructions_image.pos,
    lineWidth: 2.0, lineColor: new util.Color('black'),
    fillColor: new util.Color(undefined),
    opacity: 0.1, depth: -2, interpolate: true,
  });
  
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.55), 0.34], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  spacebar_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_spacebar = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_spacebar',
    text: 'Press the spacebar\nto move on to\nthe next slide.',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, 0.3], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  spacebar_box = new visual.Rect ({
    win: psychoJS.window, name: 'spacebar_box', 
    width: [0.23, 0.1][0], height: [0.23, 0.1][1],
    ori: 0.0, pos: instr_spacebar.pos,
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('darkgrey'),
    opacity: 0.25, depth: -6, interpolate: true,
  });
  
  counter_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'counter_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.6, 0.38], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  title_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.43], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  scenario_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'scenario_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.57), 0.38], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  graph_intro_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'graph_intro_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.57), 0.31], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  graph_practice = new visual.ImageStim({
    win : psychoJS.window,
    name : 'graph_practice', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), (- 0.07)], size : [0.45, 0.63],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  if_text_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'if_text_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.05), 0.15], height: 0.03,  wrapWidth: 0.6, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  chance_question_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'chance_question_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.05), 0.08], height: 0.03,  wrapWidth: 0.6, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  severity_question_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'severity_question_practice',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.05), (- 0.17)], height: 0.03,  wrapWidth: 0.6, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  chance_slider_practice = new visual.Slider({
    win: psychoJS.window, name: 'chance_slider_practice',
    size: [0.6, 0.025], pos: [0.25, 0.02], units: 'height',
    labels: ["Very\nunlikely", "Very\nlikely"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: ["TRIANGLE_MARKER"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  severity_slider_practice = new visual.Slider({
    win: psychoJS.window, name: 'severity_slider_practice',
    size: [0.6, 0.025], pos: [0.25, (- 0.25)], units: 'height',
    labels: ["Very\nmild", "Very\nsevere"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: ["RATING"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  spacebar_reminder_practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_reminder_practice',
    text: 'Press the spacebar to continue when you have made your response.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.42)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -9.0 
  });
  
  key_resp_practice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_end"
  practice_endClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'The practice has now finished. The experiment will start when you press the spacebar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  title_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'title_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.43], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  trial_counter = 0;
  counter_text = null;
  
  trial_counter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_counter_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.43], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  scenario_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'scenario_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.57), 0.38], height: 0.03,  wrapWidth: 1.2, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  graph_intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'graph_intro',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.57), 0.31], height: 0.03,  wrapWidth: 1.2, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  graph = new visual.ImageStim({
    win : psychoJS.window,
    name : 'graph', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), (- 0.07)], size : [0.45, 0.63],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -5.0 
  });
  if_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'if_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.05), 0.15], height: 0.03,  wrapWidth: 0.65, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -6.0 
  });
  
  chance_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'chance_question',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.05), 0.08], height: 0.03,  wrapWidth: 0.65, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  severity_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'severity_question',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.05), (- 0.17)], height: 0.03,  wrapWidth: 0.65, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -8.0 
  });
  
  chance_slider = new visual.Slider({
    win: psychoJS.window, name: 'chance_slider',
    size: [0.6, 0.025], pos: [0.25, 0.02], units: 'height',
    labels: ["Very\nunlikely", "Very\nlikely"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: ["TRIANGLE_MARKER"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  severity_slider = new visual.Slider({
    win: psychoJS.window, name: 'severity_slider',
    size: [0.6, 0.025], pos: [0.25, (- 0.25)], units: 'height',
    labels: ["Very\nmild", "Very\nsevere"], ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1, style: ["RATING"],
    color: new util.Color('black'), 
    fontFamily: 'Arial', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  spacebar_reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_reminder',
    text: 'Press the spacebar to continue when you have made your response.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.43)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -11.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debrief_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief_text',
    text: 'IMPORTANT: Please read the following information carefully. Your submission is not yet completed, so please do not quit the experiment. You must continue to the next page and follow additional instructions after reading the information below, so that your submission can be completed. Please note that all the information presented in this experiment was fictional. We hope that you have not been upset by any aspect of this experiment. However, if you have found any part of this experience to be distressing, please take the time to allow your mood to return to a baseline level. You may want to sit in a quiet and comfortable space, have a drink of water, or engage in an activity that you enjoy. If you would like more information on this study, please contact the researchers by sending a message on Prolific.',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  spacebar_continue_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  spacebar_debrief = new visual.TextStim({
    win: psychoJS.window,
    name: 'spacebar_debrief',
    text: 'Press the spacebar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.42)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "final"
  finalClock = new util.Clock();
  final_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'final_text',
    text: 'The experiment has now finished.\n\nPlease press the spacebar and follow the instructions to complete your submission. \n\nThank you for taking part.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  final_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _intro_continue2_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    intro_continue2.keys = undefined;
    intro_continue2.rt = undefined;
    _intro_continue2_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(intro_text2);
    introComponents.push(intro_continue2);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro'-------
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text2* updates
    if (t >= 0.0 && intro_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text2.tStart = t;  // (not accounting for frame time here)
      intro_text2.frameNStart = frameN;  // exact frame index
      
      intro_text2.setAutoDraw(true);
    }

    
    // *intro_continue2* updates
    if (t >= 1 && intro_continue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_continue2.tStart = t;  // (not accounting for frame time here)
      intro_continue2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { intro_continue2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { intro_continue2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { intro_continue2.clearEvents(); });
    }

    if (intro_continue2.status === PsychoJS.Status.STARTED) {
      let theseKeys = intro_continue2.getKeys({keyList: ['space'], waitRelease: false});
      _intro_continue2_allKeys = _intro_continue2_allKeys.concat(theseKeys);
      if (_intro_continue2_allKeys.length > 0) {
        intro_continue2.keys = _intro_continue2_allKeys[_intro_continue2_allKeys.length - 1].name;  // just the last key pressed
        intro_continue2.rt = _intro_continue2_allKeys[_intro_continue2_allKeys.length - 1].rt;
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
    for (const thisComponent of introComponents)
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


function introRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro'-------
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    intro_continue2.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var info_sheet_loop;
var currentLoop;
function info_sheet_loopLoopBegin(info_sheet_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  info_sheet_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'info_sheet_loop'
  });
  psychoJS.experiment.addLoop(info_sheet_loop); // add the loop to the experiment
  currentLoop = info_sheet_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInfo_sheet_loop of info_sheet_loop) {
    const snapshot = info_sheet_loop.getSnapshot();
    info_sheet_loopLoopScheduler.add(importConditions(snapshot));
    info_sheet_loopLoopScheduler.add(info_sheet_2RoutineBegin(snapshot));
    info_sheet_loopLoopScheduler.add(info_sheet_2RoutineEachFrame(snapshot));
    info_sheet_loopLoopScheduler.add(info_sheet_2RoutineEnd(snapshot));
    info_sheet_loopLoopScheduler.add(endLoopIteration(info_sheet_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function info_sheet_loopLoopEnd() {
  psychoJS.experiment.removeLoop(info_sheet_loop);

  return Scheduler.Event.NEXT;
}


var consent_loop;
function consent_loopLoopBegin(consent_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  consent_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'consent.csv',
    seed: undefined, name: 'consent_loop'
  });
  psychoJS.experiment.addLoop(consent_loop); // add the loop to the experiment
  currentLoop = consent_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisConsent_loop of consent_loop) {
    const snapshot = consent_loop.getSnapshot();
    consent_loopLoopScheduler.add(importConditions(snapshot));
    consent_loopLoopScheduler.add(consentRoutineBegin(snapshot));
    consent_loopLoopScheduler.add(consentRoutineEachFrame(snapshot));
    consent_loopLoopScheduler.add(consentRoutineEnd(snapshot));
    consent_loopLoopScheduler.add(endLoopIteration(consent_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function consent_loopLoopEnd() {
  psychoJS.experiment.removeLoop(consent_loop);

  return Scheduler.Event.NEXT;
}


var instructions_loop;
function instructions_loopLoopBegin(instructions_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  instructions_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instructions.csv',
    seed: undefined, name: 'instructions_loop'
  });
  psychoJS.experiment.addLoop(instructions_loop); // add the loop to the experiment
  currentLoop = instructions_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstructions_loop of instructions_loop) {
    const snapshot = instructions_loop.getSnapshot();
    instructions_loopLoopScheduler.add(importConditions(snapshot));
    instructions_loopLoopScheduler.add(instructionsRoutineBegin(snapshot));
    instructions_loopLoopScheduler.add(instructionsRoutineEachFrame(snapshot));
    instructions_loopLoopScheduler.add(instructionsRoutineEnd(snapshot));
    instructions_loopLoopScheduler.add(endLoopIteration(instructions_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function instructions_loopLoopEnd() {
  psychoJS.experiment.removeLoop(instructions_loop);

  return Scheduler.Event.NEXT;
}


var practice_loop;
function practice_loopLoopBegin(practice_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'practice.csv',
    seed: undefined, name: 'practice_loop'
  });
  psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
  currentLoop = practice_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice_loop of practice_loop) {
    const snapshot = practice_loop.getSnapshot();
    practice_loopLoopScheduler.add(importConditions(snapshot));
    practice_loopLoopScheduler.add(practiceRoutineBegin(snapshot));
    practice_loopLoopScheduler.add(practiceRoutineEachFrame(snapshot));
    practice_loopLoopScheduler.add(practiceRoutineEnd(snapshot));
    practice_loopLoopScheduler.add(endLoopIteration(practice_loopLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practice_loopLoopEnd() {
  psychoJS.experiment.removeLoop(practice_loop);

  return Scheduler.Event.NEXT;
}


var list_picker;
function list_pickerLoopBegin(list_pickerLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  list_picker = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditionB.csv',
    seed: undefined, name: 'list_picker'
  });
  psychoJS.experiment.addLoop(list_picker); // add the loop to the experiment
  currentLoop = list_picker;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisList_picker of list_picker) {
    const snapshot = list_picker.getSnapshot();
    list_pickerLoopScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    list_pickerLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    list_pickerLoopScheduler.add(trialsLoopScheduler);
    list_pickerLoopScheduler.add(trialsLoopEnd);
    list_pickerLoopScheduler.add(endLoopIteration(list_pickerLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: list,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function list_pickerLoopEnd() {
  psychoJS.experiment.removeLoop(list_picker);

  return Scheduler.Event.NEXT;
}


var current_str;
var display_this;
var intro_counter_text;
var _end_loop_allKeys;
var _info_sheet_move_allKeys;
var info_sheet_2Components;
function info_sheet_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'info_sheet_2'-------
    t = 0;
    info_sheet_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    current_str = current_display.toString();
    display_this = (("info" + current_str) + ".png");
    intro_counter_text = (("Page " + current_str) + " of 4");
    
    end_loop.keys = undefined;
    end_loop.rt = undefined;
    _end_loop_allKeys = [];
    info_sheet_image.setImage(display_this);
    info_sheet_move.keys = undefined;
    info_sheet_move.rt = undefined;
    _info_sheet_move_allKeys = [];
    counter.setText(intro_counter_text);
    // keep track of which components have finished
    info_sheet_2Components = [];
    info_sheet_2Components.push(end_loop);
    info_sheet_2Components.push(info_sheet_image);
    info_sheet_2Components.push(info_sheet_move);
    info_sheet_2Components.push(counter);
    info_sheet_2Components.push(move_text);
    info_sheet_2Components.push(info_sheet_next);
    
    for (const thisComponent of info_sheet_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function info_sheet_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'info_sheet_2'-------
    // get current time
    t = info_sheet_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((end_loop.keys === "space")) {
        continueRoutine = false;
    }
    
    
    // *end_loop* updates
    if (t >= 0.0 && end_loop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_loop.tStart = t;  // (not accounting for frame time here)
      end_loop.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_loop.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_loop.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_loop.clearEvents(); });
    }

    if (end_loop.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_loop.getKeys({keyList: ['space'], waitRelease: false});
      _end_loop_allKeys = _end_loop_allKeys.concat(theseKeys);
      if (_end_loop_allKeys.length > 0) {
        end_loop.keys = _end_loop_allKeys[_end_loop_allKeys.length - 1].name;  // just the last key pressed
        end_loop.rt = _end_loop_allKeys[_end_loop_allKeys.length - 1].rt;
      }
    }
    
    
    // *info_sheet_image* updates
    if (t >= 0.0 && info_sheet_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_sheet_image.tStart = t;  // (not accounting for frame time here)
      info_sheet_image.frameNStart = frameN;  // exact frame index
      
      info_sheet_image.setAutoDraw(true);
    }

    
    // *info_sheet_move* updates
    if (t >= 0.0 && info_sheet_move.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_sheet_move.tStart = t;  // (not accounting for frame time here)
      info_sheet_move.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { info_sheet_move.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { info_sheet_move.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { info_sheet_move.clearEvents(); });
    }

    if (info_sheet_move.status === PsychoJS.Status.STARTED) {
      let theseKeys = info_sheet_move.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _info_sheet_move_allKeys = _info_sheet_move_allKeys.concat(theseKeys);
      if (_info_sheet_move_allKeys.length > 0) {
        info_sheet_move.keys = _info_sheet_move_allKeys[_info_sheet_move_allKeys.length - 1].name;  // just the last key pressed
        info_sheet_move.rt = _info_sheet_move_allKeys[_info_sheet_move_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *counter* updates
    if (t >= 0.0 && counter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      counter.tStart = t;  // (not accounting for frame time here)
      counter.frameNStart = frameN;  // exact frame index
      
      counter.setAutoDraw(true);
    }

    
    // *move_text* updates
    if (t >= 0.0 && move_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      move_text.tStart = t;  // (not accounting for frame time here)
      move_text.frameNStart = frameN;  // exact frame index
      
      move_text.setAutoDraw(true);
    }

    
    // *info_sheet_next* updates
    if (t >= 0.0 && info_sheet_next.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_sheet_next.tStart = t;  // (not accounting for frame time here)
      info_sheet_next.frameNStart = frameN;  // exact frame index
      
      info_sheet_next.setAutoDraw(true);
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
    for (const thisComponent of info_sheet_2Components)
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


function info_sheet_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'info_sheet_2'-------
    for (const thisComponent of info_sheet_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((info_sheet_move.keys === "right") && (current_display < 4))) {
        current_display = (current_display + 1);
    } else {
        if (((info_sheet_move.keys === "left") && (current_display > 1))) {
            current_display = (current_display - 1);
        }
    }
    if ((end_loop.keys === "space")) {
        info_sheet_loop.finished = true;
    }
    
    end_loop.stop();
    info_sheet_move.stop();
    // the Routine "info_sheet_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _consent_key_allKeys;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent'-------
    t = 0;
    consentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    consent_key.keys = undefined;
    consent_key.rt = undefined;
    _consent_key_allKeys = [];
    item_text.setText(consent_item);
    item_text.setAlignHoriz('left') 
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consent_key);
    consentComponents.push(keypress_instructions);
    consentComponents.push(item_text);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function consentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent'-------
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_key* updates
    if (t >= 1 && consent_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_key.tStart = t;  // (not accounting for frame time here)
      consent_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_key.clearEvents(); });
    }

    if (consent_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_key.getKeys({keyList: ['y'], waitRelease: false});
      _consent_key_allKeys = _consent_key_allKeys.concat(theseKeys);
      if (_consent_key_allKeys.length > 0) {
        consent_key.keys = _consent_key_allKeys[_consent_key_allKeys.length - 1].name;  // just the last key pressed
        consent_key.rt = _consent_key_allKeys[_consent_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *keypress_instructions* updates
    if (t >= 0.0 && keypress_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keypress_instructions.tStart = t;  // (not accounting for frame time here)
      keypress_instructions.frameNStart = frameN;  // exact frame index
      
      keypress_instructions.setAutoDraw(true);
    }

    
    // *item_text* updates
    if (t >= 0.0 && item_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_text.tStart = t;  // (not accounting for frame time here)
      item_text.frameNStart = frameN;  // exact frame index
      
      item_text.setAutoDraw(true);
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
    for (const thisComponent of consentComponents)
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


function consentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent'-------
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent_key.keys', consent_key.keys);
    if (typeof consent_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_key.rt', consent_key.rt);
        routineTimer.reset();
        }
    
    consent_key.stop();
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spacebar_continue_2_allKeys;
var warningComponents;
function warningRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'warning'-------
    t = 0;
    warningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spacebar_continue_2.keys = undefined;
    spacebar_continue_2.rt = undefined;
    _spacebar_continue_2_allKeys = [];
    warning_text.setAlignHoriz('left') 
    // keep track of which components have finished
    warningComponents = [];
    warningComponents.push(warning_text);
    warningComponents.push(spacebar_continue_2);
    warningComponents.push(spacebar_reminder_2);
    
    for (const thisComponent of warningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function warningRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'warning'-------
    // get current time
    t = warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *warning_text* updates
    if (t >= 0.0 && warning_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warning_text.tStart = t;  // (not accounting for frame time here)
      warning_text.frameNStart = frameN;  // exact frame index
      
      warning_text.setAutoDraw(true);
    }

    
    // *spacebar_continue_2* updates
    if (t >= 3.0 && spacebar_continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue_2.tStart = t;  // (not accounting for frame time here)
      spacebar_continue_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_2.clearEvents(); });
    }

    if (spacebar_continue_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue_2.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_2_allKeys = _spacebar_continue_2_allKeys.concat(theseKeys);
      if (_spacebar_continue_2_allKeys.length > 0) {
        spacebar_continue_2.keys = _spacebar_continue_2_allKeys[_spacebar_continue_2_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue_2.rt = _spacebar_continue_2_allKeys[_spacebar_continue_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *spacebar_reminder_2* updates
    if (t >= 0.0 && spacebar_reminder_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_reminder_2.tStart = t;  // (not accounting for frame time here)
      spacebar_reminder_2.frameNStart = frameN;  // exact frame index
      
      spacebar_reminder_2.setAutoDraw(true);
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
    for (const thisComponent of warningComponents)
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


function warningRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'warning'-------
    for (const thisComponent of warningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spacebar_continue_2.stop();
    // the Routine "warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var correct_keys;
var enable_spacebar;
var _key_resp_3_allKeys;
var demographicsComponents;
function demographicsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'demographics'-------
    t = 0;
    demographicsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    correct_keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    enable_spacebar = false;
    
    gender_slider.reset()
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(age_textbox);
    demographicsComponents.push(age_text);
    demographicsComponents.push(gender_text);
    demographicsComponents.push(gender_slider);
    demographicsComponents.push(spacebar_demographics);
    demographicsComponents.push(key_resp_3);
    
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
function demographicsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'demographics'-------
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *age_textbox* updates
    if (t >= 0.0 && age_textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_textbox.tStart = t;  // (not accounting for frame time here)
      age_textbox.frameNStart = frameN;  // exact frame index
      
      age_textbox.setAutoDraw(true);
    }

    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((age_textbox.text.length > 0)) {
        if ((! _pj.in_es6(age_textbox.text.slice((- 1))[0], correct_keys))) {
            age_textbox.text = age_textbox.text.slice(0, (- 1));
        }
    }
    if (((age_textbox.text.length > 1) & (gender_slider.rating !== null))) {
        enable_spacebar = true;
    }
    
    
    // *age_text* updates
    if (t >= 0.0 && age_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      age_text.tStart = t;  // (not accounting for frame time here)
      age_text.frameNStart = frameN;  // exact frame index
      
      age_text.setAutoDraw(true);
    }

    
    // *gender_text* updates
    if (t >= 0.0 && gender_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_text.tStart = t;  // (not accounting for frame time here)
      gender_text.frameNStart = frameN;  // exact frame index
      
      gender_text.setAutoDraw(true);
    }

    
    // *gender_slider* updates
    if (t >= 0.0 && gender_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gender_slider.tStart = t;  // (not accounting for frame time here)
      gender_slider.frameNStart = frameN;  // exact frame index
      
      gender_slider.setAutoDraw(true);
    }

    
    // *spacebar_demographics* updates
    if (t >= 0.0 && spacebar_demographics.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_demographics.tStart = t;  // (not accounting for frame time here)
      spacebar_demographics.frameNStart = frameN;  // exact frame index
      
      spacebar_demographics.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if ((enable_spacebar) && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
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
    for (const thisComponent of demographicsComponents)
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


function demographicsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'demographics'-------
    for (const thisComponent of demographicsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('age_textbox.text',age_textbox.text)
    age_textbox.reset()
    psychoJS.experiment.addData('gender_slider.response', gender_slider.getRating());
    key_resp_3.stop();
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spacebar_continue_4_allKeys;
var all_ratings;
var literacyComponents;
function literacyRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'literacy'-------
    t = 0;
    literacyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    q1_slider.reset()
    q2_slider.reset()
    q3_slider.reset()
    q4_slider.reset()
    q5_slider.reset()
    spacebar_continue_4.keys = undefined;
    spacebar_continue_4.rt = undefined;
    _spacebar_continue_4_allKeys = [];
    all_ratings = false;
    questions_text.setAlignHoriz('left') 
    literacy_top.setAlignHoriz('left') 
    // keep track of which components have finished
    literacyComponents = [];
    literacyComponents.push(literacy_top);
    literacyComponents.push(questions_text);
    literacyComponents.push(q1_slider);
    literacyComponents.push(q2_slider);
    literacyComponents.push(q3_slider);
    literacyComponents.push(q4_slider);
    literacyComponents.push(q5_slider);
    literacyComponents.push(spacebar_continue_4);
    
    for (const thisComponent of literacyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function literacyRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'literacy'-------
    // get current time
    t = literacyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *literacy_top* updates
    if (t >= 0.0 && literacy_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      literacy_top.tStart = t;  // (not accounting for frame time here)
      literacy_top.frameNStart = frameN;  // exact frame index
      
      literacy_top.setAutoDraw(true);
    }

    
    // *questions_text* updates
    if (t >= 0.0 && questions_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questions_text.tStart = t;  // (not accounting for frame time here)
      questions_text.frameNStart = frameN;  // exact frame index
      
      questions_text.setAutoDraw(true);
    }

    
    // *q1_slider* updates
    if (t >= 0.0 && q1_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q1_slider.tStart = t;  // (not accounting for frame time here)
      q1_slider.frameNStart = frameN;  // exact frame index
      
      q1_slider.setAutoDraw(true);
    }

    
    // *q2_slider* updates
    if (t >= 0.0 && q2_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q2_slider.tStart = t;  // (not accounting for frame time here)
      q2_slider.frameNStart = frameN;  // exact frame index
      
      q2_slider.setAutoDraw(true);
    }

    
    // *q3_slider* updates
    if (t >= 0.0 && q3_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q3_slider.tStart = t;  // (not accounting for frame time here)
      q3_slider.frameNStart = frameN;  // exact frame index
      
      q3_slider.setAutoDraw(true);
    }

    
    // *q4_slider* updates
    if (t >= 0.0 && q4_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q4_slider.tStart = t;  // (not accounting for frame time here)
      q4_slider.frameNStart = frameN;  // exact frame index
      
      q4_slider.setAutoDraw(true);
    }

    
    // *q5_slider* updates
    if (t >= 0.0 && q5_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q5_slider.tStart = t;  // (not accounting for frame time here)
      q5_slider.frameNStart = frameN;  // exact frame index
      
      q5_slider.setAutoDraw(true);
    }

    
    // *spacebar_continue_4* updates
    if ((all_ratings) && spacebar_continue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue_4.tStart = t;  // (not accounting for frame time here)
      spacebar_continue_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_4.clearEvents(); });
    }

    if (spacebar_continue_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue_4.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_4_allKeys = _spacebar_continue_4_allKeys.concat(theseKeys);
      if (_spacebar_continue_4_allKeys.length > 0) {
        spacebar_continue_4.keys = _spacebar_continue_4_allKeys[_spacebar_continue_4_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue_4.rt = _spacebar_continue_4_allKeys[_spacebar_continue_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    all_ratings = (((((q1_slider.rating > 0) & (q2_slider.rating > 0)) & (q3_slider.rating > 0)) & (q4_slider.rating > 0)) & (q5_slider.rating > 0));
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of literacyComponents)
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


function literacyRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'literacy'-------
    for (const thisComponent of literacyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('q1_slider.response', q1_slider.getRating());
    psychoJS.experiment.addData('q2_slider.response', q2_slider.getRating());
    psychoJS.experiment.addData('q3_slider.response', q3_slider.getRating());
    psychoJS.experiment.addData('q4_slider.response', q4_slider.getRating());
    psychoJS.experiment.addData('q5_slider.response', q5_slider.getRating());
    spacebar_continue_4.stop();
    // the Routine "literacy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spacebar_continue_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instructions_image.setImage(instructions_img);
    instr_text.setText(instructions_text);
    spacebar_continue.keys = undefined;
    spacebar_continue.rt = undefined;
    _spacebar_continue_allKeys = [];
    counter_2.setText(slide_counter);
    instr_text.setAlignHoriz('left') 
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(title_text_2);
    instructionsComponents.push(instructions_image);
    instructionsComponents.push(border);
    instructionsComponents.push(instr_text);
    instructionsComponents.push(spacebar_continue);
    instructionsComponents.push(instr_spacebar);
    instructionsComponents.push(spacebar_box);
    instructionsComponents.push(counter_2);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *title_text_2* updates
    if (t >= 0.0 && title_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_text_2.tStart = t;  // (not accounting for frame time here)
      title_text_2.frameNStart = frameN;  // exact frame index
      
      title_text_2.setAutoDraw(true);
    }

    
    // *instructions_image* updates
    if (t >= 0.0 && instructions_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_image.tStart = t;  // (not accounting for frame time here)
      instructions_image.frameNStart = frameN;  // exact frame index
      
      instructions_image.setAutoDraw(true);
    }

    
    // *border* updates
    if (t >= 0.0 && border.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border.tStart = t;  // (not accounting for frame time here)
      border.frameNStart = frameN;  // exact frame index
      
      border.setAutoDraw(true);
    }

    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }

    
    // *spacebar_continue* updates
    if (t >= 0.0 && spacebar_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue.tStart = t;  // (not accounting for frame time here)
      spacebar_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue.clearEvents(); });
    }

    if (spacebar_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_allKeys = _spacebar_continue_allKeys.concat(theseKeys);
      if (_spacebar_continue_allKeys.length > 0) {
        spacebar_continue.keys = _spacebar_continue_allKeys[_spacebar_continue_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue.rt = _spacebar_continue_allKeys[_spacebar_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_spacebar* updates
    if (t >= 0.0 && instr_spacebar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_spacebar.tStart = t;  // (not accounting for frame time here)
      instr_spacebar.frameNStart = frameN;  // exact frame index
      
      instr_spacebar.setAutoDraw(true);
    }

    
    // *spacebar_box* updates
    if (t >= 0.0 && spacebar_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_box.tStart = t;  // (not accounting for frame time here)
      spacebar_box.frameNStart = frameN;  // exact frame index
      
      spacebar_box.setAutoDraw(true);
    }

    
    // *counter_2* updates
    if (t >= 0.0 && counter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      counter_2.tStart = t;  // (not accounting for frame time here)
      counter_2.frameNStart = frameN;  // exact frame index
      
      counter_2.setAutoDraw(true);
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
    for (const thisComponent of instructionsComponents)
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


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spacebar_continue.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_practice_allKeys;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    title_practice.setText(title);
    scenario_practice.setText(scenario);
    graph_intro_practice.setText(graph_cat);
    graph_practice.setImage(img);
    if_text_practice.setText(if_phrase);
    chance_question_practice.setText(chance_cat);
    severity_question_practice.setText(severity_cat);
    chance_slider_practice.reset()
    severity_slider_practice.reset()
    key_resp_practice.keys = undefined;
    key_resp_practice.rt = undefined;
    _key_resp_practice_allKeys = [];
    all_ratings = false;
    scenario_practice.setAlignHoriz('left') 
    graph_intro_practice.setAlignHoriz('left') 
    if_text_practice.setAlignHoriz('left') 
    chance_question_practice.setAlignHoriz('left') 
    severity_question_practice.setAlignHoriz('left') 
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(title_practice);
    practiceComponents.push(scenario_practice);
    practiceComponents.push(graph_intro_practice);
    practiceComponents.push(graph_practice);
    practiceComponents.push(if_text_practice);
    practiceComponents.push(chance_question_practice);
    practiceComponents.push(severity_question_practice);
    practiceComponents.push(chance_slider_practice);
    practiceComponents.push(severity_slider_practice);
    practiceComponents.push(spacebar_reminder_practice);
    practiceComponents.push(key_resp_practice);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice'-------
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *title_practice* updates
    if (t >= 0.0 && title_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_practice.tStart = t;  // (not accounting for frame time here)
      title_practice.frameNStart = frameN;  // exact frame index
      
      title_practice.setAutoDraw(true);
    }

    
    // *scenario_practice* updates
    if (t >= 0.0 && scenario_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scenario_practice.tStart = t;  // (not accounting for frame time here)
      scenario_practice.frameNStart = frameN;  // exact frame index
      
      scenario_practice.setAutoDraw(true);
    }

    
    // *graph_intro_practice* updates
    if (t >= 0.0 && graph_intro_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      graph_intro_practice.tStart = t;  // (not accounting for frame time here)
      graph_intro_practice.frameNStart = frameN;  // exact frame index
      
      graph_intro_practice.setAutoDraw(true);
    }

    
    // *graph_practice* updates
    if (t >= 0.0 && graph_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      graph_practice.tStart = t;  // (not accounting for frame time here)
      graph_practice.frameNStart = frameN;  // exact frame index
      
      graph_practice.setAutoDraw(true);
    }

    
    // *if_text_practice* updates
    if (t >= 0.0 && if_text_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      if_text_practice.tStart = t;  // (not accounting for frame time here)
      if_text_practice.frameNStart = frameN;  // exact frame index
      
      if_text_practice.setAutoDraw(true);
    }

    
    // *chance_question_practice* updates
    if (t >= 0.0 && chance_question_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chance_question_practice.tStart = t;  // (not accounting for frame time here)
      chance_question_practice.frameNStart = frameN;  // exact frame index
      
      chance_question_practice.setAutoDraw(true);
    }

    
    // *severity_question_practice* updates
    if (t >= 0.0 && severity_question_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      severity_question_practice.tStart = t;  // (not accounting for frame time here)
      severity_question_practice.frameNStart = frameN;  // exact frame index
      
      severity_question_practice.setAutoDraw(true);
    }

    
    // *chance_slider_practice* updates
    if (t >= 0.0 && chance_slider_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chance_slider_practice.tStart = t;  // (not accounting for frame time here)
      chance_slider_practice.frameNStart = frameN;  // exact frame index
      
      chance_slider_practice.setAutoDraw(true);
    }

    
    // *severity_slider_practice* updates
    if (t >= 0.0 && severity_slider_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      severity_slider_practice.tStart = t;  // (not accounting for frame time here)
      severity_slider_practice.frameNStart = frameN;  // exact frame index
      
      severity_slider_practice.setAutoDraw(true);
    }

    
    // *spacebar_reminder_practice* updates
    if (t >= 0.0 && spacebar_reminder_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_reminder_practice.tStart = t;  // (not accounting for frame time here)
      spacebar_reminder_practice.frameNStart = frameN;  // exact frame index
      
      spacebar_reminder_practice.setAutoDraw(true);
    }

    
    // *key_resp_practice* updates
    if ((all_ratings) && key_resp_practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_practice.tStart = t;  // (not accounting for frame time here)
      key_resp_practice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_practice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_practice.clearEvents(); });
    }

    if (key_resp_practice.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_practice.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_practice_allKeys = _key_resp_practice_allKeys.concat(theseKeys);
      if (_key_resp_practice_allKeys.length > 0) {
        key_resp_practice.keys = _key_resp_practice_allKeys[_key_resp_practice_allKeys.length - 1].name;  // just the last key pressed
        key_resp_practice.rt = _key_resp_practice_allKeys[_key_resp_practice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    all_ratings = (chance_slider_practice.rating > 0) & (severity_slider_practice.rating > 0);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
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


function practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice'-------
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_practice.stop();
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var practice_endComponents;
function practice_endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_end'-------
    t = 0;
    practice_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    practice_endComponents = [];
    practice_endComponents.push(text);
    practice_endComponents.push(key_resp_2);
    
    for (const thisComponent of practice_endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_end'-------
    // get current time
    t = practice_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
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
    for (const thisComponent of practice_endComponents)
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


function practice_endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_end'-------
    for (const thisComponent of practice_endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_2.stop();
    // the Routine "practice_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    title_text.setText(title);
    trial_counter = (trial_counter + 1);
    counter_text = (("Trial " + trial_counter.toString()) + " of 60");
    
    trial_counter_text.setText(counter_text);
    scenario_text.setText(scenario);
    graph_intro.setText(graph_cat);
    graph.setImage(img);
    if_text.setText(if_phrase);
    chance_question.setText(chance_cat);
    severity_question.setText(severity_cat);
    chance_slider.reset()
    severity_slider.reset()
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    all_ratings = false;
    scenario_text.setAlignHoriz('left') 
    graph_intro.setAlignHoriz('left') 
    if_text.setAlignHoriz('left') 
    chance_question.setAlignHoriz('left') 
    severity_question.setAlignHoriz('left') 
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(title_text);
    trialComponents.push(trial_counter_text);
    trialComponents.push(scenario_text);
    trialComponents.push(graph_intro);
    trialComponents.push(graph);
    trialComponents.push(if_text);
    trialComponents.push(chance_question);
    trialComponents.push(severity_question);
    trialComponents.push(chance_slider);
    trialComponents.push(severity_slider);
    trialComponents.push(spacebar_reminder);
    trialComponents.push(key_resp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *title_text* updates
    if (t >= 0.0 && title_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      title_text.tStart = t;  // (not accounting for frame time here)
      title_text.frameNStart = frameN;  // exact frame index
      
      title_text.setAutoDraw(true);
    }

    
    // *trial_counter_text* updates
    if (t >= 0.0 && trial_counter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_counter_text.tStart = t;  // (not accounting for frame time here)
      trial_counter_text.frameNStart = frameN;  // exact frame index
      
      trial_counter_text.setAutoDraw(true);
    }

    
    // *scenario_text* updates
    if (t >= 0.0 && scenario_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scenario_text.tStart = t;  // (not accounting for frame time here)
      scenario_text.frameNStart = frameN;  // exact frame index
      
      scenario_text.setAutoDraw(true);
    }

    
    // *graph_intro* updates
    if (t >= 0.0 && graph_intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      graph_intro.tStart = t;  // (not accounting for frame time here)
      graph_intro.frameNStart = frameN;  // exact frame index
      
      graph_intro.setAutoDraw(true);
    }

    
    // *graph* updates
    if (t >= 0.0 && graph.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      graph.tStart = t;  // (not accounting for frame time here)
      graph.frameNStart = frameN;  // exact frame index
      
      graph.setAutoDraw(true);
    }

    
    // *if_text* updates
    if (t >= 0.0 && if_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      if_text.tStart = t;  // (not accounting for frame time here)
      if_text.frameNStart = frameN;  // exact frame index
      
      if_text.setAutoDraw(true);
    }

    
    // *chance_question* updates
    if (t >= 0.0 && chance_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chance_question.tStart = t;  // (not accounting for frame time here)
      chance_question.frameNStart = frameN;  // exact frame index
      
      chance_question.setAutoDraw(true);
    }

    
    // *severity_question* updates
    if (t >= 0.0 && severity_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      severity_question.tStart = t;  // (not accounting for frame time here)
      severity_question.frameNStart = frameN;  // exact frame index
      
      severity_question.setAutoDraw(true);
    }

    
    // *chance_slider* updates
    if (t >= 0.0 && chance_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      chance_slider.tStart = t;  // (not accounting for frame time here)
      chance_slider.frameNStart = frameN;  // exact frame index
      
      chance_slider.setAutoDraw(true);
    }

    
    // *severity_slider* updates
    if (t >= 0.0 && severity_slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      severity_slider.tStart = t;  // (not accounting for frame time here)
      severity_slider.frameNStart = frameN;  // exact frame index
      
      severity_slider.setAutoDraw(true);
    }

    
    // *spacebar_reminder* updates
    if (t >= 0.0 && spacebar_reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_reminder.tStart = t;  // (not accounting for frame time here)
      spacebar_reminder.frameNStart = frameN;  // exact frame index
      
      spacebar_reminder.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if ((all_ratings) && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    all_ratings = (chance_slider.rating >0) & (severity_slider.rating > 0);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
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


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('chance_slider.response', chance_slider.getRating());
    psychoJS.experiment.addData('chance_slider.rt', chance_slider.getRT());
    psychoJS.experiment.addData('severity_slider.response', severity_slider.getRating());
    psychoJS.experiment.addData('severity_slider.rt', severity_slider.getRT());
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _spacebar_continue_3_allKeys;
var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'debrief'-------
    t = 0;
    debriefClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    spacebar_continue_3.keys = undefined;
    spacebar_continue_3.rt = undefined;
    _spacebar_continue_3_allKeys = [];
    debrief_text.setAlignHoriz('left') 
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debrief_text);
    debriefComponents.push(spacebar_continue_3);
    debriefComponents.push(spacebar_debrief);
    
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'debrief'-------
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_text* updates
    if (t >= 0.0 && debrief_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_text.tStart = t;  // (not accounting for frame time here)
      debrief_text.frameNStart = frameN;  // exact frame index
      
      debrief_text.setAutoDraw(true);
    }

    
    // *spacebar_continue_3* updates
    if (t >= 3.0 && spacebar_continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_continue_3.tStart = t;  // (not accounting for frame time here)
      spacebar_continue_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { spacebar_continue_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { spacebar_continue_3.clearEvents(); });
    }

    if (spacebar_continue_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = spacebar_continue_3.getKeys({keyList: ['space'], waitRelease: false});
      _spacebar_continue_3_allKeys = _spacebar_continue_3_allKeys.concat(theseKeys);
      if (_spacebar_continue_3_allKeys.length > 0) {
        spacebar_continue_3.keys = _spacebar_continue_3_allKeys[_spacebar_continue_3_allKeys.length - 1].name;  // just the last key pressed
        spacebar_continue_3.rt = _spacebar_continue_3_allKeys[_spacebar_continue_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *spacebar_debrief* updates
    if (t >= 0.0 && spacebar_debrief.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      spacebar_debrief.tStart = t;  // (not accounting for frame time here)
      spacebar_debrief.frameNStart = frameN;  // exact frame index
      
      spacebar_debrief.setAutoDraw(true);
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
    for (const thisComponent of debriefComponents)
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


function debriefRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'debrief'-------
    for (const thisComponent of debriefComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    spacebar_continue_3.stop();
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _final_keypress_allKeys;
var finalComponents;
function finalRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'final'-------
    t = 0;
    finalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    final_keypress.keys = undefined;
    final_keypress.rt = undefined;
    _final_keypress_allKeys = [];
    // keep track of which components have finished
    finalComponents = [];
    finalComponents.push(final_text);
    finalComponents.push(final_keypress);
    
    for (const thisComponent of finalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finalRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'final'-------
    // get current time
    t = finalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *final_text* updates
    if (t >= 0.0 && final_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_text.tStart = t;  // (not accounting for frame time here)
      final_text.frameNStart = frameN;  // exact frame index
      
      final_text.setAutoDraw(true);
    }

    
    // *final_keypress* updates
    if (t >= 1 && final_keypress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      final_keypress.tStart = t;  // (not accounting for frame time here)
      final_keypress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { final_keypress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { final_keypress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { final_keypress.clearEvents(); });
    }

    if (final_keypress.status === PsychoJS.Status.STARTED) {
      let theseKeys = final_keypress.getKeys({keyList: ['space'], waitRelease: false});
      _final_keypress_allKeys = _final_keypress_allKeys.concat(theseKeys);
      if (_final_keypress_allKeys.length > 0) {
        final_keypress.keys = _final_keypress_allKeys[_final_keypress_allKeys.length - 1].name;  // just the last key pressed
        final_keypress.rt = _final_keypress_allKeys[_final_keypress_allKeys.length - 1].rt;
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
    for (const thisComponent of finalComponents)
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


function finalRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'final'-------
    for (const thisComponent of finalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    final_keypress.stop();
    // the Routine "final" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
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
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
