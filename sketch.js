let mic, recorder, soundFile;
let state = 0;
var aud
var but
var vid

function setup() {
  let cnv = createCanvas(300, 300);
  cnv.mousePressed(canvasPressed);
  background(220);
  textAlign(CENTER, CENTER);
  //vid.size(0.5,2)
//vid.size(100, 100);
  vid = createCapture(VIDEO)
  //vid.position(0,19)
  
   aud = createCapture(AUDIO)
  // create an audio in
  mic = new p5.AudioIn();
//but = createButton("done")
 // but.position(width/3, 179);
  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  soundFile = new p5.SoundFile();

  text('tap to record', width/2, height/2);
}

function canvasPressed() {
  // ensure audio is enabled
  userStartAudio();

  // make sure user enabled the mic
  if (state === 0 && mic.enabled) {
// but.hide()
    // record to our p5.SoundFile
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording!', width/2, height/2);
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Done! Tap to play and download', width/2,  width/2);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    save(soundFile, 'mySound.wav');
    state++;
  }
   else if (state === 3) {
   // text('tap to record', width/2, height/2);
      if (state === 0 && mic.enabled) {
// but.hide()
    // record to our p5.SoundFile
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording!', width/2, height/2);
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Done! Tap to play and download', width/2,  width/2);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    save(soundFile, 'mySound.wav');
    state++;
    reset()
  }
  }
}
function canvasPressed(reset){
if (state === 0 && mic.enabled) {
// but.hide()
    // record to our p5.SoundFile
    recorder.record(soundFile);

    background(255,0,0);
    text('Recording!', width/2, height/2);
    state++;
  }
  else if (state === 1) {
    background(0,255,0);

    // stop recorder and
    // send result to soundFile
    recorder.stop();

    text('Done! Tap to play and download', width/2,  width/2);
    state++;
  }

  else if (state === 2) {
    soundFile.play(); // play the result!
    save(soundFile, 'mySound.wav');
    state++;
  }


}
