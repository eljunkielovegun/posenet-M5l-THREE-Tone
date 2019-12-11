
window.addEventListener('load',()=>createButton());
var btn, release;

function createButton(){
    btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "Start";  
    btn.setAttribute('id','startButton');                 // Insert text
    document.body.appendChild(btn);
    document.getElementById('startButton').addEventListener('click', () => {
        
        Tone.start();
        console.log('clicked it');
    });
    release = document.createElement("BUTTON"); 
    release.innerHTML = "Release";                   // Insert text
    release.setAttribute('id','releaseButton');
    document.body.appendChild(release);
    document.getElementById('releaseButton').addEventListener('click', () => {
        synth.triggerRelease(["C2", "G2", "D3", "A3", 'E4', 'B4']);
        console.log('clicked it');
    });


}

// var synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "1n");

var verb = new Tone.Reverb([15.0]);

var comb = new Tone.FeedbackCombFilter ({
        delayTime : 0.1 ,
        resonance : 0.9
    });

var synth = new Tone.PolySynth(Tone.Synth,6, {
    oscillator : {
          type : "saw"
      }
  }).connect(comb).toDestination(); //
  //set the attributes using the set interface
  synth.set("detune", -130);
  //play a chord
  synth.triggerAttack(["C2", "G2", "D3", "A3", 'E4', 'B4']);

  
 