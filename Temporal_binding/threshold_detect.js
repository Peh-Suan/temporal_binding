var mode = 'show';

var first_loop = true
var means = [];
var display_mean = false;

const get_quantile = function(arr, quantile_point) {
  arr.sort();
  return arr[Math.floor(arr.length*quantile_point)-1];
}
navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  microphone = audioContext.createMediaStreamSource(stream);
  javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
  analyser.smoothingTimeConstant = 0.8;
  analyser.fftSize = 1024;
  microphone.connect(analyser);
  analyser.connect(javascriptNode);
  javascriptNode.connect(audioContext.destination);

  const get_value = function() {
    var array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);
    var values = 0;
    
    var length = array.length;
    for (var i = 0; i < length; i++) {
      values += (array[i]);
    }
    
    var average = values / length;

    return average;
  }

  javascriptNode.onaudioprocess = function(){
    switch(mode){
      case 'show':
        document.getElementById("lvl").innerHTML = get_value();
        break;
      
      case 'getMean':
        if(first_loop){
          console.log('first loop')
          means = [];
          document.getElementById("lvl").style.fontSize = '50px';
          setTimeout(() => {
            mode = 'idle';
            first_loop = true
            document.getElementById("lvl").innerHTML = 'Threshold:' + "<br>" + get_quantile(means, .9)
            display_mean = true;
          }, 3000);
          first_loop = false
        }

        means.push(get_value())
        var to_show = 'Calculating threshold...' + "<br>" + String(get_value())
        document.getElementById("lvl").innerHTML = to_show;
    
        break;
      
      case 'idle':
        if (!display_mean){
          document.getElementById("lvl").innerHTML = 'Idle mode';
        }
        break;
    }
  }

})
